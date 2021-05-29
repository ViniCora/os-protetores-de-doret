import http from '../http-common.js';

const getItens = () => {
    return http.get(`/itensSessao02/findAll`);
};

export default { getItens };