import API from './axios';

export const loginUser = (credentials) => API.post('/users/login', credentials);
export const registerUser = (data) => API.post('/users/register', data);
export const getUserProfile = () => API.get('/users/profile');
export const logoutUser = () => API.post('/users/logout');
