import axios from "axios";
import { CITIES_API_URL } from "./api";
export const fetchCities = async () => {
  try {
    const sendReq = await axios.get(CITIES_API_URL);
    return sendReq.data;
  } catch (error: any) {
    console.error("Error:", error);
    const errorMsg = error.response
      ? error.response.data.message
      : error.message;
    throw new Error(errorMsg, { cause: error });
  }
};
