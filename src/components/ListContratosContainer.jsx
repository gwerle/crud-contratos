/* React - Redux */
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

/* Store */
import * as actions from "../store/actions";
import * as thunks from "../store/thunks";

import ListContratos from "./ListContratos";

class ListContratosContainer extends React.Component {
  componentDidMount() {
    this.props.thunks.getListContratos();
  }

  render() {
    return (
      <div>
        <ListContratos
          listContratos={this.props.listContratos}
          listPartes={this.props.listPartes}
          thunks={this.props.thunks}
          isPostSuccessful={this.props.isPostSuccessful}
          isPostFailed={this.props.isPostFailed}
          hideSnackbar={this.props.hideSnackbar}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    listContratos: state.list.listContratos,
    listPartes: state.listPartes.listPartes,
    isPostSuccessful: state.successSnackbarOn,
    isPostFailed: state.errorSnackbarOn
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
  thunks: bindActionCreators(thunks, dispatch),
  hideSnackbar: () => dispatch({ type: "ACTIONS/HIDE_SNACKBAR" })
});

// Redux Form
ListContratosContainer = reduxForm({
  form: "listContratos"
})(ListContratosContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContratosContainer);
