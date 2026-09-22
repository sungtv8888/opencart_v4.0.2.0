UPDATE `oc_event`
SET `trigger` = 'admin/view/common/column_left/before',
    `action` = 'extension/news/event/menu',
    `status` = '1'
WHERE `code` = 'news_admin_menu';
