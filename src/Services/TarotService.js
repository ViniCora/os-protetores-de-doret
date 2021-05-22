import http from '../http-common.js';

const getTarot = () => {
    return http.get(`/tarot/findAll`);
};

export default { getTarot };