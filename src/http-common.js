import axios from 'axios';

//Define a URL base da origem para consumo do servico
export default axios.create({
  //baseURL: 'https://os-protetores-de-doret-api.herokuapp.com/',
  baseURL: 'http://localhost:8080/',
  headers: {
    'Content-type': 'application/json',
  },
});