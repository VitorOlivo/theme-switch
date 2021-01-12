import { Action } from '@ngrx/store';

export enum ThemeActionTypes {
  ChangeTheme = '[Theme] Change Theme',
  ResetTheme = '[Theme] Reset Theme'
}

export class ChangeTheme implements Action {
  readonly type = ThemeActionTypes.ChangeTheme;

  constructor(public payload: any) {}
}
export class ResetTheme implements Action {
  readonly type = ThemeActionTypes.ResetTheme;

  constructor() {}
}

export type ThemeActionsUnion =
  | ChangeTheme
  | ResetTheme;
