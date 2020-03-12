import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:3000',
});

export default api;

// Emulator Genymotion
// 'http://10.0.3.2:3000',

// Emulator Android Studio
// 'http://10.0.2.2:3000',

// 10.0.1.1:8081

// http://localhost:8081
