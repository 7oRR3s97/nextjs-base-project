import axios from 'axios';
import { QueryClient } from 'react-query';

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

const queryClient = new QueryClient();

const api = axios.create({
  baseURL: API_URL,
});

const apiWithAuth = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: API_KEY as string,
  },
});

export { api, apiWithAuth, queryClient };
