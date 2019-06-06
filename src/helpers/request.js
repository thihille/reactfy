import axios from "axios";

const request = axios.create({
  baseURL: process.env.REACT_APP_SPOTIFY_API_BASE_URL,
});

let authorization = JSON.parse(localStorage.getItem('authorization'));
request.defaults.headers.common["Authorization"] = `Bearer ${authorization.access_token}`;

export default request;