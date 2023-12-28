import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { CustomCardsActions } from 'src/app/redux/actions/customCards.actions';
import { selectCustomCards } from 'src/app/redux/selectors/customCards.selector';

@Injectable({ providedIn: 'root' })
export class CustomCardsService {
  customCards$ = this.store.select(selectCustomCards);

  constructor(private http: HttpClient, private store: Store) {}

  // getCustomCards(): Observable<CustomCard[]> {
  //   return this.http.get<{ customCards: CustomCard[] }>('/').pipe(
  //     map((cards) => cards.customCards || []),
  //   );
  // }

  getCustomCards() {
    setTimeout(() => {
      // const loadedState = JSON.parse(localStorage.getItem('customCardsState') || '');
      this.store.dispatch(CustomCardsActions.getCustomCards());
    }, 20);
  }

  // addCard(cardData: CustomCard) {
  //   this.store.dispatch(CustomCardsActions.addCard({ cardData }));
  // }

  // removeCard(cardId: string) {
  //   this.store.dispatch(CustomCardsActions.removeCard({ cardId }));
  // }

  // editCard(cardData: CustomCard) {
  //   this.store.dispatch(CustomCardsActions.editCard({ cardData }));
  // }
}
