/**
 * @file
 * field_load_more.js
 */

(function($, Drupal) {

  var items = 0;
  $load_more = $(".load-more.field");
  var visible_items_length = 0;
  var total_items_length = 0;
  var items_to_show = 0;
  $element_invisible = $("div.field-item div.element-invisible");
  var div_index = 0;

  Drupal.behaviors.field_load_more = {
    attach: function(context, settings) {
      $('.load-more-btn', context).bind('click', function(e) {
        var $parentFieldWrapper = $(this).parents('.field-load-more');
        var parentWrapperClass = $(this).attr('data-field-class');
        var itemLimit = Drupal.settings.field_load_more.items;
        var count = 0;
        $('.field-item div.element-invisible', $parentFieldWrapper).each(function() {
            if (count < itemLimit) {
                $(this).removeClass('div > element-invisible');
            }
            else {
                return false;
            }
            count++;
        });
        var invisibleItemsCount = $('.field-item div.element-invisible', $parentFieldWrapper).length;

        if (invisibleItemsCount === 0) {
            $(this).addClass('element-invisible');
        }
    });
    }
  };
})(jQuery, Drupal);
