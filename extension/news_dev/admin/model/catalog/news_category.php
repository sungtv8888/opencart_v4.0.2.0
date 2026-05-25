<?php
namespace Opencart\Admin\Model\Extension\News\Catalog;

class NewsCategory extends \Opencart\System\Engine\Model {
	public function addNewsCategory(array $data): int {
		$this->db->query("INSERT INTO `" . DB_PREFIX . "news_category` SET `parent_id` = '" . (int)$data['parent_id'] . "', `image` = '" . $this->db->escape((string)($data['image'] ?? '')) . "', `sort_order` = '" . (int)$data['sort_order'] . "', `status` = '" . (bool)($data['status'] ?? 0) . "', `date_added` = NOW(), `date_modified` = NOW()");

		$news_category_id = $this->db->getLastId();

		foreach ($data['news_category_description'] as $language_id => $value) {
			$this->db->query("INSERT INTO `" . DB_PREFIX . "news_category_description` SET `news_category_id` = '" . (int)$news_category_id . "', `language_id` = '" . (int)$language_id . "', `name` = '" . $this->db->escape($value['name']) . "', `description` = '" . $this->db->escape($value['description']) . "', `meta_title` = '" . $this->db->escape($value['meta_title']) . "', `meta_description` = '" . $this->db->escape($value['meta_description']) . "', `meta_keyword` = '" . $this->db->escape($value['meta_keyword']) . "'");
		}

		$level = 0;

		$query = $this->db->query("SELECT * FROM `" . DB_PREFIX . "news_category_path` WHERE `news_category_id` = '" . (int)$data['parent_id'] . "' ORDER BY `level` ASC");

		foreach ($query->rows as $result) {
			$this->db->query("INSERT INTO `" . DB_PREFIX . "news_category_path` SET `news_category_id` = '" . (int)$news_category_id . "', `path_id` = '" . (int)$result['path_id'] . "', `level` = '" . (int)$level . "'");
			$level++;
		}

		$this->db->query("INSERT INTO `" . DB_PREFIX . "news_category_path` SET `news_category_id` = '" . (int)$news_category_id . "', `path_id` = '" . (int)$news_category_id . "', `level` = '" . (int)$level . "'");

		if (isset($data['news_category_store'])) {
			foreach ($data['news_category_store'] as $store_id) {
				$this->db->query("INSERT INTO `" . DB_PREFIX . "news_category_to_store` SET `news_category_id` = '" . (int)$news_category_id . "', `store_id` = '" . (int)$store_id . "'");
			}
		}

		$this->saveSeoUrls($news_category_id, $data);
		$this->saveLayouts($news_category_id, $data);

		return $news_category_id;
	}

	public function editNewsCategory(int $news_category_id, array $data): void {
		$path_old = $this->getPath($news_category_id);

		$this->db->query("UPDATE `" . DB_PREFIX . "news_category` SET `parent_id` = '" . (int)$data['parent_id'] . "', `image` = '" . $this->db->escape((string)($data['image'] ?? '')) . "', `sort_order` = '" . (int)$data['sort_order'] . "', `status` = '" . (bool)($data['status'] ?? 0) . "', `date_modified` = NOW() WHERE `news_category_id` = '" . (int)$news_category_id . "'");

		$this->db->query("DELETE FROM `" . DB_PREFIX . "news_category_description` WHERE `news_category_id` = '" . (int)$news_category_id . "'");

		foreach ($data['news_category_description'] as $language_id => $value) {
			$this->db->query("INSERT INTO `" . DB_PREFIX . "news_category_description` SET `news_category_id` = '" . (int)$news_category_id . "', `language_id` = '" . (int)$language_id . "', `name` = '" . $this->db->escape($value['name']) . "', `description` = '" . $this->db->escape($value['description']) . "', `meta_title` = '" . $this->db->escape($value['meta_title']) . "', `meta_description` = '" . $this->db->escape($value['meta_description']) . "', `meta_keyword` = '" . $this->db->escape($value['meta_keyword']) . "'");
		}

		$this->db->query("DELETE FROM `" . DB_PREFIX . "news_category_path` WHERE `news_category_id` = '" . (int)$news_category_id . "'");

		$level = 0;
		$query = $this->db->query("SELECT * FROM `" . DB_PREFIX . "news_category_path` WHERE `news_category_id` = '" . (int)$data['parent_id'] . "' ORDER BY `level` ASC");

		foreach ($query->rows as $result) {
			$this->db->query("INSERT INTO `" . DB_PREFIX . "news_category_path` SET `news_category_id` = '" . (int)$news_category_id . "', `path_id` = '" . (int)$result['path_id'] . "', `level` = '" . (int)$level . "'");
			$level++;
		}

		$this->db->query("INSERT INTO `" . DB_PREFIX . "news_category_path` SET `news_category_id` = '" . (int)$news_category_id . "', `path_id` = '" . (int)$news_category_id . "', `level` = '" . (int)$level . "'");

		$this->db->query("DELETE FROM `" . DB_PREFIX . "news_category_to_store` WHERE `news_category_id` = '" . (int)$news_category_id . "'");

		if (isset($data['news_category_store'])) {
			foreach ($data['news_category_store'] as $store_id) {
				$this->db->query("INSERT INTO `" . DB_PREFIX . "news_category_to_store` SET `news_category_id` = '" . (int)$news_category_id . "', `store_id` = '" . (int)$store_id . "'");
			}
		}

		$this->db->query("DELETE FROM `" . DB_PREFIX . "seo_url` WHERE `key` = 'news_path' AND `value` = '" . $this->db->escape($path_old) . "'");
		$this->saveSeoUrls($news_category_id, $data);

		$this->db->query("DELETE FROM `" . DB_PREFIX . "news_category_to_layout` WHERE `news_category_id` = '" . (int)$news_category_id . "'");
		$this->saveLayouts($news_category_id, $data);
	}

