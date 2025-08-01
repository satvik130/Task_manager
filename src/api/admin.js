import API from './axios'; // ✅ correct import now uses baseURL + withCredentials

// Get all users (admin only)
export const getAllUsers = async (token) => {
  return API.get(`/admin/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Delete a user by ID (admin only)
export const deleteUser = async (id, token) => {
  return API.delete(`/admin/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
