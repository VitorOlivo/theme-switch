import { localStorageSync } from 'ngrx-store-localstorage';
import { ActionReducerMap, ActionReducer } from '@ngrx/store';

import * as fromTheme from './theme.reducer';

export const reducers: ActionReducerMap<any> = {
  theme: fromTheme.reducer
};

export function localStorageSyncReducer(
  reducers: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: [
      'theme'
    ],
    rehydrate: true
  })(reducers);
}

export const metaReducers = [localStorageSyncReducer];
