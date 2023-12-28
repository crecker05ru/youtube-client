import { Component } from '@angular/core';
import { CustomCardComponent } from 'src/app/favorite/components/custom-card/custom-card.component';
import { VideoListComponent } from 'src/app/favorite/components/video-list/video-list.component';
import { SearchItemComponent } from 'src/app/features/components/search/search-item/search-item.component';
import { SearchResultComponent } from 'src/app/features/components/search/search-result/search-result.component';
import { selectCardsList, selectCustomCards } from 'src/app/redux/selectors/customCards.selector';
import { Store } from '@ngrx/store';
import { CustomCardsActions } from 'src/app/redux/actions/customCards.actions';
import { CustomCardsService } from 'src/app/favorite/services/customCards.service';

@Component({
  standalone: true,
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  imports: [SearchItemComponent, SearchResultComponent, VideoListComponent, CustomCardComponent, VideoListComponent],
})
export class MainComponent {
  customCards = this.store.select(selectCustomCards);

  cardsList = this.store.select(selectCardsList);

  // onAdd(card: CustomCard) {
  //   this.store.dispatch(CustomCardsActions.addCard({ card }));
  // }

  onRemove(cardId: string) {
    this.store.dispatch(CustomCardsActions.removeCard({ cardId }));
  }

  constructor(private customCardService: CustomCardsService, private store: Store) {}
}
