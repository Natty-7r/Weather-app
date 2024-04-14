import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { MobileNavBar, NavBar } from "./nav";

const MainHeader = () => {
  return (
    <header className=" w-full flex items-center justify-between  sticky top-0  bg-gradient-to-br from-blue-600 to-blue-800 text-white p-2 md:p-4  lg:p-6  lg:px-32 z-[6]">
      <div className="flex items-center gap-4 ">
        <Avatar>
          <AvatarImage src=""></AvatarImage>
          <AvatarFallback className="bg-card text-blue-800">SW</AvatarFallback>
        </Avatar>
        <Link href="/" className="font-bold capitalize lg:text-xl">
          some weather app
        </Link>
      </div>
      <MobileNavBar />
      <NavBar />
    </header>
  );
};

export default MainHeader;
