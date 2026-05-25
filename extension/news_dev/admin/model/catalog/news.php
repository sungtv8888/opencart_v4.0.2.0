<?php
namespace Opencart\Admin\Model\Extension\News\Catalog;

class News extends \Opencart\System\Engine\Model {
	public function addNews(array $data): int {
		$author = (string)($data['author'] ?? '');
		$date_available = $data['date_available'] ?: date('Y-m-d');

		$this->db->query("INSERT INTO `" . DB_PREFIX . "news` SET `image` = '" . $this->db->escape((string)($data['image'] ?? '')) . "', `author` = '" . $this->db->escape($author) . "', `user_id` = '" . (int)$this->user->getId() . "', `featured` = '" . (bool)($data['featured'] ?? 0) . "', `date_available` = '" . $this->db->escape($date_available) . "', `sort_order` = '" . (int)$data['sort_order'] . "', `status` = '" . (bool)($data['status'] ?? 0) . "', `date_added` = NOW(), `date_modified` = NOW()");

		$news_id = $this->db->getLastId();

		foreach ($data['news_description'] as $language_id => $value) {
			$this->db->query("INSERT INTO `" . DB_PREFIX . "news_description` SET `news_id` = '" . (int)$news_id . "', `language_id` = '" . (int)$language_id . "', `name` = '" . $this->db->escape($value['name']) . "', `description` = '" . $this->db->escape($value['description']) . "', `tag` = '" . $this->db->escape($value['tag']) . "', `meta_title` = '" . $this->db->escape($value['meta_title']) . "', `meta_description` = '" . $this->db->escape($value['meta_description']) . "', `meta_keyword` = '" . $this->db->escape($value['meta_keyword']) . "'");
		}

		$this->saveRelations($news_id, $data);
		$this->saveSeoUrls($news_id, $data);
		$this->saveLayouts($news_id, $data);

		return $news_id;
	}

	public function editNews(int $news_id, array $data): void {
		$news_info = $this->getNews($news_id);
		$user_id = $news_info['user_id'] ?? $this->user->getId();
		$date_available = $data['date_available'] ?: date('Y-m-d');

		$this->db->query("UPDATE `" . DB_PREFIX . "news` SET `image` = '" . $this->db->escape((string)($data['image'] ?? '')) . "', `author` = '" . $this->db->escape((string)($data['author'] ?? '')) . "', `user_id` = '" . (int)$user_id . "', `featured` = '" . (bool)($data['featured'] ?? 0) . "', `date_available` = '" . $this->db->escape($date_available) . "', `sort_order` = '" . (int)$data['sort_order'] . "', `status` = '" . (bool)($data['status'] ?? 0) . "', `date_modified` = NOW() WHERE `news_id` = '" . (int)$news_id . "'");

		$this->db->query("DELETE FROM `" . DB_PREFIX . "news_description` WHERE `news_id` = '" . (int)$news_id . "'");

		foreach ($data['news_description'] as $language_id => $value) {
			$this->db->query("INSERT INTO `" . DB_PREFIX . "news_description` SET `news_id` = '" . (int)$news_id . "', `language_id` = '" . (int)$language_id . "', `name` = '" . $this->db->escape($value['name']) . "', `description` = '" . $this->db->escape($value['description']) . "', `tag` = '" . $this->db->escape($value['tag']) . "', `meta_title` = '" . $this->db->escape($value['meta_title']) . "', `meta_description` = '" . $this->db->escape($value['meta_description']) . "', `meta_keyword` = '" . $this->db->escape($value['meta_keyword']) . "'");
		}

		$this->db->query("DELETE FROM `" . DB_PREFIX . "news_to_category` WHERE `news_id` = '" . (int)$news_id . "'");
		$this->db->query("DELETE FROM `" . DB_PREFIX . "news_to_store` WHERE `news_id` = '" . (int)$news_id . "'");
		$this->db->query("DELETE FROM `" . DB_PREFIX . "seo_url` WHERE `key` = 'news_id' AND `value` = '" . (int)$news_id . "'");
		$this->db->query("DELETE FROM `" . DB_PREFIX . "news_to_layout` WHERE `news_id` = '" . (int)$news_id . "'");

		$this->saveRelations($news_id, $data);
		$this->saveSeoUrls($news_id, $data);
		$this->saveLayouts($news_id, $data);
	}

	public function copyNews(int $news_id): void {
		$news_info = $this->getNews($news_id);

		if ($news_info) {
			$data = $news_info;
			$data['status'] = 0;
			$data['news_description'] = $this->getDescriptions($news_id);
			$data['news_category'] = $this->getCategories($news_id);
			$data['news_store'] = $this->getStores($news_id);
			$data['news_layout'] = $this->getLayouts($news_id);
			$data['news_seo_url'] = [];

			$timestamp = date('YmdHis');

			foreach ($this->getSeoUrls($news_id) as $store_id => $language) {
				foreach ($language as $language_id => $keyword) {
					$data['news_seo_url'][$store_id][$language_id] = preg_match('/\d{14}$/', $keyword) ? preg_replace('/-?\d{14}$/', '-' . $timestamp, $keyword) : $keyword . '-' . $timestamp;
				}
			}

			$this->addNews($data);
		}
	}

