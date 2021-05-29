import http from '../http-common.js';

const getAtributes = (name) => {
    return http.get(`/atributes?nome=${name}`);
};

const getPlayers = () => {
    return http.get(`/players`);
};

const getPlayerImage = (fileName) => {
    return http.get(`/uploads/${fileName}`);
};

const createPlayer = (data) => {
    return http.post(`/players`, data);
}

const updateVida = (id, data) => {
    return http.put(`/atributes/vida/${id}`, data);
}

const updateMostrarTela = (id, data) => {
    return http.put(`/atributes/mostrarTela/${id}`, data);
}

const updatePontosAdicionar = (id, data) => {
    return http.put(`/atributes/pontosAdicionar/${id}`, data);
}

const updateForca = (id, data) => {
    return http.put(`/atributes/forca/${id}`, data);
}

const updateDestreza = (id, data) => {
    return http.put(`/atributes/destreza/${id}`, data);
}

const updateCarisma = (id, data) => {
    return http.put(`/atributes/carisma/${id}`, data);
}

const updateInteligencia = (id, data) => {
    return http.put(`/atributes/inteligencia/${id}`, data);
}

const updateConstituicao = (id, data) => {
    return http.put(`/atributes/constituicao/${id}`, data);
}

const updateMira = (id, data) => {
    return http.put(`/atributes/mira/${id}`, data);
}

const updateOficio = (id, data) => {
    return http.put(`/atributes/oficio/${id}`, data);
}

const updatePercepcao = (id, data) => {
    return http.put(`/atributes/percepcao/${id}`, data);
}

const updatePoder = (id, data) => {
    return http.put(`/atributes/poder/${id}`, data);
}

const updateSorte = (id, data) => {
    return http.put(`/atributes/poder/${id}`, data);
}

const updateLutar = (id, data) => {
    return http.put(`/atributes/lutar/${id}`, data);
}

const updatePrimeirosSocorros = (id, data) => {
    return http.put(`/atributes/primeirosSocorros/${id}`, data);
}

const updateSanidade = (id, data) => {
    return http.put(`/atributes/sanidade/${id}`, data);
}

const updateVidaTotal = (id, data) => {
    return http.put(`/atributes/vidaTotal/${id}`, data);
}

const updateMunicaoAtual = (id, data) => {
    return http.put(`/atributes/municaoAtual/${id}`, data);
}

const updateMunicaoMaxima = (id, data) => {
    return http.put(`/atributes/municaoMaxima/${id}`, data);
}

const updateArmaDado = (id, data) => {
    return http.put(`/atributes/armaDado/${id}`, data);
}

const updateSanidadeMaxima = (id, data) => {
    return http.put(`/atributes/sanidadeMaxima/${id}`, data);
}

export default { getAtributes, getPlayers, getPlayerImage, createPlayer, updateVida, updateMostrarTela, updatePontosAdicionar, 
    updateForca, updateDestreza, updateCarisma, updateInteligencia, updateConstituicao, updateMira, updateOficio, updatePercepcao,
    updatePoder, updateSorte, updateLutar, updatePrimeirosSocorros, updateSanidade, updateVidaTotal, updateMunicaoAtual, updateMunicaoMaxima, updateArmaDado, updateSanidadeMaxima};