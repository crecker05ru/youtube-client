import { createReducer, on } from '@ngrx/store';
import { CustomCard } from 'src/app/favorite/services/custom-card.model';
import { CustomCardsActions } from '../actions/customCards.actions';

export const initialState: ReadonlyArray<CustomCard> = [];

export const customCardsReducer = createReducer(
  initialState,
  on(CustomCardsActions.getCustomCards, (): ReadonlyArray<CustomCard> => {
    const loadedState = JSON.parse(localStorage.getItem('customCardsState') || '[]');
    return loadedState;
  }),
  on(CustomCardsActions.editCard, (state, { cardData }) => {
    const newState = [...state.map((card) => (card.id === cardData.id ? { ...card, ...cardData } : card))];
    localStorage.setItem('customCardsState', JSON.stringify(newState));
    return newState;
  }),
  on(CustomCardsActions.removeCard, (state, { cardId }) => {
    const newState = state.filter((card) => card.id !== cardId);
    localStorage.setItem('customCardsState', JSON.stringify(newState));
    return newState;
  }),
  on(CustomCardsActions.addCard, (state, { cardData }): ReadonlyArray<CustomCard> => {
    const newState = [...state, cardData];
    localStorage.setItem('customCardsState', JSON.stringify(newState));
    return newState;
  }),
);
