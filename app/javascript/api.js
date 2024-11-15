import axios from 'axios';

const createApiInstance = (baseURL, token) => {
  return axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getAdminApi = (token) => createApiInstance('http://admin.com:3000/api/v1/admin', token);
