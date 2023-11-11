import axios from "axios";
const EXPEDIENTE_API_BASE_URL = "http://localhost:3000/expedientes";
class ExpedienteService {
    getExpedientes() {
        return axios.get(EXPEDIENTE_API_BASE_URL);
    }
    createExpediente(expediente) {
        return axios.post(EXPEDIENTE_API_BASE_URL, expediente);
    }
    getExpedienteById(expedienteId) {
        return axios.get(EXPEDIENTE_API_BASE_URL + "/" + expedienteId);
    }
    getExpedienteByIdAsunto(expedienteIdAsunto) {
        return axios.get(EXPEDIENTE_API_BASE_URL + "-by-asunto/" + expedienteIdAsunto);
    }
    updateExpediente(expediente, expedienteId) {
        return axios.put(EXPEDIENTE_API_BASE_URL + "/" + expedienteId, expediente);
    }
    deleteExpediente(expedienteId) {
        return axios.delete(EXPEDIENTE_API_BASE_URL + "/" + expedienteId);
    }
}
export default new ExpedienteService();
