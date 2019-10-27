import React from "react";

import { FooterModal, Form } from "./styles";

import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";
import RaisedButton from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export default function CadastroContratosModalContent(props) {
  const { handleClose } = props;
  const [values, setValues] = React.useState({
    titulo: "",
    dataInicio: "",
    dataVencimento: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  function getFormValues() {
    props.thunks.postNewContrato(values);
    handleClose();
  }

  return (
    <div>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Cadastro de Contrato</Typography>
          </Toolbar>
        </AppBar>
        <Form>
          <TextField
            id="titulo"
            label="Título"
            value={values.nome}
            onChange={handleChange("titulo")}
            margin="normal"
            style={{ marginLeft: "3%", marginRight: "3%" }}
          />
          <TextField
            id="dataInicio"
            label="Data de Início"
            type="date"
            value={values.dataInicio}
            onChange={handleChange("dataInicio")}
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
            style={{ marginLeft: "3%", marginRight: "3%" }}
          />
          <TextField
            id="dataVencimento"
            label="Data de Vencimento"
            type="date"
            value={values.dataVencimento}
            onChange={handleChange("dataVencimento")}
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
            style={{ marginLeft: "3%", marginRight: "3%" }}
          />

          <div style={{ padding: "30px" }}>
            <p>Selecione o PDF/DOC do Contrato:</p>
            <RaisedButton>
              <input type="file" />
            </RaisedButton>
          </div>
        </Form>
      </div>
      <FooterModal>
        <Button
          variant="contained"
          style={{ margin: "15px" }}
          onClick={handleClose}
        >
          Cancelar
        </Button>
        <Button variant="contained" color="primary" onClick={getFormValues}>
          Salvar
        </Button>
      </FooterModal>
    </div>
  );
}
