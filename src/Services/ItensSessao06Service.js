import http from '../http-common.js';

const getItens = () => {
    return http.get(`/itensSessao06/findAll`);
};

export default { getItens };