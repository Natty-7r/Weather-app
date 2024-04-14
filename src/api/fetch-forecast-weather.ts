import axios from "axios";
import { FORECAST_WEATHER_URL, api_key } from "./api";

const fetchForecastData = async (lat: any, lon: any) => {
  try {
    const response = await axios.get(
      `${FORECAST_WEATHER_URL}?lat=${lat}&lon=${lon}&appid=${api_key}`
    );
    console.log(response);

    // Filter the data to include only forecasts for morning (9:00 AM) and afternoon (3:00 PM)
    const filteredData = response.data.list.filter((item: any) => {
      const date = new Date(item.dt_txt);
      return date.getHours() === 9 || date.getHours() === 15;
    });

    return filteredData;
  } catch (error: any) {
    console.error("Error:", error);
    const errorMsg = error.response
      ? error.response.data.message
      : error.message;
    throw new Error(errorMsg, { cause: error });
  }
};

export default fetchForecastData;
