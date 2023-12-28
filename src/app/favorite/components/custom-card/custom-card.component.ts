import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ColorDateDirective } from 'src/app/shared/directives/colorDate.directive';
import { Router } from '@angular/router';
import { CustomCard } from '../../services/custom-card.model';
import { AppButtonComponent } from '../../../shared/UI/button/app-button.component';

@Component({
  standalone: true,
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
  imports: [CommonModule, AppButtonComponent, MatIconModule, ColorDateDirective],
})
export class CustomCardComponent {
  @Input() card: CustomCard | undefined;

  @Output() add = new EventEmitter<string>();

  @Output() edit = new EventEmitter<string>();

  @Output() delete = new EventEmitter<string>();

  constructor(public router: Router) {
  }
}