	public function deleteNews(int $news_id): void {
		$this->db->query("DELETE FROM `" . DB_PREFIX . "news` WHERE `news_id` = '" . (int)$news_id . "'");
		$this->db->query("DELETE FROM `" . DB_PREFIX . "news_description` WHERE `news_id` = '" . (int)$news_id . "'");
		$this->db->query("DELETE FROM `" . DB_PREFIX . "news_to_category` WHERE `news_id` = '" . (int)$news_id . "'");
		$this->db->query("DELETE FROM `" . DB_PREFIX . "news_to_store` WHERE `news_id` = '" . (int)$news_id . "'");
		$this->db->query("DELETE FROM `" . DB_PREFIX . "news_to_layout` WHERE `news_id` = '" . (int)$news_id . "'");
		$this->db->query("DELETE FROM `" . DB_PREFIX . "seo_url` WHERE `key` = 'news_id' AND `value` = '" . (int)$news_id . "'");
	}

	public function getNews(int $news_id): array {
		$query = $this->db->query("SELECT DISTINCT * FROM `" . DB_PREFIX . "news` WHERE `news_id` = '" . (int)$news_id . "'");

		return $query->row;
	}

	public function getNewsList(array $data = []): array {
		$sql = "SELECT n.*, nd.`name` FROM `" . DB_PREFIX . "news` n LEFT JOIN `" . DB_PREFIX . "news_description` nd ON (n.`news_id` = nd.`news_id`) WHERE nd.`language_id` = '" . (int)$this->config->get('config_language_id') . "'";

		$sort_data = ['nd.name', 'n.author', 'n.date_available', 'n.sort_order', 'n.status'];

		if (isset($data['sort']) && in_array($data['sort'], $sort_data)) {
			$sql .= " ORDER BY " . $data['sort'];
		} else {
			$sql .= " ORDER BY nd.`name`";
		}

		$sql .= (isset($data['order']) && $data['order'] == 'DESC') ? " DESC" : " ASC";

		if (isset($data['start']) || isset($data['limit'])) {
			$sql .= " LIMIT " . max(0, (int)$data['start']) . "," . max(1, (int)$data['limit']);
		}

		$query = $this->db->query($sql);

		return $query->rows;
	}

	public function getDescriptions(int $news_id): array {
		$data = [];
		$query = $this->db->query("SELECT * FROM `" . DB_PREFIX . "news_description` WHERE `news_id` = '" . (int)$news_id . "'");

		foreach ($query->rows as $result) {
			$data[$result['language_id']] = [
				'name'             => $result['name'],
				'description'      => $result['description'],
				'tag'              => $result['tag'],
				'meta_title'       => $result['meta_title'],
				'meta_description' => $result['meta_description'],
				'meta_keyword'     => $result['meta_keyword']
			];
		}

		return $data;
	}

	public function getCategories(int $news_id): array {
		$data = [];
		$query = $this->db->query("SELECT * FROM `" . DB_PREFIX . "news_to_category` WHERE `news_id` = '" . (int)$news_id . "'");

		foreach ($query->rows as $result) {
			$data[] = $result['news_category_id'];
		}

		return $data;
	}

	public function getStores(int $news_id): array {
		$data = [];
		$query = $this->db->query("SELECT * FROM `" . DB_PREFIX . "news_to_store` WHERE `news_id` = '" . (int)$news_id . "'");

		foreach ($query->rows as $result) {
			$data[] = $result['store_id'];
		}

		return $data;
	}

	public function getSeoUrls(int $news_id): array {
		$data = [];
		$query = $this->db->query("SELECT * FROM `" . DB_PREFIX . "seo_url` WHERE `key` = 'news_id' AND `value` = '" . (int)$news_id . "'");

		foreach ($query->rows as $result) {
			$data[$result['store_id']][$result['language_id']] = $result['keyword'];
		}

		return $data;
	}

	public function getLayouts(int $news_id): array {
		$data = [];
		$query = $this->db->query("SELECT * FROM `" . DB_PREFIX . "news_to_layout` WHERE `news_id` = '" . (int)$news_id . "'");

		foreach ($query->rows as $result) {
			$data[$result['store_id']] = $result['layout_id'];
		}

		return $data;
	}

	public function getTotalNews(): int {
		$query = $this->db->query("SELECT COUNT(*) AS `total` FROM `" . DB_PREFIX . "news`");

		return (int)$query->row['total'];
	}

	private function saveRelations(int $news_id, array $data): void {
		if (isset($data['news_category'])) {
			foreach ($data['news_category'] as $news_category_id) {
				$this->db->query("INSERT INTO `" . DB_PREFIX . "news_to_category` SET `news_id` = '" . (int)$news_id . "', `news_category_id` = '" . (int)$news_category_id . "'");
			}
		}

		if (isset($data['news_store'])) {
			foreach ($data['news_store'] as $store_id) {
				$this->db->query("INSERT INTO `" . DB_PREFIX . "news_to_store` SET `news_id` = '" . (int)$news_id . "', `store_id` = '" . (int)$store_id . "'");
			}
		}
	}

	private function saveSeoUrls(int $news_id, array $data): void {
		if (isset($data['news_seo_url'])) {
			foreach ($data['news_seo_url'] as $store_id => $language) {
				foreach ($language as $language_id => $keyword) {
					if ($keyword !== '') {
						$this->db->query("INSERT INTO `" . DB_PREFIX . "seo_url` SET `store_id` = '" . (int)$store_id . "', `language_id` = '" . (int)$language_id . "', `key` = 'news_id', `value` = '" . (int)$news_id . "', `keyword` = '" . $this->db->escape($keyword) . "'");
					}
				}
			}
		}
	}

	private function saveLayouts(int $news_id, array $data): void {
		if (isset($data['news_layout'])) {
			foreach ($data['news_layout'] as $store_id => $layout_id) {
				if ($layout_id !== '') {
					$this->db->query("INSERT INTO `" . DB_PREFIX . "news_to_layout` SET `news_id` = '" . (int)$news_id . "', `store_id` = '" . (int)$store_id . "', `layout_id` = '" . (int)$layout_id . "'");
				}
			}
		}
	}
}
