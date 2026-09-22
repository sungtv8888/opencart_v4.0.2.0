CREATE TABLE IF NOT EXISTS `oc_news_to_category` (
  `news_id` int(11) NOT NULL,
  `news_category_id` int(11) NOT NULL,
  PRIMARY KEY (`news_id`, `news_category_id`),
  KEY `news_category_id` (`news_category_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
