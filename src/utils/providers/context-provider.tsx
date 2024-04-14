"use client";
import { ReactNode, useCallback, useReducer } from "react";
import {
  initialState,
  AppContext,
  reducer,
  actions,
} from "../context/app-context";

const { CITY, SORTOPTION, SORTTYPE, FILTERKEY, FILTEROPTION } = actions;

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const selectCity = useCallback(
    (city: any) =>
      dispatch({
        type: CITY,
        payload: city,
      }),
    []
  );
  const setFilterKey = useCallback(
    (filterKey: string) =>
      dispatch({
        type: FILTERKEY,
        payload: filterKey,
      }),
    []
  );
  const setFilterOption = useCallback(
    (filterOption: FilterOption) =>
      dispatch({
        type: FILTEROPTION,
        payload: filterOption,
      }),
    []
  );
  const setSortOption = useCallback(
    (sortOption: SortOption) =>
      dispatch({
        type: SORTOPTION,
        payload: sortOption,
      }),
    []
  );
  const setSortType = useCallback(
    (sortType: any) =>
      dispatch({
        type: SORTTYPE,
        payload: sortType,
      }),
    []
  );

  const { city, filterKey, filterOption, sortOption, sortType } = state;
  return (
    <AppContext.Provider
      value={{
        city,
        sortOption,
        sortType,
        filterKey,
        filterOption,
        selectCity,
        setFilterKey,
        setFilterOption,
        setSortOption,
        setSortType,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
