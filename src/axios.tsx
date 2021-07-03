import axios from "axios";

const instance = axios.create({
  baseURL: "https://apidojo-yahoo-finance-v1.p.rapidapi.com",
});

export default instance;
