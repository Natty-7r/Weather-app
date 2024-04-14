import React from "react";
import CurrentWeatherDetailCardColumn from "./current-weather-detail-card-column";

function CurrentWeatherDetailCard({ data }: { data: any }) {
  return (
    <div className="bg-[#a0a6b419] text-white px-4 sm:px-6 md:px-8 lg:px-10 py-4 mb-8">
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-between gap-2 sm:gap-4 md:gap-6 lg:gap-8">
        <CurrentWeatherDetailCardColumn title={"E"} value={"11KM/H"} />
        <CurrentWeatherDetailCardColumn
          title={"Humidity"}
          value={data.main.humidity + "%"}
        />
        <CurrentWeatherDetailCardColumn
          title={"Wind"}
          value={data.wind.speed + "KM/H"}
        />
        <CurrentWeatherDetailCardColumn
          title={"Feels Like"}
          value={data.main.feels_like + "°"}
        />
        <CurrentWeatherDetailCardColumn
          title={"Visibility"}
          value={Number(data.visibility) / 1000 + "km"}
        />

        {/* <CurrentWeatherDetailCardColumn
              title={"Precipitation"}
            value={"0.00mm"}
           /> */}
        <CurrentWeatherDetailCardColumn
          title={"Temp Max"}
          value={data.main.temp_max + "°"}
        />
        <CurrentWeatherDetailCardColumn
          title={"Temp Min"}
          value={data.main.temp_min + "°"}
        />
        <CurrentWeatherDetailCardColumn
          title={"Pressure"}
          value={data.main.pressure + "hPa"}
        />
      </div>
    </div>
  );
}

export default CurrentWeatherDetailCard;
