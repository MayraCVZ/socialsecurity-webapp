import axios from "axios";
const USUARIOS_API_BASE_URL = "http://localhost:3000/usuarios";
class usuarioService {
    getUsuarios() {
        return axios.get(USUARIOS_API_BASE_URL);
    }
    createUsuario(usuario) {
        return axios.post(USUARIOS_API_BASE_URL, usuario);
    }
    getUsuarioById(usuarioId) {
        return axios.get(USUARIOS_API_BASE_URL + "/" + usuarioId);
    }
    getUsuarioByUserLogin(username, password) {
        return axios.get(USUARIOS_API_BASE_URL + "/" + username + "/" + password);
    }
    updateUsuario(usuario, usuarioId) {
        return axios.put(USUARIOS_API_BASE_URL + "/" + usuarioId, usuario);
    }
    deleteUsuario(usuarioId) {
        return axios.delete(USUARIOS_API_BASE_URL + "/" + usuarioId);
    }
}
export default new usuarioService();
