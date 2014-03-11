/**
 * Parallex effects.
 */

/*globals jQuery, document */
;(function ($) {
  "use strict";

  var $form = $('#ss-form');

  /**
   * Callback for form submittion.
   */
  function afterSubmittion() {
    $form.addClass('submitted');
  }

  /**
   * Listen to form submition event.
   */
  $form.ajaxForm({
    success: afterSubmittion,
    error: afterSubmittion
  });

}(jQuery));
