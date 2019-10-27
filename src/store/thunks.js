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
    if (data.titulo && data.dataInicio && data.dataVencimento) {
      rest.postContrato(data).then(resp => {
        if (resp.status === 201) {
          dispatch(actions.showSuccessSnackbar());
          dispatch(getListContratos());
        } else {
          dispatch(actions.showErrorSnackbar());
        }
      });
    } else {
      dispatch(actions.showErrorSnackbar());
    }
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

export const getPartes = idContrato => {
  return dispatch => {
    rest.getPartes(idContrato).then(resp => {
      dispatch(actions.setListPartes(resp.data));
    });
  };
};

export const postNewParte = data => {
  return dispatch => {
    if (
      data.nome &&
      data.sobrenome &&
      data.email &&
      data.cpf &&
      data.telefone
    ) {
      rest.postParte(data).then(resp => {
        if (resp.status === 201) {
          dispatch(actions.showSuccessSnackbar());
          dispatch(getPartes(data.idContrato));
        } else {
          dispatch(actions.showErrorSnackbar());
        }
      });
    } else {
      dispatch(actions.showErrorSnackbar());
    }
  };
};
