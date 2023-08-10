import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.clarifai.com',
  headers: {
    Authorization: 'Key 67dea09f15c04923b865bcf1db7048eb',
  },
});
