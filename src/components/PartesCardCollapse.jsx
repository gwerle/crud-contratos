import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DeleteIcon from "@material-ui/icons/Delete";
import PictureAsPdf from "@material-ui/icons/PictureAsPdf";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import PartesCardContent from "./PartesCardContent";

import moment from "moment";

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
  },
  button: {
    margin: "0px 0px 0px auto"
  }
}));

export default function PartesCardCollapse(props) {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleClickPrimaryAction = id => {
    props.thunks.deleteContrato(id);
  };

  const showDocument = base64PDF => {
    let pdfWindow = window.open("");
    pdfWindow.document.write(
      `<iframe width='100%' height='100%' src=${encodeURI(base64PDF)}></iframe>`
    );
  };

  const getListPartes = id => {
    props.thunks.getPartes(id);
  };

  const handleChange = (expanded, panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  moment.locale("pt-br");

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
                {`Data de Início: ${moment(item.dataInicio).format("L")}`}
              </Typography>
              <Typography className={classes.heading}>
                {`Data de Vencimento: ${moment(item.dataVencimento).format(
                  "L"
                )}`}
              </Typography>
              {item.documento && (
                <Tooltip title="Visualizar PDF">
                  <IconButton
                    aria-label="visualizar"
                    onClick={() => showDocument(item.documento)}
                  >
                    <PictureAsPdf />
                  </IconButton>
                </Tooltip>
              )}
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
