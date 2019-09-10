import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001/"
})

const apis = {
    loadEstado: () => api.get("estado"),
    loadUsuario: () => api.get("usuario")
}

export default apis;