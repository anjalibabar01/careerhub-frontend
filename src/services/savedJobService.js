import axios from "axios";

const API_URL = "https://careerhub-backend-uk0z.onrender.com";

const getAuthHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

const saveJob = async (jobId) => {
  const email = localStorage.getItem("email");

  const response = await axios.post(
    `${API_URL}/saved-jobs/${jobId}?email=${email}`,
    {},
    getAuthHeader()
  );

  return response.data;
};

const getSavedJobs = async () => {
  const email = localStorage.getItem("email");

  const response = await axios.get(
    `${API_URL}/saved-jobs/my?email=${email}`,
    getAuthHeader()
  );

  return response.data;
};

const deleteSavedJob = async (id) => {
  const response = await axios.delete(
    `${API_URL}/saved-jobs/${id}`,
    getAuthHeader()
  );

  return response.data;
};

export default {
  saveJob,
  getSavedJobs,
  deleteSavedJob,
};