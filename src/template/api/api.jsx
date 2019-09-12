import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001/"
})


const apis = {
    loadEstado: () => api.get("estado"),
    loadUsuario: () => api.get("usuario"),
    saveUsuario: (user) => api.post("usuario", user),
    updateUsuario: (user) => api.put("usuario/"+ user.id, user),
    deleteUsuario : (user) => api.delete("usuario/" + user.id),
    loadNomeUsuario : (user) => api.get("usuario?nome=" + user )
}

export default apis;