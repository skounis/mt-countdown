/*
 * MTCountDown scripts
 *  Add any module related script here
 */

$(document).ready(function() {
  $('.mt-count-down').prependTo('body');
});

(function ($, Drupal, drupalSettings) {

  Drupal.behaviors.mt_countdown = {
    attach: function (context, settings) {
      // can access setting from 'drupalSettings';
      var alert_message = drupalSettings.mt_countdown.alert_message;
      var target_url = drupalSettings.mt_countdown.target_url;
      var dismiss_text = drupalSettings.mt_countdown.dismiss_text;
      var predefined_palettes = drupalSettings.mt_countdown.predefined_palettes;
      var banner_colour;
      var banner_text;
      var button_colour;
      var button_text;

      switch(predefined_palettes) {
        case '1':
          banner_colour = '#000';
          banner_text = '#ffffff';
          button_colour = '#f1d600';
          button_text = '#000000';
          break;

        case '2':
          banner_colour = '#eaf7f7';
          banner_text = '#5c7291';
          button_colour = '#56cbdb';
          button_text = '#ffffff';
          break;

        case '3':
          banner_colour = '#252e39';
          banner_text = '#ffffff';
          button_colour = '#14a7d0';
          button_text = '#ffffff';
          break;

        default:
          banner_colour = drupalSettings.mt_countdown.banner_colour;
          banner_text = drupalSettings.mt_countdown.banner_text;
          button_colour = drupalSettings.mt_countdown.button_colour;
          button_text = drupalSettings.mt_countdown.button_text;
          break;
      }

      window.addEventListener("load", function(){
        window.cookieconsent.initialise({
          "palette": {
            "popup": {
              "background": banner_colour,
              "text": banner_text
            },
            "button": {
              "background": button_colour,
              "text": button_text
            }
          },
          "content": {
            "message": alert_message,
            "href": target_url,
            "dismiss": dismiss_text
          }
        });
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
