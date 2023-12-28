import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-button',
  template: '<button class="app__button"><ng-content></ng-content></button>',
  imports: [MatButtonModule, MatIconModule, MatDividerModule],
  // eslint-disable-next-line max-len
  styles: ['.app__button { color: #fff; background-color: #2F80ED; border: none; height: 100%; width: 100%; border-radius: 5px;}'],
})
export class AppButtonComponent {}
