// import { inject } from '@angular/core';
// import {
//   catchError, exhaustMap, map, of, tap,
// } from 'rxjs';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { SearchItemsService } from 'src/app/features/services/search-items.service';
// import { SearchItemsActions } from '../actions/search-items.actions';

// export const loadVideos = createEffect(
//   (actions$ = inject(Actions), searchItemsService = inject(SearchItemsService)) => { return actions$.pipe(
//       ofType(SearchItemsActions.getSearchItems),
//       exhaustMap(() => searchItemsService.getByInput('all').pipe(
//         map((data) => data)
//       ))
//     ) },
//   { functional: true },
// );
