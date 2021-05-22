import http from '../http-common.js';

const getPersonagens = () => {
    return http.get(`/personagens/findAll`);
};

export default { getPersonagens };