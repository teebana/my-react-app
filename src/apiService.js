// src/apiService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api'; // Adjust the URL as needed


const getExampleData = () => {
  return axios.get(`${API_BASE_URL}/example`);
};


export { getExampleData };
