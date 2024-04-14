"use client";

import { useRouter, useSearchParams } from "next/navigation";

import React, { use, useContext, useEffect, useState } from "react";
import formatDate from "@/utils/constant/date";
import CurrentWeatherDetailCard from "@/components/card/current-weather-detail-card";
import WeatherForecastCard from "@/components/card/weather-forecast-card";
import { AppContext } from "@/utils/context/app-context";
import {
  useFetchCurrentWeatherQuery,
  useForecastWeatherQuery,
} from "@/hooks/api/api-hooks";
import { OnPageLoader } from "@/components/loader/on-page-loader";
import { PageErrorMsg } from "@/components/card/error-msg-card";
import { ImageCard } from "@/components/card/image-card";
import setBackgroundColor from "@/utils/constant/set-background-color";
import setWeatherImage from "@/utils/constant/set-weather-image";

function WeatherPage() {
  const param = useSearchParams();
  const lat = param.get("lat");
  const lon = param.get("long");
  const date = formatDate(Date.now() as any);
  const router = useRouter();
  const { data, error, isLoading, isError } = useFetchCurrentWeatherQuery();

  const {
    data: forecastData,
    isLoading: isForecastLoading,
    isError: isForecastError,
    error: forecastError,
  } = useForecastWeatherQuery();

  const { city } = useContext(AppContext);

  if (isLoading || isForecastLoading)
    return (
      <OnPageLoader
        loaderText="
  fetching weather data ..."
      />
    );

  if (isError || isForecastError)
    return (
      <PageErrorMsg
        errorMsg={
          error?.message ||
          forecastError?.message ||
          '"Unable to fetch weaather data '
        }
        action={{
          actionText: "reload",
          actionFunction: () => {
            router.refresh();
          },
        }}
      />
    );

  const backgroundColor = setBackgroundColor(data?.weather[0].main);
  const imgSrc = setWeatherImage(data?.weather[0].main);

  if (data && forecastData)
    return (
      <div className={`w-full ${backgroundColor}`}>
        <h1 className="text-white p-2 md:p-4  lg:p-6  lg:px-32 mt-4">
          {city?.name}
        </h1>
        <div className="w-[70%] h-auto mt-10 mx-auto rounded-md py-[24px] px-[30px]">
          {/* Time  */}
          <div className="flex justify-end text-[#ffffff8c] text-sm font-light w-full">
            <p>{date}</p>
          </div>

          {/* Current weather details  */}
          <div className="flex  justify-center gap-3 mb-8">
            <ImageCard src={imgSrc} className=" w-20 h-20" />
            <div className="flex flex-col text-white ">
              <h1 className="text-[52px]">
                {data?.main.temp}
                {"°"}
              </h1>
              <p className="text-[22px]">{data?.weather[0].main}</p>
            </div>
          </div>

          {/* description */}
          <div className="text-sm text-center text-white  mb-8">
            {data.weather[0].description}
          </div>
          {/* boxes  */}
          {/* <WeatherForecastCard data={data} /> */}
          <CurrentWeatherDetailCard data={data} />

          {/* Call 5 day / 3 hour forecast data Forecast *} */}
          <h1 className="text-white text-center text-lg mb-4">
            5 Day Forecast
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {forecastData.map((item: any, index: any) => (
              <WeatherForecastCard key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    );
}

export default WeatherPage;
