<?php
namespace Opencart\Catalog\Controller\Extension\News\News;

class News extends \Opencart\System\Engine\Controller {
	public function index(): void {
		$this->load->language('extension/news/news/news');
		$this->load->model('extension/news/news/news');
		$this->load->model('tool/image');

		$news_id = isset($this->request->get['news_id']) ? (int)$this->request->get['news_id'] : 0;
		$news_info = $this->model_extension_news_news_news->getNews($news_id);

		$data['breadcrumbs'] = [];
		$data['breadcrumbs'][] = [
			'text' => $this->language->get('text_home'),
			'href' => $this->url->link('common/home', 'language=' . $this->config->get('config_language'))
		];

		if ($news_info) {
			$this->document->setTitle($news_info['meta_title']);
			$this->document->setDescription($news_info['meta_description']);
			$this->document->setKeywords($news_info['meta_keyword']);

			$data['breadcrumbs'][] = [
				'text' => $news_info['name'],
				'href' => $this->url->link('extension/news/news', 'language=' . $this->config->get('config_language') . '&news_id=' . $news_id)
			];

			$data['heading_title'] = $news_info['name'];
			$data['description'] = html_entity_decode($news_info['description'], ENT_QUOTES, 'UTF-8');
			$data['author'] = $news_info['author'];
			$data['date_available'] = date($this->language->get('date_format_short'), strtotime($news_info['date_available']));
			$data['viewed'] = $news_info['viewed'];
			$data['thumb'] = '';

			if ($news_info['image'] && is_file(DIR_IMAGE . html_entity_decode($news_info['image'], ENT_QUOTES, 'UTF-8'))) {
				$data['thumb'] = $this->model_tool_image->resize(html_entity_decode($news_info['image'], ENT_QUOTES, 'UTF-8'), $this->config->get('config_image_popup_width'), $this->config->get('config_image_popup_height'));
			}

			$data['continue'] = $this->url->link('common/home', 'language=' . $this->config->get('config_language'));

			$this->model_extension_news_news_news->updateViewed($news_id);
			$this->render('extension/news/news/news', $data);
		} else {
			$data['breadcrumbs'][] = [
				'text' => $this->language->get('text_error'),
				'href' => $this->url->link('extension/news/news', 'language=' . $this->config->get('config_language') . '&news_id=' . $news_id)
			];

			$this->document->setTitle($this->language->get('text_error'));
			$data['heading_title'] = $this->language->get('text_error');
			$data['text_error'] = $this->language->get('text_error');
			$data['continue'] = $this->url->link('common/home', 'language=' . $this->config->get('config_language'));

			$this->response->addHeader($this->request->server['SERVER_PROTOCOL'] . ' 404 Not Found');
			$this->render('error/not_found', $data);
		}
	}

	private function render(string $template, array $data): void {
		$data['column_left'] = $this->load->controller('common/column_left');
		$data['column_right'] = $this->load->controller('common/column_right');
		$data['content_top'] = $this->load->controller('common/content_top');
		$data['content_bottom'] = $this->load->controller('common/content_bottom');
		$data['footer'] = $this->load->controller('common/footer');
		$data['header'] = $this->load->controller('common/header');

		$this->response->setOutput($this->load->view($template, $data));
	}
}
