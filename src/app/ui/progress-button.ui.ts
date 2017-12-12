import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ElementRef,
  SimpleChanges,
  OnChanges,
  ViewEncapsulation,
  Optional,
  Inject,
} from '@angular/core';
import {Platform} from '@angular/cdk/platform';
import {FocusMonitor} from '@angular/cdk/a11y';

import{ MatButton } from '@angular/material';

/**
 * Raised Material design button.
 */
@Component({
  moduleId: module.id,
  selector: `button[tab-progress-button]`,
  exportAs: 'tabProgressButton',
  host: {
  },
  inputs: ['disabled', 'disableRipple', 'color'],
  templateUrl: 'progress-button.html',
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabProgressButton extends MatButton {
  constructor(
      platform: Platform,
      focusMonitor: FocusMonitor,
      elementRef: ElementRef) {
    super(elementRef, platform, focusMonitor);
  }

}
