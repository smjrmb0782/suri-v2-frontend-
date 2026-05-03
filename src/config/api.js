import axios from 'axios';

const API_BASE_URL = import.meta.env.DEV
  ? 'http://localhost:3000'
  : 'https://your-backend.vercel.app';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Automatically attach Firebase auth token to every request
api.interceptors.request.use(async (config) => {
  try {
    const { auth } = await import('./firebase');
    const user = auth.currentUser;
    if (user) {
      const token = await user.getIdToken();
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (error) {
    console.error('Auth token error:', error);
  }
  return config;
});

export default api;