import React from "react";

import { FooterModalPartes, Form } from "./styles";

import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export default function CadastroParteModal(props) {
  const [values, setValues] = React.useState({
    idContrato: props.idContrato,
    nome: "",
    sobrenome: "",
    email: "",
    cpf: "",
    telefone: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  function getFormValues() {
    props.thunks.postNewParte(values);
    props.handleClose();
  }

  return (
    <div>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Cadastro de Parte</Typography>
          </Toolbar>
        </AppBar>
        <Form>
          <TextField
            id="nome"
            label="Nome"
            value={values.nome}
            onChange={handleChange("nome")}
            margin="normal"
            variant="outlined"
            style={{ marginLeft: "1%", marginRight: "1%" }}
          />
          <TextField
            id="sobrenome"
            label="Sobrenome"
            value={values.sobrenome}
            onChange={handleChange("sobrenome")}
            margin="normal"
            variant="outlined"
            style={{ marginLeft: "1%", marginRight: "1%" }}
          />
          <TextField
            id="outlined-email-input"
            label="Email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange("email")}
            margin="normal"
            variant="outlined"
            style={{ marginLeft: "1%", marginRight: "1%" }}
          />
          <TextField
            id="cpf"
            label="CPF"
            value={values.cpf}
            onChange={handleChange("cpf")}
            margin="normal"
            variant="outlined"
            style={{ marginLeft: "1%", marginRight: "1%" }}
          />
          <TextField
            id="telefone"
            label="Telefone"
            value={values.telefone}
            onChange={handleChange("telefone")}
            margin="normal"
            variant="outlined"
            style={{ marginLeft: "1%", marginRight: "1%" }}
          />
        </Form>
      </div>
      <FooterModalPartes>
        <Button
          variant="contained"
          style={{ margin: "15px" }}
          onClick={props.handleClose}
        >
          Cancelar
        </Button>
        <Button variant="contained" color="primary" onClick={getFormValues}>
          Salvar
        </Button>
      </FooterModalPartes>
    </div>
  );
}
