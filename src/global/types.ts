import { colors } from "src/global/colors";

export type Color = keyof typeof colors;

export type Category = {
  id: number;
  title: string;
  color: Color;
};

export type Point = {
  id: number;
  rating: number;
  coordinates: number[];
  offset: number;
  name: string;
  category: Category;
};

export type Review = {
  text: string;
  id: number;
  author: string;
  point_id: number;
};

export type Photo = {
  url: string;
  main: boolean;
  id: number;
  point_id: number;
};

export type PointInfo = {
  rating: number;
  description: string;
  comments: Review[];
  photos: Photo[];
  main_photo: Photo[];
};
