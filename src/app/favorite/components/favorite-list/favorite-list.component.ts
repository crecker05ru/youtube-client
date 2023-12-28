import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSearchItems } from 'src/app/redux/selectors/search-items.selector';
import { SearchItemsActions } from '../../../redux/actions/search-items.actions';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss'],
})
export class FavoriteListComponent implements OnInit {
  // public favorites$ = this.store.select(selectFavorites);
  searchItems$ = this.store.select(selectSearchItems);

  constructor(private store:Store) {}

  ngOnInit(): void {
    // this.store.dispatch(FavoritesActions.getFavorites());
    this.store.dispatch(SearchItemsActions.getSearchItems({ searchItems: [] }));
  }

  // onFavoriteButtonClick(item: SearchItem) {
  //   this.store.dispatch(SearchItemsActions.removeFavorite({ id: item.id }));
  // }
}
