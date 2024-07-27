// src/apiService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api'; // Adjust the URL as needed


const getSheetsData = () => {
  return axios.get(`${API_BASE_URL}/sheets`);
};

const getStringData = () => {
    return axios.get(`${API_BASE_URL}/string`);
  };

export { getSheetsData };
export { getStringData };
