<?php
namespace Opencart\Admin\Controller\Extension\News\Catalog;

class NewsCategory extends \Opencart\System\Engine\Controller {
	public function index(): void {
		$this->load->language('extension/news/catalog/news_category');
		$this->document->setTitle($this->language->get('heading_title'));

		$data['breadcrumbs'] = $this->breadcrumbs();
		$data['add'] = $this->url->link('extension/news/catalog/news_category.form', 'user_token=' . $this->session->data['user_token']);
		$data['copy'] = $this->url->link('extension/news/catalog/news_category.copy', 'user_token=' . $this->session->data['user_token']);
		$data['delete'] = $this->url->link('extension/news/catalog/news_category.delete', 'user_token=' . $this->session->data['user_token']);
		$data['list'] = $this->getList();
		$data['user_token'] = $this->session->data['user_token'];
		$data['header'] = $this->load->controller('common/header');
		$data['column_left'] = $this->load->controller('common/column_left');
		$data['footer'] = $this->load->controller('common/footer');

		$this->response->setOutput($this->load->view('extension/news/catalog/news_category', $data));
	}

	public function list(): void {
		$this->load->language('extension/news/catalog/news_category');
		$this->response->setOutput($this->getList());
	}

	protected function getList(): string {
		$sort = $this->request->get['sort'] ?? 'name';
		$order = $this->request->get['order'] ?? 'ASC';
		$page = isset($this->request->get['page']) ? (int)$this->request->get['page'] : 1;

		$url = '';

		if (isset($this->request->get['sort'])) {
			$url .= '&sort=' . $this->request->get['sort'];
		}

		if (isset($this->request->get['order'])) {
			$url .= '&order=' . $this->request->get['order'];
		}

		$data['action'] = $this->url->link('extension/news/catalog/news_category.list', 'user_token=' . $this->session->data['user_token'] . $url);
		$data['news_categories'] = [];

		$this->load->model('extension/news/catalog/news_category');

		$filter_data = [
			'sort'  => $sort,
			'order' => $order,
			'start' => ($page - 1) * $this->config->get('config_pagination_admin'),
			'limit' => $this->config->get('config_pagination_admin')
		];

		$total = $this->model_extension_news_catalog_news_category->getTotalNewsCategories();
		$results = $this->model_extension_news_catalog_news_category->getNewsCategories($filter_data);

		foreach ($results as $result) {
			$data['news_categories'][] = [
				'news_category_id' => $result['news_category_id'],
				'name'             => $result['name'],
				'sort_order'       => $result['sort_order'],
				'status'           => $result['status'],
				'edit'             => $this->url->link('extension/news/catalog/news_category.form', 'user_token=' . $this->session->data['user_token'] . '&news_category_id=' . $result['news_category_id'])
			];
		}

		$url = ($order == 'ASC') ? '&order=DESC' : '&order=ASC';

		if (isset($this->request->get['page'])) {
			$url .= '&page=' . $this->request->get['page'];
		}

		$data['sort_name'] = $this->url->link('extension/news/catalog/news_category.list', 'user_token=' . $this->session->data['user_token'] . '&sort=name' . $url);
		$data['sort_sort_order'] = $this->url->link('extension/news/catalog/news_category.list', 'user_token=' . $this->session->data['user_token'] . '&sort=sort_order' . $url);

		$data['pagination'] = $this->load->controller('common/pagination', [
			'total' => $total,
			'page'  => $page,
			'limit' => $this->config->get('config_pagination_admin'),
			'url'   => $this->url->link('extension/news/catalog/news_category.list', 'user_token=' . $this->session->data['user_token'] . '&page={page}')
		]);

		$data['results'] = sprintf($this->language->get('text_pagination'), ($total) ? (($page - 1) * $this->config->get('config_pagination_admin')) + 1 : 0, ((($page - 1) * $this->config->get('config_pagination_admin')) > ($total - $this->config->get('config_pagination_admin'))) ? $total : ((($page - 1) * $this->config->get('config_pagination_admin')) + $this->config->get('config_pagination_admin')), $total, ceil($total / $this->config->get('config_pagination_admin')));
		$data['sort'] = $sort;
		$data['order'] = $order;

		return $this->load->view('extension/news/catalog/news_category_list', $data);
	}

