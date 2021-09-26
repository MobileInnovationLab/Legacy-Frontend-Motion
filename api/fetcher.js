import axios from "axios";

const BASE_URL = "https://kurniadiwijaya.my.id/api/";

const fetcher = axios.create({
  baseURL: BASE_URL,
});

export default fetcher;
