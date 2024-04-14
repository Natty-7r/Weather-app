import { X } from "lucide-react";
import { Input } from "../ui/input";
import { useContext } from "react";
import { AppContext } from "@/utils/context/app-context";

const TableHeadSearchbar = ({
  visible,
  columnName,
  setFilter,
}: CityTableHeadSearchbarProps) => {
  const { setFilterKey, setFilterOption, filterOption } =
    useContext(AppContext);
  if (!visible) return null;
  return (
    <div className="flex items-center  border-b-2 bg-card ">
      <Input
        onFocus={() => {
          setFilterOption(columnName);
        }}
        onChange={(e) => setFilterKey(e.target.value)}
        className="border-none focus:outline-none focus:shadow-none  focus-visible:ring-0 focus-visible:ring-none focus-visible:ring-offset-0"
        placeholder={`Filter by ${columnName}`}
      />
      <X
        className=""
        onClick={(_) => {
          if (filterOption == columnName) setFilterKey("");
          setFilter(false);
        }}
      />
    </div>
  );
};

export default TableHeadSearchbar;
