import api from "./api";

export const getProfile = async () => {
  const response = await api.get("/profile");
  return response.data;
};

export const updateProfile = async (profileData) => {
  const response = await api.put("/profile", profileData);
  return response.data;
};

export const uploadCompanyLogo = async (file) => {
  const formData = new FormData();

  formData.append("file", file);

  const response = await api.post(
    "/profile/logo",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};