	public function deleteNewsCategory(int $news_category_id): void {
		$path = $this->getPath($news_category_id);

		$this->db->query("DELETE FROM `" . DB_PREFIX . "news_category` WHERE `news_category_id` = '" . (int)$news_category_id . "'");
		$this->db->query("DELETE FROM `" . DB_PREFIX . "news_category_description` WHERE `news_category_id` = '" . (int)$news_category_id . "'");
		$this->db->query("DELETE FROM `" . DB_PREFIX . "news_category_to_store` WHERE `news_category_id` = '" . (int)$news_category_id . "'");
		$this->db->query("DELETE FROM `" . DB_PREFIX . "news_category_to_layout` WHERE `news_category_id` = '" . (int)$news_category_id . "'");
		$this->db->query("DELETE FROM `" . DB_PREFIX . "news_to_category` WHERE `news_category_id` = '" . (int)$news_category_id . "'");
		$this->db->query("DELETE FROM `" . DB_PREFIX . "seo_url` WHERE `key` = 'news_path' AND `value` = '" . $this->db->escape($path) . "'");
		$this->db->query("DELETE FROM `" . DB_PREFIX . "news_category_path` WHERE `news_category_id` = '" . (int)$news_category_id . "'");

		$query = $this->db->query("SELECT * FROM `" . DB_PREFIX . "news_category_path` WHERE `path_id` = '" . (int)$news_category_id . "'");

		foreach ($query->rows as $result) {
			$this->deleteNewsCategory($result['news_category_id']);
		}
	}

	public function getNewsCategory(int $news_category_id): array {
		$query = $this->db->query("SELECT DISTINCT *, (SELECT GROUP_CONCAT(ncd1.`name` ORDER BY `level` SEPARATOR ' > ') FROM `" . DB_PREFIX . "news_category_path` ncp LEFT JOIN `" . DB_PREFIX . "news_category_description` ncd1 ON (ncp.`path_id` = ncd1.`news_category_id` AND ncp.`news_category_id` != ncp.`path_id`) WHERE ncp.`news_category_id` = nc.`news_category_id` AND ncd1.`language_id` = '" . (int)$this->config->get('config_language_id') . "' GROUP BY ncp.`news_category_id`) AS `path` FROM `" . DB_PREFIX . "news_category` nc LEFT JOIN `" . DB_PREFIX . "news_category_description` ncd2 ON (nc.`news_category_id` = ncd2.`news_category_id`) WHERE nc.`news_category_id` = '" . (int)$news_category_id . "' AND ncd2.`language_id` = '" . (int)$this->config->get('config_language_id') . "'");

		return $query->row;
	}

	public function getPath(int $news_category_id): string {
		return implode('_', array_column($this->getPaths($news_category_id), 'path_id'));
	}

	public function getPaths(int $news_category_id): array {
		$query = $this->db->query("SELECT `news_category_id`, `path_id`, `level` FROM `" . DB_PREFIX . "news_category_path` WHERE `news_category_id` = '" . (int)$news_category_id . "' ORDER BY `level` ASC");

		return $query->rows;
	}

