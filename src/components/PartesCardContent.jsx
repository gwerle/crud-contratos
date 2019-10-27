import React from "react";

import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import CadastroParteModal from "./CadastroParteModal";
import PartesTable from "./PartesTable";

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
    width: "65%",
    height: "60%"
  }
}));

export default function PartesCardContent(props) {
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
      <PartesTable listPartes={props.listPartes} />

      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        style={{ marginTop: "20px" }}
      >
        Adicionar Parte
      </Button>
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
            <CadastroParteModal
              handleClose={handleClose}
              thunks={props.thunks}
              idContrato={props.idContrato}
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
