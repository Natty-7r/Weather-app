import formatDate from "@/utils/constant/date";
import React from "react";
import { ImageCard } from "./image-card";
import { getImageUrl } from "@/utils/constant/image";
import setWeatherImage from "@/utils/constant/set-weather-image";

function WeatherForecastCard({ data }: { data: any }) {
  const imageUrl = setWeatherImage(data?.weather[0].main);
  return (
    <div className="bg-[#a0a6b419] p-4 rounded-md">
      <p className="text-white text-center">{formatDate(data.dt_txt)}</p>
      <div className="flex justify-center">
        <ImageCard src={imageUrl} className=" w-20 h-20" />
      </div>
      <div className="flex justify-center">
        <p className="text-white">{data.main.temp + "°"}</p>
      </div>
      <div className="flex justify-center">
        <p className="text-white">{data.weather[0].description}</p>
      </div>
    </div>
  );
}

export default WeatherForecastCard;
