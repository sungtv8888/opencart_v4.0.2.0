<?php
namespace Opencart\Catalog\Controller\Extension\News\News;

class NewsCategory extends \Opencart\System\Engine\Controller {
	public function index(): void {
		$this->load->language('extension/news/news/news');
		$this->load->model('extension/news/news/news');
		$this->load->model('tool/image');

		$page = isset($this->request->get['page']) ? (int)$this->request->get['page'] : 1;
		$limit = isset($this->request->get['limit']) ? (int)$this->request->get['limit'] : $this->config->get('config_pagination');

		$data['breadcrumbs'] = [];
		$data['breadcrumbs'][] = [
			'text' => $this->language->get('text_home'),
			'href' => $this->url->link('common/home', 'language=' . $this->config->get('config_language'))
		];

		if (isset($this->request->get['news_path'])) {
			$parts = explode('_', (string)$this->request->get['news_path']);
			$news_category_id = (int)array_pop($parts);
			$path = '';

			foreach ($parts as $path_id) {
				$path = $path ? $path . '_' . (int)$path_id : (int)$path_id;
				$category_info = $this->model_extension_news_news_news->getCategory($path_id);

				if ($category_info) {
					$data['breadcrumbs'][] = [
						'text' => $category_info['name'],
						'href' => $this->url->link('extension/news/news_category', 'language=' . $this->config->get('config_language') . '&news_path=' . $path)
					];
				}
			}
		} else {
			$news_category_id = 0;
		}

		$category_info = $this->model_extension_news_news_news->getCategory($news_category_id);

		if ($category_info) {
			$this->document->setTitle($category_info['meta_title']);
			$this->document->setDescription($category_info['meta_description']);
			$this->document->setKeywords($category_info['meta_keyword']);

			$data['heading_title'] = $category_info['name'];
			$data['description'] = html_entity_decode($category_info['description'], ENT_QUOTES, 'UTF-8');
			$data['thumb'] = '';

			if ($category_info['image'] && is_file(DIR_IMAGE . html_entity_decode($category_info['image'], ENT_QUOTES, 'UTF-8'))) {
				$data['thumb'] = $this->model_tool_image->resize(html_entity_decode($category_info['image'], ENT_QUOTES, 'UTF-8'), $this->config->get('config_image_category_width'), $this->config->get('config_image_category_height'));
			}

			$data['breadcrumbs'][] = [
				'text' => $category_info['name'],
				'href' => $this->url->link('extension/news/news_category', 'language=' . $this->config->get('config_language') . '&news_path=' . $this->request->get['news_path'])
			];

			$data['categories'] = [];
			$children = $this->model_extension_news_news_news->getCategories($news_category_id);

			foreach ($children as $child) {
				$child_path = $this->request->get['news_path'] . '_' . $child['news_category_id'];

				$data['categories'][] = [
					'name' => $child['name'],
					'href' => $this->url->link('extension/news/news_category', 'language=' . $this->config->get('config_language') . '&news_path=' . $child_path)
				];
			}

			$filter_data = [
				'filter_news_category_id' => $news_category_id,
				'start'                   => ($page - 1) * $limit,
				'limit'                   => $limit
			];

			$news_total = $this->model_extension_news_news_news->getTotalNews($filter_data);
			$results = $this->model_extension_news_news_news->getNewsList($filter_data);

			$data['articles'] = $this->formatArticles($results);

			$data['pagination'] = $this->load->controller('common/pagination', [
				'total' => $news_total,
				'page'  => $page,
				'limit' => $limit,
				'url'   => $this->url->link('extension/news/news_category', 'language=' . $this->config->get('config_language') . '&news_path=' . $this->request->get['news_path'] . '&page={page}')
			]);

			$data['results'] = sprintf($this->language->get('text_pagination'), ($news_total) ? (($page - 1) * $limit) + 1 : 0, ((($page - 1) * $limit) > ($news_total - $limit)) ? $news_total : ((($page - 1) * $limit) + $limit), $news_total, ceil($news_total / $limit));

			$this->render('extension/news/news/news_category', $data);
		} else {
			$this->notFound($data);
		}
	}

	private function formatArticles(array $results): array {
		$articles = [];

		foreach ($results as $result) {
			$image = '';

			if ($result['image'] && is_file(DIR_IMAGE . html_entity_decode($result['image'], ENT_QUOTES, 'UTF-8'))) {
				$image = $this->model_tool_image->resize(html_entity_decode($result['image'], ENT_QUOTES, 'UTF-8'), $this->config->get('config_image_product_width'), $this->config->get('config_image_product_height'));
			}

			$articles[] = [
				'name'           => $result['name'],
				'thumb'          => $image,
				'description'    => utf8_substr(trim(strip_tags(html_entity_decode($result['description'], ENT_QUOTES, 'UTF-8'))), 0, 220) . '..',
				'author'         => $result['author'],
				'date_available' => date($this->language->get('date_format_short'), strtotime($result['date_available'])),
				'href'           => $this->url->link('extension/news/news', 'language=' . $this->config->get('config_language') . '&news_id=' . $result['news_id'])
			];
		}

		return $articles;
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

	private function notFound(array $data): void {
		$data['breadcrumbs'][] = [
			'text' => $this->language->get('text_error'),
			'href' => $this->url->link('extension/news/news_category', 'language=' . $this->config->get('config_language'))
		];

		$this->document->setTitle($this->language->get('text_error'));
		$data['heading_title'] = $this->language->get('text_error');
		$data['text_error'] = $this->language->get('text_error');
		$data['continue'] = $this->url->link('common/home', 'language=' . $this->config->get('config_language'));

		$this->response->addHeader($this->request->server['SERVER_PROTOCOL'] . ' 404 Not Found');
		$this->render('error/not_found', $data);
	}
}
