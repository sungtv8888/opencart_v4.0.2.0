<?php
namespace Opencart\Admin\Controller\Extension\News\Event;

class Menu extends \Opencart\System\Engine\Controller {
	public function index(string &$route, array &$data, string &$code): void {
		if (!isset($data['menus'])) {
			return;
		}

		$this->load->language('extension/news/other/news');

		foreach ($data['menus'] as &$menu) {
			if ($menu['id'] == 'menu-catalog') {
				if ($this->user->hasPermission('access', 'extension/news/catalog/news_category')) {
					$menu['children'][] = [
						'name'     => $this->language->get('text_news_category'),
						'href'     => $this->url->link('extension/news/catalog/news_category', 'user_token=' . $this->session->data['user_token']),
						'children' => []
					];
				}

				if ($this->user->hasPermission('access', 'extension/news/catalog/news')) {
					$menu['children'][] = [
						'name'     => $this->language->get('text_news'),
						'href'     => $this->url->link('extension/news/catalog/news', 'user_token=' . $this->session->data['user_token']),
						'children' => []
					];
				}

				break;
			}
		}
	}
}
