"use client";
import { useContext, useMemo } from "react";
import { useCallback } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CustomeTableHead } from "./table-head";
import { AppContext } from "@/utils/context/app-context";
import { filterCities } from "@/utils/helper/city";
import { useRouter } from "next/navigation";
import Link from "next/link";

const CitiesTable = ({ cities }: CityTableProps) => {
  const router = useRouter();
  const { sortOption, sortType, filterKey, filterOption, selectCity } =
    useContext(AppContext);

  const citiesSorter = useCallback(
    (cityA: City, cityB: City) => {
      if (!sortOption) return 0;
      if (cityA[sortOption] > cityB[sortOption])
        return sortType == "ascending" ? 1 : -1;
      if (cityA[sortOption] < cityB[sortOption])
        return sortType == "ascending" ? -1 : 1;
      return 0;
    },
    [sortOption, sortType]
  );

  const sortyCities = useCallback(
    (cities: City[]) => {
      if (!sortType) return cities;
      return [...cities].sort(citiesSorter);
    },
    [sortType, citiesSorter]
  );

  const filterOrSortCities = () => {
    if (sortOption && sortType) {
      if (filterOption)
        return sortyCities(filterCities(cities, filterOption, filterKey));
      return sortyCities(cities);
    }
    if (filterOption) return filterCities(cities, filterOption, filterKey);
    return cities;
  };
  const citiesFiltered = useMemo(filterOrSortCities, [
    cities,
    sortyCities,
    sortOption,
    sortType,
    filterOption,
    filterKey,
  ]);

  return (
    <Table className="w-full relative hideable_thin_scrollbar">
      <TableHeader className="flex  py-3 sticky top-0 bg-card">
        <TableRow className="w-full h-auto flex items-center  justify-between ">
          <CustomeTableHead columnName="name" columnDisplayName="city " />
          <CustomeTableHead
            columnName="cou_name_en"
            columnDisplayName="country"
          />
          <CustomeTableHead columnName="timezone" />
        </TableRow>
      </TableHeader>
      <TableBody className="hidden_scrollbar">
        {citiesFiltered.map((city) => (
          <TableRow
            key={city.name}
            className="w-full h-auto flex items-center  justify-between text-xs sm:base  "
          >
            <TableCell
              className="font-medium  w-[30%] hover:font-bold cursor-pointer"
              onClick={() => selectCity(city)}
            >
              <Link
                href={`/weather?lat=${city.coordinates.lat}&long=${city.coordinates.lon}`}
              >
                {city.name}
              </Link>
            </TableCell>
            <TableCell className="  w-[30%]">{city.cou_name_en}</TableCell>
            <TableCell className="  w-[30%]">{city.timezone}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CitiesTable;
