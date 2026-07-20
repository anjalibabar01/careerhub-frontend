import api from "./api";

const applicationService = {

  applyJob: async (jobId, applicationData) => {
    const response = await api.post(`/apply/${jobId}`, applicationData);
    return response.data;
  },

  getMyApplications: async (email) => {
    const response = await api.get(`/applications/my?email=${email}`);
    return response.data;
  },

  uploadResume: async (applicationId, file) => {

    const formData = new FormData();

    formData.append("file", file);

    const response = await api.post(
      `/applications/${applicationId}/resume`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  },

  getAllApplications: async () => {
  const response = await api.get("/applications");
  return response.data;
},

updateStatus: async (id, status) => {
  const response = await api.put(
    `/applications/${id}/status?status=${status}`
  );
  return response.data;
},

downloadResume: async (id) => {

  const response = await api.get(
    `/applications/${id}/resume`,
    {
      responseType: "blob",
    }
  );

  const url = window.URL.createObjectURL(
    new Blob([response.data])
  );

  const link = document.createElement("a");

  link.href = url;

  link.setAttribute("download", "resume.pdf");

  document.body.appendChild(link);

  link.click();

  link.remove();

},

};

export default applicationService;