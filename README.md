Projeto criado com create-react-app.

Nesse projeto, é possível criar, consultar e excluir um contrato. Assim como visualizar várias partes pertencentes a tal contrato, assim como cadastrar uma nova parte.

Dependências: 
  - @material-ui/core;
  - @material-ui/icons;
  - axios;
  - redux;
  - react-redux;
  - redux-thunk;
  - styled-components;
  - json-server.
  
  
  
Para inicializar o projeto, deve-se entrar na pasta do projeto e rodar os seguintes comandos:
npm install
npm start


Feito isso, deve-se abrir outro terminal, ir na pasta do projeto/server-contratos e rodar o seguinte comando:
json-server --watch db.json --port 9090

O intuito de usar o json-server é sua facilidade em executar métodos POST, GET e DELETE sem necessitar de programar o backend, e ainda assim conseguir testar a aplicação com sucesso.
