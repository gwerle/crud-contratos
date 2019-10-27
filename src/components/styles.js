import styled from "styled-components";

import Container from "@material-ui/core/Container";

export const ContainerWithoutPadding = styled(Container)`
  height: 100vh;
  width: 100%;
  margin: 0px;
  padding: 0px;
  border-style: solid;
  border-width: 0px 2px 2px 2px;
  border-color: #dbdbdb;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  max-width: none !important;
`;

export const FooterModal = styled.div`
  position: fixed;
  bottom: 22%;
  right: 22%;
`;

export const FooterModalPartes = styled.div`
  position: fixed;
  bottom: 22%;
  right: 20%;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;

  justify-content: flex-start;
  align-items: center;

  padding: 20px;
`;

export const EndRightDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
