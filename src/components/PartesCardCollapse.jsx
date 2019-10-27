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

  const [expanded, setExpanded] = React.useState(false);

  const handleClickPrimaryAction = id => {
    props.thunks.deleteContrato(id);
  };

  const getListPartes = id => {
    props.thunks.getPartes(id);
  };

  const handleChange = (expanded, panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return props.listContratos.map((item, index) => {
    if (item.ativo) {
      return (
        <div
          className={classes.root}
          onClick={() => getListPartes(item.id)}
          key={index}
        >
          <ExpansionPanel
            expanded={expanded === item.id}
            onChange={handleChange(expanded, item.id)}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                {`Título: ${item.titulo}`}
              </Typography>
              <Typography className={classes.heading}>
                {`Data de Início: ${item.dataInicio}`}
              </Typography>
              <Typography className={classes.heading}>
                {`Data de Vencimento: ${item.dataVencimento}`}
              </Typography>
              <Tooltip title="Excluir Contrato">
                <IconButton
                  className={classes.button}
                  aria-label="delete"
                  onClick={() => handleClickPrimaryAction(item.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <PartesCardContent
                thunks={props.thunks}
                idContrato={item.id}
                listPartes={props.listPartes}
                hideSnackbar={props.hideSnackbar}
              />
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      );
    } else {
      return null;
    }
  });
}
