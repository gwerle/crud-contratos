import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import PartesCardContent from "./PartesCardContent";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    padding: "12px 15px"
  },
  float: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    float: "right"
  }
}));

export default function PartesCardCollapse(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    props.hideSnackbar();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickPrimaryAction = item => {
    props.thunks.deleteContrato(item.id);
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            {`Título: ${props.item.titulo}`}
          </Typography>
          <Typography className={classes.heading}>
            {`Data de Início: ${props.item.dataInicio}`}
          </Typography>
          <Typography className={classes.heading}>
            {`Data de Vencimento: ${props.item.dataVencimento}`}
          </Typography>
          <Tooltip title="Excluir Contrato">
            <IconButton
              className={classes.button}
              aria-label="delete"
              onClick={handleClickOpen}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <PartesCardContent />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirmação"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Tem certeza que deseja excluir?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Não
          </Button>
          <Button
            onClick={() => {
              handleClickPrimaryAction(props.item);
            }}
            color="primary"
            autoFocus
          >
            Sim
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
