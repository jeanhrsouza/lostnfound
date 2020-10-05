import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost/lostnfound/controller/php/"
});

export default api;
