<?php
namespace Opencart\Catalog\Controller\Startup;

class SeoUrl extends \Opencart\System\Engine\Controller {
    public function index(): void {
        if ($this->config->get('config_seo_url')) {
            $this->url->addRewrite($this);

            $this->load->model('design/seo_url');

            // Decode URL
            if (isset($this->request->get['_route_'])) {
                $parts = explode('/', $this->request->get['_route_']);

                if (oc_strlen(end($parts)) == 0) {
                    array_pop($parts);
                }

                foreach ($parts as $part) {
                    $seo_url_info = $this->model_design_seo_url->getSeoUrlByKeyword($part);

                    if ($seo_url_info) {
                        $this->request->get[$seo_url_info['key']] = html_entity_decode($seo_url_info['value'], ENT_QUOTES, 'UTF-8');
                    }
                }

                // --- PHẦN CAN THIỆP 1: TỰ ĐỘNG NHẬN DIỆN ROUTE KHI BỊ THIẾU ---
                if (!isset($this->request->get['route'])) {
                    if (isset($this->request->get['product_id'])) {
                        $this->request->get['route'] = 'product/product';
                    } elseif (isset($this->request->get['path'])) {
                        $this->request->get['route'] = 'product/category';
                    } elseif (isset($this->request->get['information_id'])) {
                        $this->request->get['route'] = 'information/information';
                    } elseif (isset($this->request->get['manufacturer_id'])) {
                        $this->request->get['route'] = 'product/manufacturer/info';
                    }
                }
                // -----------------------------------------------------------
            }
        }
    }

    public function rewrite(string $link): string {
        $url_info = parse_url(str_replace('&amp;', '&', $link));
        $url = '';

        if (isset($url_info['scheme'])) { $url .= $url_info['scheme']; }
        $url .= '://';
        if (isset($url_info['host'])) { $url .= $url_info['host']; }
        if (isset($url_info['port'])) { $url .= ':' . $url_info['port']; }

        parse_str($url_info['query'], $query);
        $paths = [];
        $parts = explode('&', $url_info['query']);

        foreach ($parts as $part) {
            if (empty($part)) continue;
            [$key, $value] = explode('=', $part);

            // --- PHẦN CAN THIỆP 2: LOẠI BỎ SINH TIỀN TỐ TỪ ROUTE ---
            // Nếu là key 'route' và thuộc các loại ta muốn giấu, ta xóa nó khỏi danh sách tạo keyword
            $ignore_routes = [
                'product/product',
                'product/category',
                'information/information',
                'product/manufacturer/info'
            ];

            if ($key == 'route' && in_array($value, $ignore_routes)) {
                unset($query[$key]);
                continue; // Bỏ qua, không lấy keyword 'catalog' hay 'product' từ DB nữa
            }
            // -----------------------------------------------------

            $result = $this->model_design_seo_url->getSeoUrlByKeyValue((string)$key, (string)$value);

            if ($result) {
                $paths[] = $result;
                unset($query[$key]);
            }
        }

        $sort_order = [];
        foreach ($paths as $key => $value) {
            $sort_order[$key] = $value['sort_order'];
        }
        array_multisort($sort_order, SORT_ASC, $paths);

        $url .= str_replace('/index.php', '', $url_info['path']);

        foreach ($paths as $result) {
            $url .= '/' . $result['keyword'];
        }

        if ($query) {
            $url .= '?' . str_replace(['%2F'], ['/'], http_build_query($query));
        }

        return $url;
    }
}