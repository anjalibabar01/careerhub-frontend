import axios from "axios";

const API_URL = "https://careerhub-backend-uk0z.onrender.com";

const authService = {
  login: async (loginData) => {
    const response = await axios.post(`${API_URL}/login`, loginData);
    return response.data;
  },

  register: async (registerData) => {
    const response = await axios.post(`${API_URL}/register`, registerData);
    return response.data;
  },
};

export default authService;