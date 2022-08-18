import {
    ThemeActionTypes,
    ThemeActionsUnion
  } from '../actions/theme.actions';
  
  const initialState = 'Light';
  
  export function reducer(state = initialState, action: ThemeActionsUnion) {
    switch (action.type) {
      case ThemeActionTypes.ChangeTheme:
        return action.payload;
  
      case ThemeActionTypes.ResetTheme:
        return initialState;
  
      default:
        return state;
    }
  }
  