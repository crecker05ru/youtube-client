import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CustomCard } from 'src/app/favorite/services/custom-card.model';

export const CustomCardsActions = createActionGroup({
  source: 'CustomCards',
  events: {
    'Get CustomCards': emptyProps(),
    'Add card': props<{ cardData: CustomCard }>(),
    'Remove card': props<{ cardId: string }>(),
    'Edit card': props<{ cardData: CustomCard }>(),
  },
});

export const CustomCardsApiActions = createActionGroup({
  source: 'CustomCards Api',
  events: {
    'Get CustomCards': props<{ customCards: ReadonlyArray<CustomCard> }>(),
  },
});