	public function getNewsCategories(array $data = []): array {
		$sql = "SELECT ncp.`news_category_id` AS `news_category_id`, GROUP_CONCAT(ncd1.`name` ORDER BY ncp.`level` SEPARATOR ' > ') AS `name`, nc1.`parent_id`, nc1.`sort_order`, nc1.`status` FROM `" . DB_PREFIX . "news_category_path` ncp LEFT JOIN `" . DB_PREFIX . "news_category` nc1 ON (ncp.`news_category_id` = nc1.`news_category_id`) LEFT JOIN `" . DB_PREFIX . "news_category_description` ncd1 ON (ncp.`path_id` = ncd1.`news_category_id`) LEFT JOIN `" . DB_PREFIX . "news_category_description` ncd2 ON (ncp.`news_category_id` = ncd2.`news_category_id`) WHERE ncd1.`language_id` = '" . (int)$this->config->get('config_language_id') . "' AND ncd2.`language_id` = '" . (int)$this->config->get('config_language_id') . "'";

		$sql .= " GROUP BY ncp.`news_category_id`";

		$sort_data = ['name', 'sort_order'];

		if (isset($data['sort']) && in_array($data['sort'], $sort_data)) {
			$sql .= " ORDER BY `" . $data['sort'] . "`";
		} else {
			$sql .= " ORDER BY `sort_order`";
		}

		$sql .= (isset($data['order']) && $data['order'] == 'DESC') ? " DESC" : " ASC";

		if (isset($data['start']) || isset($data['limit'])) {
			$sql .= " LIMIT " . max(0, (int)$data['start']) . "," . max(1, (int)$data['limit']);
		}

		$query = $this->db->query($sql);

		return $query->rows;
	}

	public function getDescriptions(int $news_category_id): array {
		$data = [];
		$query = $this->db->query("SELECT * FROM `" . DB_PREFIX . "news_category_description` WHERE `news_category_id` = '" . (int)$news_category_id . "'");

		foreach ($query->rows as $result) {
			$data[$result['language_id']] = [
				'name'             => $result['name'],
				'description'      => $result['description'],
				'meta_title'       => $result['meta_title'],
				'meta_description' => $result['meta_description'],
				'meta_keyword'     => $result['meta_keyword']
			];
		}

		return $data;
	}

	public function getSeoUrls(int $news_category_id): array {
		$data = [];
		$query = $this->db->query("SELECT * FROM `" . DB_PREFIX . "seo_url` WHERE `key` = 'news_path' AND `value` = '" . $this->db->escape($this->getPath($news_category_id)) . "'");

		foreach ($query->rows as $result) {
			$data[$result['store_id']][$result['language_id']] = $result['keyword'];
		}

		return $data;
	}

	public function getStores(int $news_category_id): array {
		$data = [];
		$query = $this->db->query("SELECT * FROM `" . DB_PREFIX . "news_category_to_store` WHERE `news_category_id` = '" . (int)$news_category_id . "'");

		foreach ($query->rows as $result) {
			$data[] = $result['store_id'];
		}

		return $data;
	}

	public function getLayouts(int $news_category_id): array {
		$data = [];
		$query = $this->db->query("SELECT * FROM `" . DB_PREFIX . "news_category_to_layout` WHERE `news_category_id` = '" . (int)$news_category_id . "'");

		foreach ($query->rows as $result) {
			$data[$result['store_id']] = $result['layout_id'];
		}

		return $data;
	}

	public function getTotalNewsCategories(): int {
		$query = $this->db->query("SELECT COUNT(*) AS `total` FROM `" . DB_PREFIX . "news_category`");

		return (int)$query->row['total'];
	}

	private function saveSeoUrls(int $news_category_id, array $data): void {
		if (!isset($data['news_category_seo_url'])) {
			return;
		}

		$parent_path = $this->getPath((int)$data['parent_id']);
		$path = $parent_path ? $parent_path . '_' . $news_category_id : (string)$news_category_id;

		$this->load->model('design/seo_url');

		foreach ($data['news_category_seo_url'] as $store_id => $language) {
			foreach ($language as $language_id => $keyword) {
				if ($keyword === '') {
					continue;
				}

				$parent_info = $this->model_design_seo_url->getSeoUrlByKeyValue('news_path', $parent_path, $store_id, $language_id);

				if ($parent_info) {
					$keyword = $parent_info['keyword'] . '/' . $keyword;
				}

				$this->db->query("INSERT INTO `" . DB_PREFIX . "seo_url` SET `store_id` = '" . (int)$store_id . "', `language_id` = '" . (int)$language_id . "', `key` = 'news_path', `value` = '" . $this->db->escape($path) . "', `keyword` = '" . $this->db->escape($keyword) . "'");
			}
		}
	}

	private function saveLayouts(int $news_category_id, array $data): void {
		if (isset($data['news_category_layout'])) {
			foreach ($data['news_category_layout'] as $store_id => $layout_id) {
				if ($layout_id !== '') {
					$this->db->query("INSERT INTO `" . DB_PREFIX . "news_category_to_layout` SET `news_category_id` = '" . (int)$news_category_id . "', `store_id` = '" . (int)$store_id . "', `layout_id` = '" . (int)$layout_id . "'");
				}
			}
		}
	}
}
