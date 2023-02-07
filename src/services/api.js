import axios from "axios";

export const Api = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
  timeOut: 5000,
});
