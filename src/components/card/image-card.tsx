import { cn } from "@/lib/utils";
import Image from "next/image";

export const ImageCard = ({
  src,
  className,
}: {
  src: string;
  className: string;
}) => {
  return (
    <div className={cn(className, "relative")}>
      <Image src={src} fill alt="" className="absolute" />
    </div>
  );
};
