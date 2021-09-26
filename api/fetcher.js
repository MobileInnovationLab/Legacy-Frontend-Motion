import axios from "axios";
import { BASE_URL } from "./const";

const fetcher = axios.create({
  baseURL: BASE_URL,
});

export default fetcher;
