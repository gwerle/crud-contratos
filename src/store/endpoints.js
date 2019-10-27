import axios from "axios";
const CONSTAINT = "http://localhost:9090";
const PATH_CONTRATOS = `${CONSTAINT}/contratos`;

export function getContratos() {
  return axios.get(`${PATH_CONTRATOS}`);
}

export function postContrato(data) {
  return axios.post(`${PATH_CONTRATOS}`, data);
}

export function deleteContrato(idContrato) {
  return axios.delete(`${PATH_CONTRATOS}/${idContrato}`);
}

export function getPartes(idContrato) {
  return axios.get(`${PATH_CONTRATOS}/partes/?idContrato_like=${idContrato}`);
}

export function postPartes(data) {
  return axios.post(`${PATH_CONTRATOS}/partes`, data);
}
