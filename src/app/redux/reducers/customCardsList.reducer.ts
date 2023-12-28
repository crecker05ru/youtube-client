import { createReducer, on } from '@ngrx/store';
import { CustomCard } from 'src/app/favorite/services/custom-card.model';
import { CustomCardsApiActions } from '../actions/customCards.actions';

export const initialState: ReadonlyArray<CustomCard> = [];

export const customCardsListReducer = createReducer(
  initialState,
  on(CustomCardsApiActions.getCustomCards, (_state, { customCards }): ReadonlyArray<CustomCard> => customCards),
);
