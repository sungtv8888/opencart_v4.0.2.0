<?php
namespace Opencart\Admin\Controller\Extension\Productcategory\Module;

class ProductCategory extends \Opencart\System\Engine\Controller {
	public function index(): void {
		$this->load->language('extension/productcategory/module/product_category');

		$this->document->setTitle($this->language->get('heading_title'));

		$data['breadcrumbs'] = [];

		$data['breadcrumbs'][] = [
			'text' => $this->language->get('text_home'),
			'href' => $this->url->link('common/dashboard', 'user_token=' . $this->session->data['user_token'])
		];

		$data['breadcrumbs'][] = [
			'text' => $this->language->get('text_extension'),
			'href' => $this->url->link('marketplace/extension', 'user_token=' . $this->session->data['user_token'] . '&type=module')
		];

		if (!isset($this->request->get['module_id'])) {
			$data['breadcrumbs'][] = [
				'text' => $this->language->get('heading_title'),
				'href' => $this->url->link('extension/productcategory/module/product_category', 'user_token=' . $this->session->data['user_token'])
			];
		} else {
			$data['breadcrumbs'][] = [
				'text' => $this->language->get('heading_title'),
				'href' => $this->url->link('extension/productcategory/module/product_category', 'user_token=' . $this->session->data['user_token'] . '&module_id=' . $this->request->get['module_id'])
			];
		}

		if (!isset($this->request->get['module_id'])) {
			$data['save'] = $this->url->link('extension/productcategory/module/product_category.save', 'user_token=' . $this->session->data['user_token']);
		} else {
			$data['save'] = $this->url->link('extension/productcategory/module/product_category.save', 'user_token=' . $this->session->data['user_token'] . '&module_id=' . $this->request->get['module_id']);
		}

		$data['back'] = $this->url->link('marketplace/extension', 'user_token=' . $this->session->data['user_token'] . '&type=module');

		$module_info = [];

		if (isset($this->request->get['module_id'])) {
			$this->load->model('setting/module');

			$module_info = $this->model_setting_module->getModule($this->request->get['module_id']);
		}

		$this->load->model('catalog/category');
		$this->load->model('catalog/product');

		$data['name'] = $module_info['name'] ?? '';
		$data['title'] = $module_info['title'] ?? '';
		$data['category_id'] = $module_info['category_id'] ?? 0;
		$data['view_all_text'] = $module_info['view_all_text'] ?? $this->language->get('text_view_all');
		$data['brand_items_text'] = $module_info['brand_items_text'] ?? '';
		$data['width'] = $module_info['width'] ?? 255;
		$data['height'] = $module_info['height'] ?? 255;
		$data['status'] = $module_info['status'] ?? 0;
		$data['limit'] = $module_info['limit'] ?? 10;

		$data['category_name'] = '';

		if ($data['category_id']) {
			$category_info = $this->model_catalog_category->getCategory($data['category_id']);

			if ($category_info) {
				$data['category_name'] = $category_info['name'];
			}
		}

		$data['products'] = [];

		$product_ids = $module_info['product'] ?? [];

		foreach ($product_ids as $product_id) {
			$product_info = $this->model_catalog_product->getProduct($product_id);

			if ($product_info) {
				$data['products'][] = [
					'product_id' => $product_info['product_id'],
					'name'       => $product_info['name']
				];
			}
		}

		$data['module_id'] = isset($this->request->get['module_id']) ? (int)$this->request->get['module_id'] : 0;
		$data['user_token'] = $this->session->data['user_token'];

		$data['header'] = $this->load->controller('common/header');
		$data['column_left'] = $this->load->controller('common/column_left');
		$data['footer'] = $this->load->controller('common/footer');

		$this->response->setOutput($this->load->view('extension/productcategory/module/product_category', $data));
	}

	public function save(): void {
		$this->load->language('extension/productcategory/module/product_category');

		$json = [];

		if (!$this->user->hasPermission('modify', 'extension/productcategory/module/product_category')) {
			$json['error']['warning'] = $this->language->get('error_permission');
		}

		if ((oc_strlen($this->request->post['name']) < 3) || (oc_strlen($this->request->post['name']) > 64)) {
			$json['error']['name'] = $this->language->get('error_name');
		}

		if (!$this->request->post['width']) {
			$json['error']['width'] = $this->language->get('error_width');
		}

		if (!$this->request->post['height']) {
			$json['error']['height'] = $this->language->get('error_height');
		}

		if (!$json) {
			$this->load->model('setting/module');

			if (!isset($this->request->get['module_id'])) {
				$json['module_id'] = $this->model_setting_module->addModule('productcategory.product_category', $this->request->post);
			} else {
				$this->model_setting_module->editModule($this->request->get['module_id'], $this->request->post);
			}

			$json['success'] = $this->language->get('text_success');
		}

		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}
}
