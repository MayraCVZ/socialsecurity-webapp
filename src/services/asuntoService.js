import axios from "axios";
const ASUNTO_API_BASE_URL = "http://localhost:3000/asuntos";
class AsuntoService {
    getAsuntos() {
        return axios.get(ASUNTO_API_BASE_URL);
    }
    createAsunto(asunto) {
        return axios.post(ASUNTO_API_BASE_URL, asunto);
    }
    getAsuntoById(asuntoId) {
        return axios.get(ASUNTO_API_BASE_URL + "/" + asuntoId);
    }
    updateAsunto(asunto, asuntoId) {
        return axios.put(ASUNTO_API_BASE_URL + "/" + asuntoId, asunto);
    }
    deleteAsunto(asuntoId) {
        return axios.delete(ASUNTO_API_BASE_URL + "/" + asuntoId);
    }
}
export default new AsuntoService();
