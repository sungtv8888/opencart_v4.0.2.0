<?php
namespace Opencart\Catalog\Model\Extension\News\News;

class News extends \Opencart\System\Engine\Model {
	public function getCategory(int $news_category_id): array {
		$query = $this->db->query("SELECT DISTINCT * FROM `" . DB_PREFIX . "news_category` nc LEFT JOIN `" . DB_PREFIX . "news_category_description` ncd ON (nc.`news_category_id` = ncd.`news_category_id`) LEFT JOIN `" . DB_PREFIX . "news_category_to_store` nc2s ON (nc.`news_category_id` = nc2s.`news_category_id`) WHERE nc.`news_category_id` = '" . (int)$news_category_id . "' AND ncd.`language_id` = '" . (int)$this->config->get('config_language_id') . "' AND nc2s.`store_id` = '" . (int)$this->config->get('config_store_id') . "' AND nc.`status` = '1'");

		return $query->row;
	}

	public function getCategories(int $parent_id = 0): array {
		$query = $this->db->query("SELECT * FROM `" . DB_PREFIX . "news_category` nc LEFT JOIN `" . DB_PREFIX . "news_category_description` ncd ON (nc.`news_category_id` = ncd.`news_category_id`) LEFT JOIN `" . DB_PREFIX . "news_category_to_store` nc2s ON (nc.`news_category_id` = nc2s.`news_category_id`) WHERE nc.`parent_id` = '" . (int)$parent_id . "' AND ncd.`language_id` = '" . (int)$this->config->get('config_language_id') . "' AND nc2s.`store_id` = '" . (int)$this->config->get('config_store_id') . "' AND nc.`status` = '1' ORDER BY nc.`sort_order`, LCASE(ncd.`name`)");

		return $query->rows;
	}

	public function getCategoryPath(int $news_category_id): string {
		$query = $this->db->query("SELECT `path_id` FROM `" . DB_PREFIX . "news_category_path` WHERE `news_category_id` = '" . (int)$news_category_id . "' ORDER BY `level` ASC");

		return implode('_', array_column($query->rows, 'path_id'));
	}

	public function getNews(int $news_id): array {
		$query = $this->db->query("SELECT DISTINCT * FROM `" . DB_PREFIX . "news` n LEFT JOIN `" . DB_PREFIX . "news_description` nd ON (n.`news_id` = nd.`news_id`) LEFT JOIN `" . DB_PREFIX . "news_to_store` n2s ON (n.`news_id` = n2s.`news_id`) WHERE n.`news_id` = '" . (int)$news_id . "' AND nd.`language_id` = '" . (int)$this->config->get('config_language_id') . "' AND n2s.`store_id` = '" . (int)$this->config->get('config_store_id') . "' AND n.`status` = '1' AND n.`date_available` <= CURDATE()");

		return $query->row;
	}

	public function getNewsList(array $data = []): array {
		$sql = "SELECT n.*, nd.`name`, nd.`description` FROM `" . DB_PREFIX . "news` n LEFT JOIN `" . DB_PREFIX . "news_description` nd ON (n.`news_id` = nd.`news_id`) LEFT JOIN `" . DB_PREFIX . "news_to_store` n2s ON (n.`news_id` = n2s.`news_id`)";

		if (!empty($data['filter_news_category_id'])) {
			$sql .= " LEFT JOIN `" . DB_PREFIX . "news_to_category` n2c ON (n.`news_id` = n2c.`news_id`)";
		}

		$sql .= " WHERE nd.`language_id` = '" . (int)$this->config->get('config_language_id') . "' AND n2s.`store_id` = '" . (int)$this->config->get('config_store_id') . "' AND n.`status` = '1' AND n.`date_available` <= CURDATE()";

		if (!empty($data['filter_news_category_id'])) {
			$sql .= " AND n2c.`news_category_id` = '" . (int)$data['filter_news_category_id'] . "'";
		}

		if (!empty($data['filter_featured'])) {
			$sql .= " AND n.`featured` = '1'";
		}

		$sql .= " GROUP BY n.`news_id` ORDER BY n.`sort_order` ASC, n.`date_available` DESC, nd.`name` ASC";

		if (isset($data['start']) || isset($data['limit'])) {
			$sql .= " LIMIT " . max(0, (int)$data['start']) . "," . max(1, (int)$data['limit']);
		}

		$query = $this->db->query($sql);

		return $query->rows;
	}

	public function getTotalNews(array $data = []): int {
		$sql = "SELECT COUNT(DISTINCT n.`news_id`) AS `total` FROM `" . DB_PREFIX . "news` n LEFT JOIN `" . DB_PREFIX . "news_description` nd ON (n.`news_id` = nd.`news_id`) LEFT JOIN `" . DB_PREFIX . "news_to_store` n2s ON (n.`news_id` = n2s.`news_id`)";

		if (!empty($data['filter_news_category_id'])) {
			$sql .= " LEFT JOIN `" . DB_PREFIX . "news_to_category` n2c ON (n.`news_id` = n2c.`news_id`)";
		}

		$sql .= " WHERE nd.`language_id` = '" . (int)$this->config->get('config_language_id') . "' AND n2s.`store_id` = '" . (int)$this->config->get('config_store_id') . "' AND n.`status` = '1' AND n.`date_available` <= CURDATE()";

		if (!empty($data['filter_news_category_id'])) {
			$sql .= " AND n2c.`news_category_id` = '" . (int)$data['filter_news_category_id'] . "'";
		}

		$query = $this->db->query($sql);

		return (int)$query->row['total'];
	}

	public function updateViewed(int $news_id): void {
		$this->db->query("UPDATE `" . DB_PREFIX . "news` SET `viewed` = `viewed` + 1 WHERE `news_id` = '" . (int)$news_id . "'");
	}
}
