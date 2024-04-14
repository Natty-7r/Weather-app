import { TableHead } from "@/components/ui/table";
import { EllipsisVertical } from "lucide-react";
import TableHeaderCellDropDownMenu from "../drop-down/table-head-drop-down";
import TableHeadSearchbar from "../search-bar/table-head-search-bar";
import { useContext, useState } from "react";
import { AppContext } from "@/utils/context/app-context";

export function CustomeTableHead({
  columnName,
  columnDisplayName,
}: CityTableHeadProps) {
  const [filter, setFilter] = useState(false);
  const {} = useContext(AppContext);
  return (
    <TableHead className=" items-start h-full flex flex-col text-blue-950 font-bold  w-[30%] text-sm sm:base">
      <div className="capitalize  flex items-center gap-2  ">
        {columnDisplayName || columnName}
        <TableHeaderCellDropDownMenu
          filter={filter}
          setFilter={setFilter}
          TriggerComponent={EllipsisVertical}
          columnName={columnName}
        />
      </div>
      <TableHeadSearchbar
        columnName={columnName}
        visible={filter}
        setFilter={setFilter}
      />
    </TableHead>
  );
}
