import http from '../http-common.js';

const getItens = () => {
    return http.get(`/itensSessao01/findAll`);
};

export default { getItens };