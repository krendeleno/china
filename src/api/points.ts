import { get, post } from "src/api/index";

export const getPoints = () => get("point");
export const getPointById = (id: number | string) => get(`point/${id}`);
export const likePoint = (id: number | string) => post(`point/${id}/like`);
export const dislikePoint = (id: number | string) =>
  post(`point/${id}/dislike`);
export const reviewPoint = (id: number | string, body: any) =>
  post(`point/${id}/comment`, body);
