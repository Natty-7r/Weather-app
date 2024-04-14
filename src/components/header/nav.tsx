"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { MobileNavLink, NavLink } from "../link/nav.-link";

const links = ["home", "about", "contact"];

export const MobileNavBar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="block sm:hidden">
      <Sheet onOpenChange={setOpen} open={isOpen}>
        <SheetTrigger>
          <Menu className="" />
        </SheetTrigger>
        <SheetContent>
          <nav className="flex flex-col items-center p-12 gap-4 capitalize ">
            {links.map((linkText, index) => (
              <MobileNavLink
                setOpen={setOpen}
                key={index}
                linkText={linkText}
              />
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};
export const NavBar = () => {
  return (
    <nav className="flex items-center gap-4 lg:gap-4 capitalize hidden md:flex">
      {links.map((linkText, index) => (
        <NavLink key={index} linkText={linkText} />
      ))}
    </nav>
  );
};
