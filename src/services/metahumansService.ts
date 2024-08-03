import { api } from "../api/api";
import { Superhero } from "../types/superhero";

export const fetchMetahumans = async (): Promise<Superhero[]> => {
  const response = await api.get<Superhero[]>("/metahumans");
  return response.data;
};
