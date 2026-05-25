<?php
namespace Opencart\Admin\Controller\Extension\News\Catalog;

class News extends \Opencart\System\Engine\Controller {
	public function index(): void {
		$this->load->language('extension/news/catalog/news');
		$this->document->setTitle($this->language->get('heading_title'));

		$data['breadcrumbs'] = $this->breadcrumbs();
		$data['add'] = $this->url->link('extension/news/catalog/news.form', 'user_token=' . $this->session->data['user_token']);
		$data['copy'] = $this->url->link('extension/news/catalog/news.copy', 'user_token=' . $this->session->data['user_token']);
		$data['delete'] = $this->url->link('extension/news/catalog/news.delete', 'user_token=' . $this->session->data['user_token']);
		$data['list'] = $this->getList();
		$data['user_token'] = $this->session->data['user_token'];
		$data['header'] = $this->load->controller('common/header');
		$data['column_left'] = $this->load->controller('common/column_left');
		$data['footer'] = $this->load->controller('common/footer');

		$this->response->setOutput($this->load->view('extension/news/catalog/news', $data));
	}

	public function list(): void {
		$this->load->language('extension/news/catalog/news');
		$this->response->setOutput($this->getList());
	}

	protected function getList(): string {
		$sort = $this->request->get['sort'] ?? 'nd.name';
		$order = $this->request->get['order'] ?? 'ASC';
		$page = isset($this->request->get['page']) ? (int)$this->request->get['page'] : 1;

		$this->load->model('extension/news/catalog/news');

		$filter_data = [
			'sort'  => $sort,
			'order' => $order,
			'start' => ($page - 1) * $this->config->get('config_pagination_admin'),
			'limit' => $this->config->get('config_pagination_admin')
		];

		$total = $this->model_extension_news_catalog_news->getTotalNews();
		$results = $this->model_extension_news_catalog_news->getNewsList($filter_data);

		$data['action'] = $this->url->link('extension/news/catalog/news.list', 'user_token=' . $this->session->data['user_token']);
		$data['news_list'] = [];

		foreach ($results as $result) {
			$data['news_list'][] = [
				'news_id'        => $result['news_id'],
				'name'           => $result['name'],
				'author'         => $result['author'],
				'date_available' => $result['date_available'],
				'status'         => $result['status'],
				'sort_order'     => $result['sort_order'],
				'edit'           => $this->url->link('extension/news/catalog/news.form', 'user_token=' . $this->session->data['user_token'] . '&news_id=' . $result['news_id'])
			];
		}

		$url = ($order == 'ASC') ? '&order=DESC' : '&order=ASC';

		if (isset($this->request->get['page'])) {
			$url .= '&page=' . $this->request->get['page'];
		}

		$data['sort_name'] = $this->url->link('extension/news/catalog/news.list', 'user_token=' . $this->session->data['user_token'] . '&sort=nd.name' . $url);
		$data['sort_author'] = $this->url->link('extension/news/catalog/news.list', 'user_token=' . $this->session->data['user_token'] . '&sort=n.author' . $url);
		$data['sort_date_available'] = $this->url->link('extension/news/catalog/news.list', 'user_token=' . $this->session->data['user_token'] . '&sort=n.date_available' . $url);
		$data['sort_sort_order'] = $this->url->link('extension/news/catalog/news.list', 'user_token=' . $this->session->data['user_token'] . '&sort=n.sort_order' . $url);

		$data['pagination'] = $this->load->controller('common/pagination', [
			'total' => $total,
			'page'  => $page,
			'limit' => $this->config->get('config_pagination_admin'),
			'url'   => $this->url->link('extension/news/catalog/news.list', 'user_token=' . $this->session->data['user_token'] . '&page={page}')
		]);

		$data['results'] = sprintf($this->language->get('text_pagination'), ($total) ? (($page - 1) * $this->config->get('config_pagination_admin')) + 1 : 0, ((($page - 1) * $this->config->get('config_pagination_admin')) > ($total - $this->config->get('config_pagination_admin'))) ? $total : ((($page - 1) * $this->config->get('config_pagination_admin')) + $this->config->get('config_pagination_admin')), $total, ceil($total / $this->config->get('config_pagination_admin')));
		$data['sort'] = $sort;
		$data['order'] = $order;

		return $this->load->view('extension/news/catalog/news_list', $data);
	}

