import axios from "axios";
const AGENDA_API_BASE_URL = "http://localhost:3000/agenda";
class AgendaService {
    getAgendas() {
        return axios.get(AGENDA_API_BASE_URL);
    }
    createAgenda(agenda) {
        return axios.post(AGENDA_API_BASE_URL, agenda);
    }
    getAgendaById(agendaId) {
        return axios.get(AGENDA_API_BASE_URL + "/" + agendaId);
    }
    getAgendaByIdAsunto(agendaIdAsunto) {
        return axios.get(AGENDA_API_BASE_URL + "-by-asunto/" + agendaIdAsunto);
    }
    updateAgenda(agenda, agendaId) {
        return axios.put(AGENDA_API_BASE_URL + "/" + agendaId, agenda);
    }
    deleteAgenda(agendaId) {
        return axios.delete(AGENDA_API_BASE_URL + "/" + agendaId);
    }
}
export default new AgendaService();
