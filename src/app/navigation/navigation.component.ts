import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

import { NavigationItem, NavigationParent } from './navigation.models';
import { NAVIGATION } from './navigation.example';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavigationComponent {
  @Output() linkClicked: EventEmitter<void> = new EventEmitter<void>();
  readonly navigation: Array<NavigationItem | NavigationParent> = NAVIGATION;
}
