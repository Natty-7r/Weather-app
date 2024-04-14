"use client";

import { Input } from "../ui/input";
import { Card } from "../ui/card";
import { useContext, useEffect, useMemo, useState } from "react";
import { AppContext } from "@/utils/context/app-context";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const CitiesSearchBar = ({ cities }: CitySearchbarProps) => {
  const { selectCity } = useContext(AppContext);
  const [searchKey, setSearchKey] = useState("");
  const [showResult, setShow] = useState(false);

  const searchRelatedCities = useMemo(() => {
    if (searchKey.trim() == "") return [];
    return cities.filter((city) =>
      city.name.toLocaleLowerCase().includes(searchKey.toLocaleLowerCase())
    );
  }, [searchKey, cities]);

  useEffect(() => {
    window.addEventListener("click", () => {
      setShow(false);
    });
  }, []);
  return (
    <div
      className="flex items-center h-8 border-b-2  relative rounded-full mb-12  w-[90%] sm:w-1/2 sticky top-0 z-[5]"
      onClick={(e) => e.stopPropagation()}
    >
      <Input
        onFocus={() => setShow(true)}
        onChange={(e) => {
          setShow(true);
          setSearchKey(e.target.value);
        }}
        className={cn(
          " pl-4 md:pl-8 md:text-lg  py-5 md:py-6 absolute top-0 left-0 w-full h-full rounded-full ",
          "focus-visible:ring-0  focus-visible:ring-offset-2"
        )}
        placeholder={`Search city`}
      />
      {showResult && searchRelatedCities.length > 0 && (
        <Card className="absolute w-auto top-[200%] max-h-[50vh] overflow-auto w-full shadow-lg p-5  flex flex-col gap-2">
          {searchRelatedCities
            .concat(searchRelatedCities)
            .map((city: City, index) => (
              <Link
                key={index}
                onClick={() => {
                  setSearchKey("");
                  selectCity(city);
                }}
                className="hover:bg-secondary/50 py-1 hover:font-bold cursor-pointer"
                href={`/weather?lat=${city.coordinates.lat}&long=${city.coordinates.lon}`}
              >
                {city.name}
              </Link>
            ))}
        </Card>
      )}
    </div>
  );
};

export default CitiesSearchBar;
