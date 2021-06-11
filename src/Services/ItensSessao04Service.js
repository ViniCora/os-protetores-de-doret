import http from '../http-common.js';

const getItens = () => {
    return http.get(`/itensSessao04/findAll`);
};

export default { getItens };