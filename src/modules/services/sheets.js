const { default: axios } = require('axios');

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

const createSheets = async (data) => {
  const result = await api.post('/esportes', data);
  return result.data;
};

export default createSheets;
