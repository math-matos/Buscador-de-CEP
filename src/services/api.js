import axios from "axios";

// https://viacep.com.br/ws/12244885/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;