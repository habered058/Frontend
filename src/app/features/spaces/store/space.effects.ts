import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as SpaceActions from './space.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SpaceService } from '../services/space.service';

@Injectable()
export class SpaceEffects {
  constructor(private actions$: Actions, private spaceService: SpaceService) {}

  loadSpaces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SpaceActions.loadSpaces),
      mergeMap(() =>
        this.spaceService.getSpaces().pipe(
          map((spaces) => {
          console.log('Spaces fetched from service:', spaces);  // Verifica la respuesta aquí
          return SpaceActions.loadSpacesSuccess({ spaces });
        }),
          catchError((error) => of(SpaceActions.loadSpacesFailure({ error })))
        )
      )
    )
  );

  addSpace$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SpaceActions.addSpace),
      mergeMap((action) =>
        this.spaceService.postSpace(action.space).pipe(
          map((space) => SpaceActions.addSpaceSuccess({ space })),
          catchError((error) => of(SpaceActions.addSpaceFailure({ error })))
        )
      )
    )
  );

  updateSpace$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SpaceActions.updateSpace),
      mergeMap((action) =>
        this.spaceService.putSpace(action.space).pipe(
          map((space) => SpaceActions.updateSpaceSuccess({ space })),
          catchError((error) => of(SpaceActions.updateSpaceFailure({ error })))
        )
      )
    )
  );

  deleteSpace$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SpaceActions.deleteSpace),
      mergeMap((action) =>
        this.spaceService.deleteSpace(action.id).pipe(
          map(() => SpaceActions.deleteSpaceSuccess({ id: action.id })),
          catchError((error) => of(SpaceActions.deleteSpaceFailure({ error })))
        )
      )
    )
  );
}
