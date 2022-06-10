import axios from "axios";
import { backAPI } from "src/api/constants";

export * from "src/api/constants";
export * from "src/api/points";
export * from "src/api/categories";

axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";

export const get = (path: string) => {
  return axios.get(`${backAPI}/${path}`).then((res) => res.data);
};

export const post = (path: string, body?: any) => {
  return axios.post(`${backAPI}/${path}`, body).then((res) => res.data);
};
