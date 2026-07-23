import axios from "axios";

const API_URL = "https://careerhub-backend-uk0z.onrender.com";

const getAuthHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

const dashboardService = {
  getRecruiterDashboard: async () => {
    const response = await axios.get(
      `${API_URL}/dashboard/recruiter`,
      getAuthHeader()
    );

    return response.data;
  },

  getJobSeekerDashboard: async () => {
    const email = localStorage.getItem("email");

    const response = await axios.get(
      `${API_URL}/dashboard/jobseeker?email=${email}`,
      getAuthHeader()
    );

    return response.data;
  },
};

export default dashboardService;