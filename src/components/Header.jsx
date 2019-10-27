import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import ListContratos from "./ListContratosContainer";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginLeft: "10%",
    marginTop: "2.5%",
    width: "80%"
  },
  title: {
    flexGrow: 1
  }
});

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Listagem de Contratos
          </Typography>
        </Toolbar>
      </AppBar>
      <ListContratos />
    </div>
  );
}
