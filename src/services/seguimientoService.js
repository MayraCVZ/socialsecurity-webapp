import axios from "axios";
const SEGUIMIENTO_API_BASE_URL = "http://localhost:3000/seguimientos";
class SeguimientoService {
    getSeguimientos() {
        return axios.get(SEGUIMIENTO_API_BASE_URL);
    }
    createSeguimiento(seguimiento) {
        return axios.post(SEGUIMIENTO_API_BASE_URL, seguimiento);
    }
    getSeguimientoById(seguimientoId) {
        return axios.get(SEGUIMIENTO_API_BASE_URL + "/" + seguimientoId);
    }
    getSeguimientoByIdAsunto(seguimientoIdAsunto) {
        return axios.get(SEGUIMIENTO_API_BASE_URL + "-by-asunto/" + seguimientoIdAsunto);
    }
    updateSeguimiento(seguimiento, seguimientoId) {
        return axios.put(SEGUIMIENTO_API_BASE_URL + "/" + seguimientoId, seguimiento);
    }
    deleteSeguimiento(seguimientoId) {
        return axios.delete(SEGUIMIENTO_API_BASE_URL + "/" + seguimientoId);
    }
}
export default new SeguimientoService();
