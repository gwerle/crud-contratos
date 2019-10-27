import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";

import { ContainerWithoutPadding, AdicionarContratoStyle } from "./styles";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CadastroContratosModalContent from "./CadastroContratosModalContent";
import PartesCardCollapse from "./PartesCardCollapse";

import Snackbar from "./Snackbar";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: "0px",
    width: "60%",
    height: "60%"
  }
}));

export default function ListContratos(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    props.hideSnackbar();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {props.listContratos && (
        <div>
          <CssBaseline />
          <ContainerWithoutPadding fixed>
            <Typography component="div" />
            <AdicionarContratoStyle>
              <Tooltip title="Adicionar Contrato">
                <Fab color="primary" style={{ margin: "20px" }}>
                  <AddIcon onClick={handleOpen} />
                  <Modal
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 300
                    }}
                  >
                    <Fade in={open}>
                      <div className={classes.paper}>
                        <CadastroContratosModalContent
                          handleClose={handleClose}
                          thunks={props.thunks}
                        />
                      </div>
                    </Fade>
                  </Modal>
                </Fab>
              </Tooltip>
            </AdicionarContratoStyle>
            {props.isPostSuccessful && (
              <Snackbar
                variant={"success"}
                message={"Operação Concluída com Sucesso!"}
              />
            )}
            {props.isPostFailed && (
              <Snackbar variant={"error"} message={"Ops! Algo deu errado!"} />
            )}
            <div>
              {props.listContratos.map((item, index) => (
                <PartesCardCollapse
                  item={item}
                  key={index}
                  thunks={props.thunks}
                  hideSnackbar={props.hideSnackbar}
                />
              ))}
            </div>
          </ContainerWithoutPadding>
        </div>
      )}
    </div>
  );
}
