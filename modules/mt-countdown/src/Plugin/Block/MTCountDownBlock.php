<?php
namespace Drupal\mt_countdown\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Block\BlockPluginInterface;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides a 'MTCountDown' Block.
 *
 * @Block(
 *   id = "mt_countdown",
 *   admin_label = @Translation("CountDown block"),
 * )
 */
class MTCountDownBlock extends BlockBase implements BlockPluginInterface {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $config = \Drupal::config('mt_countdown.settings');
    $data = [];
    $data['alert_message'] = $config->get('alert_message');
    $data['target_url'] = $config->get('target_url');
    $data['dismiss_text'] = $config->get('dismiss_text');
    return [
      '#theme' => 'mt_countdown',
      '#data' => $data,
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {
    $config = $this->getConfiguration();

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
    $this->configuration['mt_countdown_block_settings'] = $form_state->getValue('mt_countdown_block_settings');
  }
}