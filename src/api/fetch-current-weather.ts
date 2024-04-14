import axios from "axios";
import { CURRENT_WEATHER_URL, api_key } from "./api";

const fetchCurrentWeatherData = async (lat: any, lon: any) => {
  try {
    console.log(api_key);
    const response = await axios.get(
      `${CURRENT_WEATHER_URL}?lat=${lat}&lon=${lon}&appid=${api_key}`
    );
    console.log(response);
    return response.data;
  } catch (error: any) {
    console.error("Error:", error);
    const errorMsg = error.response
      ? error.response.data.message
      : error.message;
    throw new Error(errorMsg, { cause: error });
  }
};

export default fetchCurrentWeatherData;
