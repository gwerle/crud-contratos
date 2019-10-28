import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
});

export default function PartesTable(props) {
  const classes = useStyles();
  if (props.listPartes && props.listPartes.length > 0) {
    return (
      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="right">Sobrenome</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">CPF</TableCell>
              <TableCell align="right">Telefone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.listPartes.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.nome}
                </TableCell>
                <TableCell align="right">{row.sobrenome}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.cpf}</TableCell>
                <TableCell align="right">{row.telefone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  } else {
    return <div>Nenhum dado cadastrado!</div>;
  }
}

PartesTable.defaultProps = {
  listPartes: null
};

PartesTable.propTypes = {
  listPartes: PropTypes.arrayOf(PropTypes.any)
};
