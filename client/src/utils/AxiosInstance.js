import axios from "axios";

export const axioscall = axios.create({
  baseURL: "https://notify-me-mern-app-backend.vercel.app/api/",
});
