import api from "./api";
import { AxiosError } from "axios";

export const getGames = async () => {
  try {
    const response = await api.get("/data", { timeout: 5000 });
    const data = response.data;
    return data;
  } catch (error: unknown | AxiosError) {
    if (error instanceof AxiosError) {
      const statusCode = error.response?.status;
      if (
        statusCode === 500 ||
        statusCode === 502 ||
        statusCode === 503 ||
        statusCode === 504 ||
        statusCode === 507 ||
        statusCode === 508 ||
        statusCode === 509
      ) {
        return (window.location.href = "/error");
      }
      return (window.location.href = "/unknown-error");
    }
  }
};
