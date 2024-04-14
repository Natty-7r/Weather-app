import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AppContext } from "@/utils/context/app-context";
import { ArrowDownAZIcon, ArrowUpAz, ListFilter } from "lucide-react";
import { useContext } from "react";

const TableHeadDropDownMenu = ({
  TriggerComponent,
  columnName,
  filter,
  setFilter,
}: CityTableHeadDropDownProps) => {
  const { setSortOption, setSortType } = useContext(AppContext);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <TriggerComponent className="w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-auto">
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => {
              setSortOption(columnName);
              setSortType("ascending");
            }}
          >
            Sort by {columnName} ascending
            <DropdownMenuShortcut>
              <ArrowDownAZIcon />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setSortOption(columnName);
              setSortType("descending");
            }}
          >
            Sort by {columnName} descending
            <DropdownMenuShortcut>
              <ArrowUpAz />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => setFilter(!filter)}>
          {!filter ? ` Filter by ${columnName}` : `remove filter`}
          <DropdownMenuShortcut>
            <ListFilter />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TableHeadDropDownMenu;
