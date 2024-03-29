import React from "react";
import PropTypes from "prop-types";

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
    dataVencimento: "",
    documento: "",
    ativo: true
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const getFormValues = () => {
    props.thunks.postNewContrato(values);
    handleClose();
  };

  const convertToBase64 = () => {
    const selectedFile = document.getElementById("inputFile").files;
    if (selectedFile.length > 0) {
      const fileToLoad = selectedFile[0];
      const fileReader = new FileReader();
      let base64;
      fileReader.onload = function(fileLoadedEvent) {
        base64 = fileLoadedEvent.target.result;
        setValues({ ...values, documento: base64 });
      };
      fileReader.readAsDataURL(fileToLoad);
    }
  };

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
            required
            id="titulo"
            label="Título"
            value={values.nome}
            onChange={handleChange("titulo")}
            margin="normal"
            variant="outlined"
            style={{ marginLeft: "1%", marginRight: "1%" }}
          />
          <TextField
            required
            id="dataInicio"
            label="Data de Início"
            type="date"
            value={values.dataInicio}
            onChange={handleChange("dataInicio")}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
            style={{ marginLeft: "1%", marginRight: "1%" }}
          />
          <TextField
            required
            id="dataVencimento"
            label="Data de Vencimento"
            type="date"
            value={values.dataVencimento}
            onChange={handleChange("dataVencimento")}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
            style={{ marginLeft: "1%", marginRight: "1%" }}
          />

          <div style={{ padding: "30px" }}>
            <p>Selecione o PDF/DOC do Contrato:</p>
            <RaisedButton>
              <input id="inputFile" type="file" onChange={convertToBase64} />
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

CadastroContratosModalContent.propTypes = {
  handleClose: PropTypes.func.isRequired,
  thunks: PropTypes.objectOf(PropTypes.any).isRequired
};
