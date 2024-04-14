import { createContext } from "react";

// Create Context

export const actions = {
  SORTTYPE: "SORTTYPE" as Action,
  SORTOPTION: "SORTOPTION" as Action,
  FILTEROPTION: "FILTEROPTION" as Action,
  FILTERKEY: "FILTERKEY" as Action,
  CITY: "CITY" as Action,
};
const { CITY, SORTOPTION, SORTTYPE, FILTERKEY, FILTEROPTION } = actions;

// Initial Value
export const initialState: AppStateType = {
  city: null,
  filterKey: "",
  filterOption: undefined,
  sortOption: undefined,
  sortType: undefined,

  selectCity: (_) => {},
  setFilterKey: (_) => {},
  setFilterOption: (_) => {},
  setSortOption: (_) => {},
  setSortType: (_) => {},
};

// Reducer
export const reducer = (
  state: AppStateType,
  action: ActionType
): AppStateType => {
  const { type, payload } = action;
  switch (type) {
    case CITY:
      return {
        ...state,
        city: payload,
      };
    case FILTEROPTION:
      return {
        ...state,
        filterOption: payload as FilterOption,
      };
    case FILTERKEY:
      return {
        ...state,
        filterKey: payload as string,
      };
    case SORTOPTION:
      return {
        ...state,
        sortOption: payload as SortOption,
      };
    case SORTTYPE:
      return {
        ...state,
        sortType: payload as SortType,
      };
    default:
      return state;
  }
};

export const AppContext = createContext<AppStateType>(initialState);
