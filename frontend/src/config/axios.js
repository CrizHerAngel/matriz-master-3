import axios from 'axios';

const matrizAxios = axios.create({
  baseURL: 'http://localhost:5000',
});

export default matrizAxios;
