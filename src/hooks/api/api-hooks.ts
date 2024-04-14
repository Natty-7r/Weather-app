import { fetchCities } from "@/api/fetch-cities";
import fetchCurrentWeatherData from "@/api/fetch-current-weather";
import fetchForecastData from "@/api/fetch-forecast-weather";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export const useFetchCiteisQuery = () =>
  useQuery({
    queryKey: ["Fetch Cities"],
    queryFn: fetchCities,
  });

export const useFetchCurrentWeatherQuery = () => {
  const param = useSearchParams();
  const lat = param.get("lat");
  const lon = param.get("long");
  return useQuery({
    queryKey: ["Current Weather"],
    queryFn: () => fetchCurrentWeatherData(lat, lon),
  });
};

export const useForecastWeatherQuery = () => {
  const param = useSearchParams();
  const lat = param.get("lat");
  const lon = param.get("long");
  return useQuery({
    queryKey: ["forecast Weather"],
    queryFn: () => fetchForecastData(lat, lon),
  });
};
