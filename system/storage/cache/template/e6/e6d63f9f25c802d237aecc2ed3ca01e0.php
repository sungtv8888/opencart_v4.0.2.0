<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* admin/view/template/common/security.twig */
class __TwigTemplate_d82e6b529a62777614fcef943975dcc4 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo "<div id=\"modal-security\" class=\"modal show\">
  <div class=\"modal-dialog\">
    <div class=\"modal-content\">
      <div class=\"modal-header\">
        <h5 class=\"modal-title text-danger\"><i class=\"fa-solid fa-triangle-exclamation\"></i> ";
        // line 5
        echo ($context["heading_title"] ?? null);
        echo "</h5>
        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\"></button>
      </div>
      <div id=\"accordion\" class=\"accordion\">

        ";
        // line 10
        if (($context["install"] ?? null)) {
            // line 11
            echo "          <div id=\"security-install\" class=\"accordion-item\">
            <h5 class=\"accordion-header\"><button type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#accordion-install\" class=\"accordion-button collapsed\"><span class=\"fa-solid fa-folder\"></span>&nbsp;&nbsp;";
            // line 12
            echo ($context["text_install"] ?? null);
            echo "</button></h5>
            <div id=\"accordion-install\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordion\">
              <div class=\"modal-body\">
                <p>";
            // line 15
            echo ($context["text_install_description"] ?? null);
            echo "</p>
                <div class=\"mb-3\">
                  <div class=\"input-group\">
                    <div class=\"input-group-text\">";
            // line 18
            echo ($context["text_path"] ?? null);
            echo "</div>
                    <input type=\"text\" value=\"";
            // line 19
            echo ($context["install"] ?? null);
            echo "\" class=\"form-control is-invalid bg-white\" readonly/>
                  </div>
                </div>
                <div class=\"text-end\">
                  <button type=\"button\" id=\"button-install\" class=\"btn btn-danger\"><i class=\"fa-regular fa-trash-can\"></i> ";
            // line 23
            echo ($context["button_delete"] ?? null);
            echo "</button>
                </div>
              </div>
            </div>
          </div>
        ";
        }
        // line 29
        echo "
        ";
        // line 30
        if (($context["storage"] ?? null)) {
            // line 31
            echo "          <div id=\"security-storage\" class=\"accordion-item\">
            <h2 class=\"accordion-header\"><button type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#accordion-storage\" class=\"accordion-button collapsed\"><i class=\"fa-solid fa-circle-right\"></i>&nbsp;&nbsp;";
            // line 32
            echo ($context["text_storage"] ?? null);
            echo "</button></h2>
            <div id=\"accordion-storage\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordion\">
              <div class=\"modal-body\">
                <form id=\"form-storage\">
                  <p>";
            // line 36
            echo ($context["text_storage_description"] ?? null);
            echo "</p>
                  <div class=\"mb-3\">
                    <label class=\"form-label\">";
            // line 38
            echo ($context["entry_path_current"] ?? null);
            echo "</label>
                    <input type=\"text\" value=\"";
            // line 39
            echo ($context["storage"] ?? null);
            echo "\" class=\"form-control is-invalid bg-white\" readonly/>
                  </div>
                  <div class=\"mb-3\">
                    <label class=\"form-label\">";
            // line 42
            echo ($context["entry_path_new"] ?? null);
            echo "</label>
                    <div class=\"input-group dropdown\">
                      <button type=\"button\" id=\"button-path\" data-bs-toggle=\"dropdown\" class=\"btn btn-outline-secondary dropdown-toggle\">";
            // line 44
            echo ($context["document_root"] ?? null);
            echo " <span class=\"fa-solid fa-caret-down\"></span></button>
                      <ul class=\"dropdown-menu\">
                        ";
            // line 46
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["paths"] ?? null));
            foreach ($context['_seq'] as $context["_key"] => $context["path"]) {
                // line 47
                echo "                          <li><a href=\"";
                echo $context["path"];
                echo "\" class=\"dropdown-item\">";
                echo $context["path"];
                echo "</a></li>
                        ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['path'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 49
            echo "                      </ul>
                      <input type=\"text\" name=\"name\" value=\"storage\" placeholder=\"";
            // line 50
            echo ($context["text_path"] ?? null);
            echo "\" id=\"input-storage\" class=\"form-control\"/>
                    </div>
                    <input type=\"hidden\" name=\"path\" value=\"";
            // line 52
            echo ($context["document_root"] ?? null);
            echo "\" id=\"input-path\"/>
                  </div>
                  <div class=\"text-end\">
                    <button type=\"button\" id=\"button-storage\" class=\"btn btn-danger\"><span class=\"fa-solid fa-circle-right\"></span> ";
            // line 55
            echo ($context["button_move"] ?? null);
            echo "</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ";
        }
        // line 62
        echo "
        ";
        // line 63
        if (($context["admin"] ?? null)) {
            // line 64
            echo "        <div id=\"security-admin\" class=\"accordion-item\">
          <h2 class=\"accordion-header\"><button type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#accordion-admin\" class=\"accordion-button collapsed\"><span class=\"fa-solid fa-lock\"></span>&nbsp;&nbsp;";
            // line 65
            echo ($context["text_admin"] ?? null);
            echo "</button></h2>
          <div id=\"accordion-admin\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordion\">
            <div class=\"modal-body\">
              <form id=\"form-admin\">
                <p>";
            // line 69
            echo ($context["text_admin_description"] ?? null);
            echo "</p>
                <div class=\"mb-3\">
                  <div class=\"input-group\">
                    <div class=\"input-group-text\">";
            // line 72
            echo ($context["text_path"] ?? null);
            echo "</div>
                    <input type=\"text\" name=\"name\" value=\"admin\" placeholder=\"";
            // line 73
            echo ($context["entry_name"] ?? null);
            echo "\" id=\"input-admin\" class=\"form-control is-invalid\"/>
                  </div>
                </div>
                <div class=\"text-end\">
                  <button type=\"button\" id=\"button-admin\" class=\"btn btn-danger\"><i class=\"fa-solid fa-pencil\"></i> ";
            // line 77
            echo ($context["button_rename"] ?? null);
            echo "</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      ";
        }
        // line 85
        echo "
    </div>
  </div>
</div>
<script type=\"text/javascript\"><!--
\$(document).ready(function () {
    // Show modal
    var modal = new bootstrap.Modal(document.querySelector('#modal-security'));

    modal.show();

    \$('#accordion .accordion-header:first button').trigger('click');
});

\$('#button-install').on('click', function () {
    var element = this;

    \$.ajax({
        url: 'index.php?route=common/security.install&user_token=";
        // line 103
        echo ($context["user_token"] ?? null);
        echo "',
        dataType: 'json',
        beforeSend: function () {
            \$(element).button('loading');
        },
        complete: function () {
            \$(element).button('reset');
        },
        success: function (json) {
            \$('.alert-dismissible').remove();

            if (json['error']) {
                \$('#alert').prepend('<div class=\"alert alert-danger alert-dismissible\"><i class=\"fa-solid fa-circle-exclamation\"></i> ' + json['error'] + ' <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\"></button></div>');
            }

            if (json['success']) {
                \$('#alert').prepend('<div class=\"alert alert-success alert-dismissible\"><i class=\"fa-solid fa-check-circle\"></i> ' + json['success'] + ' <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\"></button></div>');

                \$('#security-install').remove();

                \$('#accordion .accordion-header:first button').trigger('click');
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(thrownError + \"\\r\\n\" + xhr.statusText + \"\\r\\n\" + xhr.responseText);
        }
    });
});

\$('#form-storage .dropdown-menu a').on('click', function (e) {
    e.preventDefault();

    \$('#input-path').val(\$(this).attr('href'));

    \$('#button-path').html(\$(this).attr('href') + ' <span class=\"fa-solid fa-caret-down\"></span>');
});

\$('#button-storage').on('click', function () {
    var element = this;

    var next = 'index.php?route=common/security.storage&user_token=";
        // line 143
        echo ($context["user_token"] ?? null);
        echo "&name=' + encodeURIComponent(\$('#input-storage').val()) + '&path=' + encodeURIComponent(\$('#input-path').val());

    var storage = function () {
        return \$.ajax({
            url: next,
            dataType: 'json',
            beforeSend: function () {
                \$(element).button('loading');
            },
            contentType: 'application/x-www-form-urlencoded',
            success: function (json) {
                console.log(json);

                \$('.alert-dismissible').remove();

                if (json['error']) {
                    \$('#alert').prepend('<div class=\"alert alert-danger alert-dismissible\"><i class=\"fa-solid fa-circle-exclamation\"></i> ' + json['error'] + ' <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\"></button></div>');
                }

                if (json['success']) {
                    \$('#alert').prepend('<div class=\"alert alert-success alert-dismissible\"><i class=\"fa-solid fa-check-circle\"></i> ' + json['success'] + ' <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\"></button></div>');

                    \$('#security-storage').remove();

                    \$('#accordion .accordion-header:first button').trigger('click');
                }

                if (json['next']) {
                    next = json['next'];

                    chain.attach(storage);
                }

                \$(element).button('reset');
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(thrownError + \"\\r\\n\" + xhr.statusText + \"\\r\\n\" + xhr.responseText);
            }
        });
    };

    chain.attach(storage);
});

\$('#button-admin').on('click', function () {
    var element = this;

    var next = 'index.php?route=common/security.admin&user_token=";
        // line 190
        echo ($context["user_token"] ?? null);
        echo "&name=' + encodeURIComponent(\$('#input-admin').val());

    var admin = function () {
        return \$.ajax({
            url: next,
            dataType: 'json',
            beforeSend: function () {
                \$(element).button('loading');
            },
            contentType: 'application/x-www-form-urlencoded',
            success: function (json) {
                console.log(json);

                \$('.alert-dismissible').remove();

                if (json['redirect']) {
                    location = json['redirect'];
                }

                if (json['error']) {
                    \$('#alert').prepend('<div class=\"alert alert-danger alert-dismissible\"><i class=\"fa-solid fa-circle-exclamation\"></i> ' + json['error'] + ' <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\"></button></div>');
                }

                if (json['success']) {
                    \$('#alert').prepend('<div class=\"alert alert-success alert-dismissible\"><i class=\"fa-solid fa-check-circle\"></i> ' + json['success'] + ' <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\"></button></div>');

                    \$('#security-admin').remove();

                    \$('#accordion .accordion-header:first button').trigger('click');
                }

                if (json['next']) {
                    next = json['next'];

                    chain.attach(admin);
                }

                \$(element).button('reset');
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(thrownError + \"\\r\\n\" + xhr.statusText + \"\\r\\n\" + xhr.responseText);
            }
        });
    };

    chain.attach(admin);
});
//--></script>
";
    }

    public function getTemplateName()
    {
        return "admin/view/template/common/security.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  323 => 190,  273 => 143,  230 => 103,  210 => 85,  199 => 77,  192 => 73,  188 => 72,  182 => 69,  175 => 65,  172 => 64,  170 => 63,  167 => 62,  157 => 55,  151 => 52,  146 => 50,  143 => 49,  132 => 47,  128 => 46,  123 => 44,  118 => 42,  112 => 39,  108 => 38,  103 => 36,  96 => 32,  93 => 31,  91 => 30,  88 => 29,  79 => 23,  72 => 19,  68 => 18,  62 => 15,  56 => 12,  53 => 11,  51 => 10,  43 => 5,  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "admin/view/template/common/security.twig", "C:\\wamp64\\www\\opencart_dev\\admin\\view\\template\\common\\security.twig");
    }
}
