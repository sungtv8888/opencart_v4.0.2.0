CREATE TABLE IF NOT EXISTS `oc_news_category_path` (
  `news_category_id` int(11) NOT NULL,
  `path_id` int(11) NOT NULL,
  `level` int(11) NOT NULL,
  PRIMARY KEY (`news_category_id`, `path_id`),
  KEY `path_id` (`path_id`),
  KEY `level` (`level`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
