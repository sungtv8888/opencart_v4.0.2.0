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

/* catalog/view/template/product/review.twig */
class __TwigTemplate_ac630145e71c62c5e16bc662948afb02 extends Template
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
        echo "<form id=\"form-review\">
  <div id=\"review\">";
        // line 2
        echo ($context["list"] ?? null);
        echo "</div>
  <h2>";
        // line 3
        echo ($context["text_write"] ?? null);
        echo "</h2>
  ";
        // line 4
        if (($context["review_guest"] ?? null)) {
            // line 5
            echo "    <div class=\"mb-3 required\">
      <label for=\"input-name\" class=\"form-label\">";
            // line 6
            echo ($context["entry_name"] ?? null);
            echo "</label> <input type=\"text\" name=\"name\" value=\"";
            echo ($context["customer_name"] ?? null);
            echo "\" id=\"input-name\" class=\"form-control\"/>
      <div id=\"error-name\" class=\"invalid-feedback\"></div>
    </div>
    <div class=\"mb-3 required\">
      <label for=\"input-text\" class=\"form-label\">";
            // line 10
            echo ($context["entry_review"] ?? null);
            echo "</label> <textarea name=\"text\" rows=\"5\" id=\"input-text\" class=\"form-control\"></textarea>
      <div id=\"error-text\" class=\"invalid-feedback\"></div>
      <div class=\"invalid-feedback\">";
            // line 12
            echo ($context["text_note"] ?? null);
            echo "</div>
    </div>
    <div class=\"row mb-3 required\">
      <label class=\"form-label\">";
            // line 15
            echo ($context["entry_rating"] ?? null);
            echo "</label>
      <div id=\"input-rating\">
        ";
            // line 17
            echo ($context["entry_bad"] ?? null);
            echo "&nbsp;
        <input type=\"radio\" name=\"rating\" value=\"1\" class=\"form-check-input\"/>
        &nbsp;
        <input type=\"radio\" name=\"rating\" value=\"2\" class=\"form-check-input\"/>
        &nbsp;
        <input type=\"radio\" name=\"rating\" value=\"3\" class=\"form-check-input\"/>
        &nbsp;
        <input type=\"radio\" name=\"rating\" value=\"4\" class=\"form-check-input\"/>
        &nbsp;
        <input type=\"radio\" name=\"rating\" value=\"5\" class=\"form-check-input\"/>
        &nbsp;";
            // line 27
            echo ($context["entry_good"] ?? null);
            echo "
      </div>
      <div id=\"error-rating\" class=\"invalid-feedback\"></div>
    </div>
    ";
            // line 31
            echo ($context["captcha"] ?? null);
            echo "
    <div class=\"row\">
      <div class=\"col\">
        <a href=\"";
            // line 34
            echo ($context["back"] ?? null);
            echo "\" class=\"btn btn-light\">";
            echo ($context["button_back"] ?? null);
            echo "</a>
      </div>
      <div class=\"col text-end\">
        <button type=\"submit\" id=\"button-review\" class=\"btn btn-primary\">";
            // line 37
            echo ($context["button_continue"] ?? null);
            echo "</button>
      </div>
    </div>
  ";
        } else {
            // line 41
            echo "    ";
            echo ($context["text_login"] ?? null);
            echo "
  ";
        }
        // line 43
        echo "</form>
<script type=\"text/javascript\"><!--
\$('#review').on('click', '.pagination a', function(e) {
    e.preventDefault();

    \$('#review').load(this.href);
});

// Forms
\$('#form-review').on('submit', function(e) {
    e.preventDefault();

    var element = this;

    \$.ajax({
        url: 'index.php?route=product/review.write&language=";
        // line 58
        echo ($context["language"] ?? null);
        echo "&review_token=";
        echo ($context["review_token"] ?? null);
        echo "&product_id=";
        echo ($context["product_id"] ?? null);
        echo "',
        type: 'post',
        data: \$('#form-review').serialize(),
        dataType: 'json',
        cache: false,
        contentType: 'application/x-www-form-urlencoded',
        processData: false,
        beforeSend: function() {
            \$('#button-review').button('loading');
        },
        complete: function() {
            \$('#button-review').button('reset');
        },
        success: function(json) {
            \$('.alert-dismissible').remove();
            \$('#form-review').find('.is-invalid').removeClass('is-invalid');
            \$('#form-review').find('.invalid-feedback').removeClass('d-block');

            if (json['error']) {
                if (json['error']['warning']) {
                    \$('#alert').prepend('<div class=\"alert alert-danger alert-dismissible\"><i class=\"fa-solid fa-circle-exclamation\"></i> ' + json['error']['warning'] + ' <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\"></button></div>');
                }

                for (key in json['error']) {
                    \$('#input-' + key.replaceAll('_', '-')).addClass('is-invalid').find('.form-control, .form-select, .form-check-input, .form-check-label').addClass('is-invalid');
                    \$('#error-' + key.replaceAll('_', '-')).html(json['error'][key]).addClass('d-block');
                }
            }

            if (json['success']) {
                \$('#alert').prepend('<div class=\"alert alert-success alert-dismissible\"><i class=\"fa-solid fa-circle-exclamation\"></i> ' + json['success'] + ' <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\"></button></div>');

                \$('#input-text').val('');
                \$('#input-rating input[type=\\'radio\\']').prop('checked', false);
            }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(thrownError + \"\\r\\n\" + xhr.statusText + \"\\r\\n\" + xhr.responseText);
        }
    });
});
//--></script>";
    }

    public function getTemplateName()
    {
        return "catalog/view/template/product/review.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  142 => 58,  125 => 43,  119 => 41,  112 => 37,  104 => 34,  98 => 31,  91 => 27,  78 => 17,  73 => 15,  67 => 12,  62 => 10,  53 => 6,  50 => 5,  48 => 4,  44 => 3,  40 => 2,  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "catalog/view/template/product/review.twig", "C:\\wamp64\\www\\opencart_dev\\catalog\\view\\template\\product\\review.twig");
    }
}
