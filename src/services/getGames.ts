import { GameTypes } from "../types/GameTypes";
import api from "./api";

export const getGames = async () => {
  const response = await api.get<GameTypes[]>("/data");
  const data = response.data;
  return data;
};
