import * as rest from "./endpoints";
import * as actions from "./actions";

export const getListContratos = () => {
  return dispatch => {
    rest.getContratos().then(resp => {
      dispatch(actions.setList(resp.data));
    });
  };
};

export const postNewContrato = data => {
  return dispatch => {
    rest.postContrato(data).then(resp => {
      if (resp.status === 201) {
        dispatch(actions.showSuccessSnackbar());
        dispatch(getListContratos());
      } else {
        dispatch(actions.showErrorSnackbar());
      }
    });
  };
};

export const deleteContrato = idContrato => {
  return dispatch => {
    rest.deleteContrato(idContrato).then(resp => {
      if (resp.status === 200) {
        dispatch(actions.showSuccessSnackbar());
        dispatch(getListContratos());
      } else {
        dispatch(actions.showErrorSnackbar());
      }
    });
  };
};
