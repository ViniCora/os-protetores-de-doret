import http from '../http-common.js';

const getAtributes = (name) => {
    return http.get(`/npcs?nome=${name}`);
};

const getNPC = () => {
    return http.get(`/npcs`);
};

const getNPCImage = (fileName) => {
    return http.get(`/uploads/${fileName}`);
};

const createNPC = (data) => {
    return http.post(`/npc`, data);
}

const updateVida = (id, data) => {
    return http.put(`/npc/vida/${id}`, data);
}

const updateMostrarTela = (id, data) => {
    return http.put(`/npc/mostrarTela/${id}`, data);
}

const updatePontosAdicionar = (id, data) => {
    return http.put(`/npc/pontosAdicionar/${id}`, data);
}

const updateForca = (id, data) => {
    return http.put(`/npc/forca/${id}`, data);
}

const updateDestreza = (id, data) => {
    return http.put(`/npc/destreza/${id}`, data);
}

const updateCarisma = (id, data) => {
    return http.put(`/npc/carisma/${id}`, data);
}

const updateInteligencia = (id, data) => {
    return http.put(`/npc/inteligencia/${id}`, data);
}

const updateConstituicao = (id, data) => {
    return http.put(`/npc/constituicao/${id}`, data);
}

const updateMira = (id, data) => {
    return http.put(`/npc/mira/${id}`, data);
}

const updateOficio = (id, data) => {
    return http.put(`/npc/oficio/${id}`, data);
}

const updatePercepcao = (id, data) => {
    return http.put(`/npc/percepcao/${id}`, data);
}

const updatePoder = (id, data) => {
    return http.put(`/npc/poder/${id}`, data);
}

const updateSorte = (id, data) => {
    return http.put(`/npc/poder/${id}`, data);
}

const updateLutar = (id, data) => {
    return http.put(`/npc/lutar/${id}`, data);
}

const updatePrimeirosSocorros = (id, data) => {
    return http.put(`/npc/primeirosSocorros/${id}`, data);
}

const updateSanidade = (id, data) => {
    return http.put(`/npc/sanidade/${id}`, data);
}

const updateVidaTotal = (id, data) => {
    return http.put(`/npc/vidaTotal/${id}`, data);
}

const updateMunicaoAtual = (id, data) => {
    return http.put(`/npc/municaoAtual/${id}`, data);
}

const updateMunicaoMaxima = (id, data) => {
    return http.put(`/npc/municaoMaxima/${id}`, data);
}

const updateArmaDado = (id, data) => {
    return http.put(`/npc/armaDado/${id}`, data);
}

const updateSanidadeMaxima = (id, data) => {
    return http.put(`/npc/sanidadeMaxima/${id}`, data);
}

const updateArmas = (id, data) => {
    return http.put(`/npc/armas/${id}`, data);
}

const updateInventario = (id, data) => {
    return http.put(`/npc/inventario/${id}`, data);
}

export default { getAtributes, getNPC, getNPCImage, createNPC, updateVida, updateMostrarTela, updatePontosAdicionar, 
    updateForca, updateDestreza, updateCarisma, updateInteligencia, updateConstituicao, updateMira, updateOficio, updatePercepcao, updateArmas, updateInventario,
    updatePoder, updateSorte, updateLutar, updatePrimeirosSocorros, updateSanidade, updateVidaTotal, updateMunicaoAtual, updateMunicaoMaxima, updateArmaDado, updateSanidadeMaxima};