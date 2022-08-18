import { Action } from '@ngrx/store';

export enum ThemeActionTypes {
  ChangeTheme = '[Theme] Change Theme',
  ChangeThemeSuccess = '[Theme] Change Theme Success',
  ResetTheme = '[Theme] Reset Theme',
}

export class ChangeTheme implements Action {
  readonly type = ThemeActionTypes.ChangeTheme;

  constructor(public payload: any) {}
}

export class ChangeThemeSuccess implements Action {
  readonly type = ThemeActionTypes.ChangeThemeSuccess;

  constructor(public payload: any) {}
}

export class ResetTheme implements Action {
  readonly type = ThemeActionTypes.ResetTheme;

  constructor() {}
}

export type ThemeActionsUnion =
  | ChangeTheme
  | ResetTheme;
