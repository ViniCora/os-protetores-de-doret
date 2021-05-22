import http from '../http-common.js';

const getMonstros = () => {
    return http.get(`/monstros/findAll`);
};

export default { getMonstros };