import http from '../http-common.js';

const getItens = () => {
    return http.get(`/itensSessao08/findAll`);
};

export default { getItens };