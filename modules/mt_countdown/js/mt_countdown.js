/*
 * MTCountDown scripts
 *  Add any module related script here
 */
(function ($, Drupal, drupalSettings) {

  Drupal.behaviors.mt_countdown = {
    attach: function (context, settings) {
      // Get access setting from 'drupalSettings'.
      var expiration_date = drupalSettings.mt_countdown.expiration_date;

      // Start countdown script.
      $(".mt-count-down-slot").countdown(expiration_date, function(event) {
        $(this).html(event.strftime('' +
          '<span class="mt-time"><span class="mt-count">%D</span> <span class="mt-label">day%!d</span></span> ' +
          '<span class="mt-time"><span class="mt-count">%H</span> <span class="mt-label">hours</span></span> ' +
          '<span class="mt-time"><span class="mt-count">%M</span> <span class="mt-label">minutes</span></span> ' +
          '<span class="mt-time"><span class="mt-count">%S</span> <span class="mt-label">seconds</span></span>'));
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
