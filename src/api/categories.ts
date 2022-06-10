import { get } from "src/api/index";

export const getCategories = () => get("category");
export const getCategoryPoints = (id: number | string) => get(`category/${id}`);