	public function form(): void {
		$this->load->language('extension/news/catalog/news');
		$this->document->setTitle($this->language->get('heading_title'));
		$this->document->addScript('view/javascript/ckeditor/ckeditor.js');
		$this->document->addScript('view/javascript/ckeditor/adapters/jquery.js');

		$this->load->model('extension/news/catalog/news');

		$news_id = isset($this->request->get['news_id']) ? (int)$this->request->get['news_id'] : 0;
		$info = $news_id ? $this->model_extension_news_catalog_news->getNews($news_id) : [];

		$data['text_form'] = !$news_id ? $this->language->get('text_add') : $this->language->get('text_edit');
		$data['breadcrumbs'] = $this->breadcrumbs();
		$data['save'] = $this->url->link('extension/news/catalog/news.save', 'user_token=' . $this->session->data['user_token']);
		$data['back'] = $this->url->link('extension/news/catalog/news', 'user_token=' . $this->session->data['user_token']);
		$data['news_id'] = $news_id;

		$this->load->model('localisation/language');
		$data['languages'] = $this->model_localisation_language->getLanguages();
		$data['news_description'] = $news_id ? $this->model_extension_news_catalog_news->getDescriptions($news_id) : [];

		$this->load->model('extension/news/catalog/news_category');
		$data['news_categories'] = $this->model_extension_news_catalog_news_category->getNewsCategories(['sort' => 'name', 'order' => 'ASC', 'start' => 0, 'limit' => 1000]);
		$data['news_category'] = $news_id ? $this->model_extension_news_catalog_news->getCategories($news_id) : [];

		$this->load->model('setting/store');
		$data['stores'] = [['store_id' => 0, 'name' => $this->language->get('text_default')]];
		$data['stores'] = array_merge($data['stores'], $this->model_setting_store->getStores());
		$data['news_store'] = $news_id ? $this->model_extension_news_catalog_news->getStores($news_id) : [0];
		$data['news_seo_url'] = $news_id ? $this->model_extension_news_catalog_news->getSeoUrls($news_id) : [];

		$this->load->model('design/layout');
		$data['layouts'] = $this->model_design_layout->getLayouts();
		$data['news_layout'] = $news_id ? $this->model_extension_news_catalog_news->getLayouts($news_id) : [];


		if (!empty($info)) {
			$data['image'] = $info['image'];
		} else {
			$data['image'] = '';
		}

		$this->load->model('tool/image');

		$data['placeholder'] = $this->model_tool_image->resize('no_image.png', 100, 100);

		if (is_file(DIR_IMAGE . html_entity_decode($data['image'], ENT_QUOTES, 'UTF-8'))) {
			$data['thumb'] = $this->model_tool_image->resize(html_entity_decode($data['image'], ENT_QUOTES, 'UTF-8'), 100, 100);
		} else {
			$data['thumb'] = $data['placeholder'];
		}



		//$data['image'] = $info['image'] ?? '';
		$data['author'] = $info['author'] ?? '';
		$data['user_id'] = $info['user_id'] ?? 0;
		$data['featured'] = $info['featured'] ?? 0;
		$data['date_available'] = $info['date_available'] ?? date('Y-m-d');
		$data['sort_order'] = $info['sort_order'] ?? 0;
		$data['status'] = $info['status'] ?? true;
		$data['ckeditor'] = $this->config->get('config_editor_default');
		$data['user_token'] = $this->session->data['user_token'];
		$data['header'] = $this->load->controller('common/header');
		$data['column_left'] = $this->load->controller('common/column_left');
		$data['footer'] = $this->load->controller('common/footer');

		$this->response->setOutput($this->load->view('extension/news/catalog/news_form', $data));
	}

	public function save(): void {
		$this->load->language('extension/news/catalog/news');
		$json = [];

		if (!$this->user->hasPermission('modify', 'extension/news/catalog/news')) {
			$json['error']['warning'] = $this->language->get('error_permission');
		}

		foreach ($this->request->post['news_description'] as $language_id => $value) {
			if ((oc_strlen(trim($value['name'])) < 1) || (oc_strlen($value['name']) > 255)) {
				$json['error']['name_' . $language_id] = $this->language->get('error_name');
			}

			if ((oc_strlen(trim($value['meta_title'])) < 1) || (oc_strlen($value['meta_title']) > 255)) {
				$json['error']['meta_title_' . $language_id] = $this->language->get('error_meta_title');
			}
		}

		if (isset($json['error']) && !isset($json['error']['warning'])) {
			$json['error']['warning'] = $this->language->get('error_warning');
		}

		if (!$json) {
			$this->load->model('extension/news/catalog/news');

			if (!$this->request->post['news_id']) {
				$json['news_id'] = $this->model_extension_news_catalog_news->addNews($this->request->post);
			} else {
				$this->model_extension_news_catalog_news->editNews($this->request->post['news_id'], $this->request->post);
			}

			$json['success'] = $this->language->get('text_success');
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	public function copy(): void {
		$this->load->language('extension/news/catalog/news');
		$json = [];

		if (!$this->user->hasPermission('modify', 'extension/news/catalog/news')) {
			$json['error'] = $this->language->get('error_permission');
		}

		if (!$json && isset($this->request->post['selected'])) {
			$this->load->model('extension/news/catalog/news');

			foreach ($this->request->post['selected'] as $news_id) {
				$this->model_extension_news_catalog_news->copyNews($news_id);
			}

			$json['success'] = $this->language->get('text_success');
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	public function delete(): void {
		$this->load->language('extension/news/catalog/news');
		$json = [];

		if (!$this->user->hasPermission('modify', 'extension/news/catalog/news')) {
			$json['error'] = $this->language->get('error_permission');
		}

		if (!$json && isset($this->request->post['selected'])) {
			$this->load->model('extension/news/catalog/news');

			foreach ($this->request->post['selected'] as $news_id) {
				$this->model_extension_news_catalog_news->deleteNews($news_id);
			}

			$json['success'] = $this->language->get('text_success');
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	private function breadcrumbs(): array {
		return [
			[
				'text' => $this->language->get('text_home'),
				'href' => $this->url->link('common/dashboard', 'user_token=' . $this->session->data['user_token'])
			],
			[
				'text' => $this->language->get('text_catalog'),
				'href' => ''
			],
			[
				'text' => $this->language->get('heading_title'),
				'href' => $this->url->link('extension/news/catalog/news', 'user_token=' . $this->session->data['user_token'])
			]
		];
	}
}
