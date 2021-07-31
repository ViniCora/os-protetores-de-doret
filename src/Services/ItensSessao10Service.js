import http from '../http-common.js';

const getItens = () => {
    return http.get(`/itensSessao10/findAll`);
};

export default { getItens };