import {
  Component, EventEmitter, Input, OnInit, Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultComponent } from 'src/app/features/components/search/search-result/search-result.component';
import { Store } from '@ngrx/store';
import { selectCustomCards } from 'src/app/redux/selectors/customCards.selector';
import { CustomCardsActions } from 'src/app/redux/actions/customCards.actions';
import { CustomCard } from '../../services/custom-card.model';
import { CustomCardComponent } from '../custom-card/custom-card.component';
import { CustomCardsService } from '../../services/customCards.service';

@Component({
  standalone: true,
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
  imports: [CommonModule, CustomCardComponent, SearchResultComponent],
})
export class VideoListComponent implements OnInit {
  customCards$ = this.store.select(selectCustomCards);

  @Input() customCards: ReadonlyArray<CustomCard> = [];

  @Output() remove = new EventEmitter<string>();

  constructor(private store: Store, public customCardsService: CustomCardsService) {}

  // @Output() card = this.customCards[0];

  ngOnInit(): void {
    this.customCardsService.getCustomCards();
  }

  onDelete(id: string) {
    // this.customCards.filter((card) => card.id !== id);
    this.store.dispatch(CustomCardsActions.removeCard({ cardId: id }));
  }
}
