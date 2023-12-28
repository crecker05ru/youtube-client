import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CustomCard } from 'src/app/favorite/services/custom-card.model';

export const selectCustomCards = createFeatureSelector<ReadonlyArray<CustomCard>>('customCards');

export const selectCardsListState = createFeatureSelector<ReadonlyArray<CustomCard>>('cardsList');

export const selectCardsList = createSelector(
  selectCustomCards,
  selectCardsListState,
  (customCards, cardsList) => ({ customCards, cardsList }),
);
