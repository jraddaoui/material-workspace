import { Component, ViewEncapsulation } from '@angular/core';
import { NAVIGATION } from './navigation.example';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavigationComponent {
  readonly navigation: object[] = NAVIGATION;
}
