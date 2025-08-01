import API from './axios';

const getAuthHeader = () => {
  const token = localStorage.getItem('token'); // Or sessionStorage if you're using that
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const createTask = (data) => API.post('/tasks', data, getAuthHeader());
export const getAllTasks = () => API.get('/tasks', getAuthHeader());
export const updateTask = (id, data) => API.put(`/tasks/${id}`, data, getAuthHeader());
export const deleteTask = (id) => API.delete(`/tasks/${id}`, getAuthHeader());
