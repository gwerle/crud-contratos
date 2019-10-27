import * as TYPES from "./actionTypes";

export const setList = listContratos => ({
  type: TYPES.GET_LIST,
  payload: { listContratos }
});

export const setListPartes = listPartes => ({
  type: TYPES.GET_LIST_PARTES,
  payload: { listPartes }
});

export const showSuccessSnackbar = () => ({
  type: TYPES.SUCCESS_SNACKBAR
});

export const showErrorSnackbar = () => ({
  type: TYPES.ERROR_SNACKBAR
});

export const hideSnackbar = () => ({
  type: TYPES.HIDE_SNACKBAR
});
