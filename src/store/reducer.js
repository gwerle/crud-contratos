import initialState from "./initialState";
import * as TYPES from "./actionTypes";

export default function rootReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case TYPES.GET_LIST:
      return Object.assign({}, state, {
        list: payload
      });
    case TYPES.GET_LIST_PARTES:
      return Object.assign({}, state, {
        listPartes: payload
      });
    case TYPES.SUCCESS_SNACKBAR:
      return Object.assign({}, state, {
        successSnackbarOn: true
      });
    case TYPES.ERROR_SNACKBAR:
      return Object.assign({}, state, {
        errorSnackbarOn: true
      });
    case TYPES.HIDE_SNACKBAR:
      return Object.assign({}, state, {
        errorSnackbarOn: false,
        successSnackbarOn: false
      });
    default:
      return state;
  }
}
