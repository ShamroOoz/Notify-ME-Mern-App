import axios from "axios";

export const axioscall = axios.create({
  baseURL: "http://localhost:5000/api/",
});
