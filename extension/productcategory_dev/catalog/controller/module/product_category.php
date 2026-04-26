<?php
namespace Opencart\Catalog\Controller\Extension\Productcategory\Module;

class ProductCategory extends \Opencart\System\Engine\Controller {
	public function index(array $setting): string {
		$this->load->language('extension/productcategory/module/product_category');

		$this->load->model('catalog/category');
		$this->load->model('catalog/product');
		$this->load->model('tool/image');

		$data['title'] = $setting['title'] ?? '';
	
		$data['view_all_text'] = !empty($setting['view_all_text']) ? $setting['view_all_text'] : $this->language->get('text_view_all');
		
		$data['products'] = [];
		$width = !empty($setting['width']) ? (int)$setting['width'] : 255;
		$height = !empty($setting['height']) ? (int)$setting['height'] : 255;

		$data['view_all_href'] = '';
		$manufacture_cate = [];
		if (!empty($setting['category_id'])) {
			$category_info = $this->model_catalog_category->getCategory((int)$setting['category_id']);

			if ($category_info) {
				if (!$data['title']) {
					$data['title'] = $category_info['name'];
				}

				$data['view_all_href'] = $this->url->link('product/category', 'language=' . $this->config->get('config_language') . '&path=' . $category_info['category_id']);
			}


			//add by SungTV on 20260425 start
			$manufacture_cate = $this->model_catalog_product->getProduct_Manufacture((int)$setting['category_id']);
			
			$data['manufacture_cate'] = $manufacture_cate;
			//add by SungTV on 20260425 end
		}
		 
		$data['brands'] = $this->parseBrands($setting['brand_items_text'] ?? '',$manufacture_cate);
		$product_ids = $setting['product'] ?? [];
		$limit = !empty($setting['limit']) ? (int)$setting['limit'] : count($product_ids);

		if ($limit > 0) {
			$product_ids = array_slice($product_ids, 0, $limit);
		}

		foreach ($product_ids as $product_id) {
			$product_info = $this->model_catalog_product->getProduct((int)$product_id);
			
			if (!$product_info) {
				continue;
			}

			if ($product_info['image']) {
				$thumb = $this->model_tool_image->resize(html_entity_decode($product_info['image'], ENT_QUOTES, 'UTF-8'), $width, $height);
			} else {
				$thumb = $this->model_tool_image->resize('placeholder.png', $width, $height);
			}

			if ($this->customer->isLogged() || !$this->config->get('config_customer_price')) {
				$price = $this->currency->format($this->tax->calculate((float)$product_info['price'], $product_info['tax_class_id'], $this->config->get('config_tax')), $this->session->data['currency']);
			} else {
				$price = false;
			}

			if ((float)$product_info['special']) {
				$special = $this->currency->format($this->tax->calculate((float)$product_info['special'], $product_info['tax_class_id'], $this->config->get('config_tax')), $this->session->data['currency']);
			} else {
				$special = false;
			}

			$savings_percent = 0;

			if ((float)$product_info['special'] && (float)$product_info['price'] > 0) {
				$savings_percent = (int)round((($product_info['price'] - $product_info['special']) / $product_info['price']) * 100);
			}

			$data['products'][] = [
				'product_id'      => $product_info['product_id'],
				'name'            => $product_info['name'],
				'thumb'           => $thumb,
				'price'           => $price,
				'special'         => $special,
				'savings_percent' => $savings_percent,
				'rating'          => (int)$product_info['rating'],
				'href'            => $this->url->link('product/product', 'language=' . $this->config->get('config_language') . '&product_id=' . $product_info['product_id'])
			];
		}

		if (!$data['products']) {
			return '';
		}

		return $this->load->view('extension/productcategory/module/product_category', $data);
	}

	private function parseBrands(string $brand_items_text, array $manufacture_cate): array {
		$brands = [];
		$brand_items_text = trim($brand_items_text);
		 
		$lines = preg_split('/\r\n|\r|\n/', $brand_items_text);

		foreach ($lines as $line) {
			$line = trim($line);

			if ($line === '') {
				continue;
			}

			$parts = array_map('trim', explode('|', $line));

			$brands[] = [
				'name'  => $parts[0] ?? '',
				'image' => $parts[1] ?? '',
				'href'  => $parts[2] ?? '#'
			];
		}
		//print_r($manufacture_cate);
		foreach ($manufacture_cate as $item) {
			$image='';
			if ($item['image']) {
				$image = $this->model_tool_image->resize(html_entity_decode($item['image'], ENT_QUOTES, 'UTF-8'), 100, 50);
			} else {
				//$image = $this->model_tool_image->resize('placeholder.png', $setting['width'], $setting['height']);
			}
			$brands[] = [
				'name'  => $item['name'] ?? '',
				'image' => $image,
				'href'  => $this->url->link('product/manufacturer.info', 'language=' . $this->config->get('config_language') . '&manufacturer_id=' . $item['manufacturer_id'])
			];
		}
		
		return $brands;
	}
}
