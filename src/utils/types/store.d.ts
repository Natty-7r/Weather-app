type Action = "SORTTYPE" | "SORTOPTION" | "FILTEROPTION" | "FILTERKEY" | "CITY";

type FilterOption = CityColumnTypes | undefined;

type SortOption = CityColumnTypes | undefined;

type SortType = "ascending" | "descending" | undefined;

type ActionType = { type: Action; payload: any };

type AppStateType = {
  sortOption: SortOption;
  filterOption: FilterOption;
  sortType: SortType;
  filterKey: string;
  city: CityType | null;

  setSortOption: (sortOptoin: SortOption) => void;
  setSortType: (sortType: SortType) => void;
  setFilterOption: (filterOption: FilterOption) => void;
  setFilterKey: (filterKey: string) => void;
  selectCity: (city: CityType) => void;
};
