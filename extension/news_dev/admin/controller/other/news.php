<?php
namespace Opencart\Admin\Controller\Extension\News\Other;

class News extends \Opencart\System\Engine\Controller {
	public function index(): void {
		$this->load->language('extension/news/other/news');

		$this->document->setTitle($this->language->get('heading_title'));

		$data['breadcrumbs'] = [];

		$data['breadcrumbs'][] = [
			'text' => $this->language->get('text_home'),
			'href' => $this->url->link('common/dashboard', 'user_token=' . $this->session->data['user_token'])
		];

		$data['breadcrumbs'][] = [
			'text' => $this->language->get('text_extension'),
			'href' => $this->url->link('marketplace/extension', 'user_token=' . $this->session->data['user_token'] . '&type=other')
		];

		$data['breadcrumbs'][] = [
			'text' => $this->language->get('heading_title'),
			'href' => $this->url->link('extension/news/other/news', 'user_token=' . $this->session->data['user_token'])
		];

		$data['news_category'] = $this->url->link('extension/news/catalog/news_category', 'user_token=' . $this->session->data['user_token']);
		$data['news'] = $this->url->link('extension/news/catalog/news', 'user_token=' . $this->session->data['user_token']);
		$data['back'] = $this->url->link('marketplace/extension', 'user_token=' . $this->session->data['user_token'] . '&type=other');

		$data['header'] = $this->load->controller('common/header');
		$data['column_left'] = $this->load->controller('common/column_left');
		$data['footer'] = $this->load->controller('common/footer');

		$this->response->setOutput($this->load->view('extension/news/other/news', $data));
	}

	public function install(): void {
		$this->createTables();

		$this->load->model('setting/event');

		$this->model_setting_event->deleteEventByCode('news_admin_menu');
		$this->model_setting_event->addEvent([
			'code'        => 'news_admin_menu',
			'description' => 'Add News links to the admin catalog menu',
			'trigger'     =>  'admin/view/common/column_left/before',
			'action'      => 'extension/news/event/menu',
			'status'      => 1,
			'sort_order'  => 0
		]);

		$this->load->model('user/user_group');

		foreach ([
			'extension/news/other/news',
			'extension/news/catalog/news_category',
			'extension/news/catalog/news'
		] as $route) {
			$this->model_user_user_group->addPermission($this->user->getGroupId(), 'access', $route);
			$this->model_user_user_group->addPermission($this->user->getGroupId(), 'modify', $route);
		}
	}

	public function uninstall(): void {
		$this->load->model('setting/event');
		$this->model_setting_event->deleteEventByCode('news_admin_menu');

		$this->load->model('user/user_group');

		foreach ([
			'extension/news/other/news',
			'extension/news/catalog/news_category',
			'extension/news/catalog/news'
		] as $route) {
			$this->model_user_user_group->removePermission($this->user->getGroupId(), 'access', $route);
			$this->model_user_user_group->removePermission($this->user->getGroupId(), 'modify', $route);
		}
	}

	private function createTables(): void {
		$this->db->query("CREATE TABLE IF NOT EXISTS `" . DB_PREFIX . "news_category` (`news_category_id` int(11) NOT NULL AUTO_INCREMENT, `parent_id` int(11) NOT NULL DEFAULT '0', `image` varchar(255) DEFAULT NULL, `sort_order` int(3) NOT NULL DEFAULT '0', `status` tinyint(1) NOT NULL DEFAULT '1', `date_added` datetime NOT NULL, `date_modified` datetime NOT NULL, PRIMARY KEY (`news_category_id`), KEY `parent_id` (`parent_id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci");
		$this->db->query("CREATE TABLE IF NOT EXISTS `" . DB_PREFIX . "news_category_description` (`news_category_id` int(11) NOT NULL, `language_id` int(11) NOT NULL, `name` varchar(255) NOT NULL, `description` mediumtext NOT NULL, `meta_title` varchar(255) NOT NULL, `meta_description` varchar(255) NOT NULL, `meta_keyword` varchar(255) NOT NULL, PRIMARY KEY (`news_category_id`,`language_id`), KEY `name` (`name`)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci");
		$this->db->query("CREATE TABLE IF NOT EXISTS `" . DB_PREFIX . "news_category_path` (`news_category_id` int(11) NOT NULL, `path_id` int(11) NOT NULL, `level` int(11) NOT NULL, PRIMARY KEY (`news_category_id`,`path_id`), KEY `path_id` (`path_id`), KEY `level` (`level`)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci");
		$this->db->query("CREATE TABLE IF NOT EXISTS `" . DB_PREFIX . "news_category_to_store` (`news_category_id` int(11) NOT NULL, `store_id` int(11) NOT NULL, PRIMARY KEY (`news_category_id`,`store_id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci");
		$this->db->query("CREATE TABLE IF NOT EXISTS `" . DB_PREFIX . "news_category_to_layout` (`news_category_id` int(11) NOT NULL, `store_id` int(11) NOT NULL, `layout_id` int(11) NOT NULL, PRIMARY KEY (`news_category_id`,`store_id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci");

		$this->db->query("CREATE TABLE IF NOT EXISTS `" . DB_PREFIX . "news` (`news_id` int(11) NOT NULL AUTO_INCREMENT, `image` varchar(255) DEFAULT NULL, `author` varchar(64) NOT NULL DEFAULT '', `user_id` int(11) NOT NULL DEFAULT '0', `featured` tinyint(1) NOT NULL DEFAULT '0', `date_available` date NOT NULL, `sort_order` int(3) NOT NULL DEFAULT '0', `status` tinyint(1) NOT NULL DEFAULT '1', `viewed` int(5) NOT NULL DEFAULT '0', `date_added` datetime NOT NULL, `date_modified` datetime NOT NULL, PRIMARY KEY (`news_id`), KEY `user_id` (`user_id`), KEY `featured` (`featured`), KEY `date_available` (`date_available`), KEY `status` (`status`), KEY `sort_order` (`sort_order`)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci");
		$this->db->query("CREATE TABLE IF NOT EXISTS `" . DB_PREFIX . "news_description` (`news_id` int(11) NOT NULL, `language_id` int(11) NOT NULL, `name` varchar(255) NOT NULL, `description` mediumtext NOT NULL, `tag` text NOT NULL, `meta_title` varchar(255) NOT NULL, `meta_description` varchar(255) NOT NULL, `meta_keyword` varchar(255) NOT NULL, PRIMARY KEY (`news_id`,`language_id`), KEY `name` (`name`)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci");
		$this->db->query("CREATE TABLE IF NOT EXISTS `" . DB_PREFIX . "news_to_category` (`news_id` int(11) NOT NULL, `news_category_id` int(11) NOT NULL, PRIMARY KEY (`news_id`,`news_category_id`), KEY `news_category_id` (`news_category_id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci");
		$this->db->query("CREATE TABLE IF NOT EXISTS `" . DB_PREFIX . "news_to_store` (`news_id` int(11) NOT NULL, `store_id` int(11) NOT NULL, PRIMARY KEY (`news_id`,`store_id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci");
		$this->db->query("CREATE TABLE IF NOT EXISTS `" . DB_PREFIX . "news_to_layout` (`news_id` int(11) NOT NULL, `store_id` int(11) NOT NULL, `layout_id` int(11) NOT NULL, PRIMARY KEY (`news_id`,`store_id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci");
	}
}