	public function form(): void {
		$this->load->language('extension/news/catalog/news_category');
		$this->document->setTitle($this->language->get('heading_title'));
		$this->document->addScript('view/javascript/ckeditor/ckeditor.js');
		$this->document->addScript('view/javascript/ckeditor/adapters/jquery.js');

		$this->load->model('extension/news/catalog/news_category');

		$news_category_id = isset($this->request->get['news_category_id']) ? (int)$this->request->get['news_category_id'] : 0;
		$info = $news_category_id ? $this->model_extension_news_catalog_news_category->getNewsCategory($news_category_id) : [];

		$data['text_form'] = !$news_category_id ? $this->language->get('text_add') : $this->language->get('text_edit');
		$data['breadcrumbs'] = $this->breadcrumbs();
		$data['save'] = $this->url->link('extension/news/catalog/news_category.save', 'user_token=' . $this->session->data['user_token']);
		$data['back'] = $this->url->link('extension/news/catalog/news_category', 'user_token=' . $this->session->data['user_token']);
		$data['news_category_id'] = $news_category_id;

		$this->load->model('localisation/language');
		$data['languages'] = $this->model_localisation_language->getLanguages();
		$data['news_category_description'] = $news_category_id ? $this->model_extension_news_catalog_news_category->getDescriptions($news_category_id) : [];

		$this->load->model('setting/store');
		$data['stores'] = [['store_id' => 0, 'name' => $this->language->get('text_default')]];
		$data['stores'] = array_merge($data['stores'], $this->model_setting_store->getStores());
		$data['news_category_store'] = $news_category_id ? $this->model_extension_news_catalog_news_category->getStores($news_category_id) : [0];
		$data['news_category_seo_url'] = $news_category_id ? $this->model_extension_news_catalog_news_category->getSeoUrls($news_category_id) : [];

		$this->load->model('design/layout');
		$data['layouts'] = $this->model_design_layout->getLayouts();
		$data['news_category_layout'] = $news_category_id ? $this->model_extension_news_catalog_news_category->getLayouts($news_category_id) : [];
		$data['news_categories'] = $this->model_extension_news_catalog_news_category->getNewsCategories(['sort' => 'name', 'order' => 'ASC', 'start' => 0, 'limit' => 1000]);

		$data['parent_id'] = $info['parent_id'] ?? 0;
		$data['image'] = $info['image'] ?? '';
		$data['sort_order'] = $info['sort_order'] ?? 0;
		$data['status'] = $info['status'] ?? true;
		$data['ckeditor'] = $this->config->get('config_editor_default');
		$data['user_token'] = $this->session->data['user_token'];
		$data['header'] = $this->load->controller('common/header');
		$data['column_left'] = $this->load->controller('common/column_left');
		$data['footer'] = $this->load->controller('common/footer');

		$this->response->setOutput($this->load->view('extension/news/catalog/news_category_form', $data));
	}

	public function save(): void {
		$this->load->language('extension/news/catalog/news_category');
		$json = [];

		if (!$this->user->hasPermission('modify', 'extension/news/catalog/news_category')) {
			$json['error']['warning'] = $this->language->get('error_permission');
		}

		foreach ($this->request->post['news_category_description'] as $language_id => $value) {
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
			$this->load->model('extension/news/catalog/news_category');

			if (!$this->request->post['news_category_id']) {
				$json['news_category_id'] = $this->model_extension_news_catalog_news_category->addNewsCategory($this->request->post);
			} else {
				$this->model_extension_news_catalog_news_category->editNewsCategory($this->request->post['news_category_id'], $this->request->post);
			}

			$json['success'] = $this->language->get('text_success');
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	public function copy(): void {
		$this->load->language('extension/news/catalog/news_category');
		$json = [];

		if (!$this->user->hasPermission('modify', 'extension/news/catalog/news_category')) {
			$json['error'] = $this->language->get('error_permission');
		}

		if (!$json && isset($this->request->post['selected'])) {
			$this->load->model('extension/news/catalog/news_category');

			foreach ($this->request->post['selected'] as $news_category_id) {
				$info = $this->model_extension_news_catalog_news_category->getNewsCategory($news_category_id);

				if ($info) {
					$data = $info;
					$data['status'] = 0;
					$data['news_category_description'] = $this->model_extension_news_catalog_news_category->getDescriptions($news_category_id);
					$data['news_category_store'] = $this->model_extension_news_catalog_news_category->getStores($news_category_id);
					$data['news_category_layout'] = $this->model_extension_news_catalog_news_category->getLayouts($news_category_id);
					$data['news_category_seo_url'] = [];
					$timestamp = date('YmdHis');

					foreach ($this->model_extension_news_catalog_news_category->getSeoUrls($news_category_id) as $store_id => $language) {
						foreach ($language as $language_id => $keyword) {
							$parts = explode('/', $keyword);
							$keyword = end($parts);
							$data['news_category_seo_url'][$store_id][$language_id] = preg_match('/\d{14}$/', $keyword) ? preg_replace('/-?\d{14}$/', '-' . $timestamp, $keyword) : $keyword . '-' . $timestamp;
						}
					}

					$this->model_extension_news_catalog_news_category->addNewsCategory($data);
				}
			}

			$json['success'] = $this->language->get('text_success');
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	public function delete(): void {
		$this->load->language('extension/news/catalog/news_category');
		$json = [];

		if (!$this->user->hasPermission('modify', 'extension/news/catalog/news_category')) {
			$json['error'] = $this->language->get('error_permission');
		}

		if (!$json && isset($this->request->post['selected'])) {
			$this->load->model('extension/news/catalog/news_category');

			foreach ($this->request->post['selected'] as $news_category_id) {
				$this->model_extension_news_catalog_news_category->deleteNewsCategory($news_category_id);
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
				'href' => $this->url->link('extension/news/catalog/news_category', 'user_token=' . $this->session->data['user_token'])
			]
		];
	}
}
