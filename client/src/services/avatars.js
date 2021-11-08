import api from "./api-config"


export const getAllAvatars = async () => {
  const resp = await api.get('/avatars');
  return resp.data;
};

export const getOneAvatar = async (id) => {
  const resp = await api.get(`/avatars/${id}`);
  return resp.data;
};

export const postAvatar = async (avatarData) => {
  const resp = await api.post('/avatars', { avatar: avatarData });
  return resp.data;
};

export const putAvatar = async (id, avatarData) => {
  const resp = await api.put(`/avatars/${id}`, { avatar: avatarData });
  return resp.data;
};

export const deleteAvatar = async (id) => {
  const resp = await api.delete(`/avatars/${id}`);
  return resp;
};