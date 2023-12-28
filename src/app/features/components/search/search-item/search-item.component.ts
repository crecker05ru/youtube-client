import { NgIf } from '@angular/common';
import {
  Component, EventEmitter, Input, OnChanges, OnInit, Output,
} from '@angular/core';
import { SearchItem } from 'src/app/shared/models/search-item.model';
import { MatIconModule } from '@angular/material/icon';
import { ColorDateDirective } from 'src/app/shared/directives/colorDate.directive';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SearchItemsActions } from 'src/app/redux/actions/search-items.actions';
import { AppButtonComponent } from '../../../../shared/UI/button/app-button.component';

@Component({
  standalone: true,
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
  imports: [AppButtonComponent, NgIf, MatIconModule, ColorDateDirective],
})

export class SearchItemComponent implements OnInit, OnChanges {
  @Input() item: SearchItem | undefined;

  @Input() ids: string[] | undefined;

  @Input() isFavorite = false;

  @Output() favoriteButtonClick = new EventEmitter<SearchItem>();

  constructor(public router: Router, private store: Store) {
  }

  ngOnInit(): void {
    if (this.item?.id) this.isFavorite = Boolean(this.ids?.includes(this.item.id));
  }

  ngOnChanges(): void {
    if (this.item?.id) this.isFavorite = Boolean(this.ids?.includes(this.item.id));
  }

  favoriteClick(item: SearchItem) {
    if (this.isFavorite) {
      this.store.dispatch(SearchItemsActions.removeFavorite({ id: item.id }));
    } else {
      this.store.dispatch(SearchItemsActions.addFavorite({ favorite: item }));
    }
  }
}
