import { Loader } from "lucide-react";

export const OnPageLoader = ({ loaderText }: PageLoaderProps) => {
  return (
    <div className="p-12 flex flex-col items-center  gap-5 my-24">
      <Loader className="animate-spin" />
      <p className="tracking-wide text-secondary-foreground/80 ">
        {loaderText}
      </p>
    </div>
  );
};
