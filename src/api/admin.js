import API from './axios'; 


export const getAllUsers = async (token) => {
  return API.get(`/admin/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};


export const deleteUser = async (id, token) => {
  return API.delete(`/admin/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
