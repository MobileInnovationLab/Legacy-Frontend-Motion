import axios from 'axios';

const BASE_URL = 'https://api.motionlab.masuk.web.id/api';

const fetcher = axios.create({
  baseURL: BASE_URL,
});

export default fetcher;