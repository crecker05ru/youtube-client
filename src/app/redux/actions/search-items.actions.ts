import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { SearchItem } from 'src/app/shared/models/search-item.model';

export const SearchItemsActions = createActionGroup({
  source: 'Search items',
  events: {
    'Get searchItems': props<{ searchItems: SearchItem[] }>(),
    'Get favorites': emptyProps(),
    'Add favorite': props<{ favorite: SearchItem }>(),
    'Remove favorite': props<{ id: string }>(),
  },
});
