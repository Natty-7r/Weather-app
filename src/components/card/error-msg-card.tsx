import { TriangleAlert } from "lucide-react";
import { Button } from "../ui/button";

export const PageErrorMsg = ({ errorMsg, action }: PageErrorMsgCardProps) => {
  return (
    <div className="flex flex-col gap-8 items-center p-12 my-24">
      <TriangleAlert className="text-red-600 w-8 h-8 md:w-12 md:h-12" />
      <p className="">{errorMsg}</p>
      {action && (
        <Button
          className="capitalize tracking-widse"
          onClick={() => action.actionFunction()}
        >
          {action.actionText}
        </Button>
      )}
    </div>
  );
};
