type CityColumnTypes = "cou_name_en" | "name" | "timezone";

type CitiesTableProps = {
  data: any[];
  columnDefinition: MRT_ColumnDef<any>[];
  ToolBarAction?: ReactElement;
  RowActions?: React.ComponentType<React.ComponentProps<any>>[];
  enableRowNumbers?: boolean;
};

type CityTableProps = { cities: City[] };

type CitySearchbarProps = { cities: City[] };

type CityTableHeadProps = {
  columnName: CityColumnTypes;
  columnDisplayName?: string;
};

type CityTableHeadSearchbarProps = {
  visible: boolean;
  columnName: FilterOption;
  setFilter: Function;
};

type CityTableHeadDropDownProps = {
  TriggerComponent: React.ComponentType<React.ComponentProps<any>>;
  columnName: FilterOption;
  filter: boolean;
  setFilter: Function;
};

type PageErrorMsgCardProps = {
  errorMsg: string;
  action?: { actionFunction: Function; actionText: string };
};

type PageLoaderProps = { loaderText: string };
