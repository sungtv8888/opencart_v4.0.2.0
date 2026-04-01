<?php
namespace Opencart\Catalog\Controller\Common;
class Menu extends \Opencart\System\Engine\Controller {
	public function index(): string {
		$this->load->language('common/menu');

		// Menu
		$this->load->model('catalog/category');

		$this->load->model('catalog/product');
		//update by SungTV on 202610322 start

		$data['categories'] = [];
		$data['categories'] = $this->getCategoriesTree(0);
		//update by SungTV on 202610322 end
		//update by SungTV on 202610322 start
		// $categories = $this->model_catalog_category->getCategories(0);

		// foreach ($categories as $category) {
		// 	if ($category['top']) {
		// 		// Level 2
		// 		$children_data = [];

		// 		$children = $this->model_catalog_category->getCategories($category['category_id']);

		// 		foreach ($children as $child) {
		// 			$filter_data = [
		// 				'filter_category_id'  => $child['category_id'],
		// 				'filter_sub_category' => true
		// 			];
		// 			/**
		// 			 * 
		// 			 */
		// 			$children_data[] = [
		// 				//update by SungTV on 20251011 start
		// 				//'name'  => $child['name'] . ($this->config->get('config_product_count') ? ' (' . $this->model_catalog_product->getTotalProducts($filter_data) . ')' : ''),
		// 				'name'  => $child['name'],
		// 				//update by SungTV on 20251011 end
		// 				'href'  => $this->url->link('product/category', 'language=' . $this->config->get('config_language') . '&path=' . $category['category_id'] . '_' . $child['category_id'])
		// 			];
		// 		}

		// 		// Level 1
		// 		$data['categories'][] = [
		// 			'name'     => $category['name'],
		// 			'children' => $children_data,
		// 			'column'   => $category['column'] ? $category['column'] : 1,
		// 			'href'     => $this->url->link('product/category', 'language=' . $this->config->get('config_language') . '&path=' . $category['category_id'])
		// 		];
		// 	}
		// }
		//update by SungTV on 202610322 end
		return $this->load->view('common/menu', $data);
	}
	//add by SungTV on 202610322 start

	protected function getCategoriesTree(int $parent_id = 0, string $current_path = ''): array {
		$categories = [];
		
		$results = $this->model_catalog_category->getCategories($parent_id);
		
		foreach ($results as $result) {
			if ($result['top'] || $parent_id > 0) {  // Hiển thị top hoặc children
				$path = $current_path ? $current_path . '_' . $result['category_id'] : $result['category_id'];
				
				$filter_data = [
					'filter_category_id'  => $result['category_id'],
					'filter_sub_category' => true
				];
				
				$categories[] = [
					'category_id' => $result['category_id'],
					'name'        => $result['name'],
					'href'        => $this->url->link('product/category', 'language=' . $this->config->get('config_language') . '&path=' . $path),
					'children'    => $this->getCategoriesTree($result['category_id'], $path)  // Recursive
				];
			}
		}
		
		return $categories;
	}
//add by SungTV on 202610322 end



}
