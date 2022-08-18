import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';

import * as actions from './../actions/theme.actions';

@Injectable()
export class ThemeEffects {
  constructor(
    private actions$: Actions,
  ) {}

  
  public changeTheme$ = createEffect(() =>
    this.actions$.pipe(
      ofType<actions.ChangeTheme>(actions.ThemeActionTypes.ChangeTheme),
      switchMap((action) => {
        
        return [];
      })
    )
  );
}
