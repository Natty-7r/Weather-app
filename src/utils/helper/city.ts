export const filterCities = (
  cities: City[],
  filterOption: FilterOption,
  filterKey: string
) => {
  if (!filterOption) return cities;
  return cities.filter((city: City) =>
    city[filterOption]
      .toLocaleLowerCase()
      .includes(filterKey.toLocaleLowerCase())
  );
};
