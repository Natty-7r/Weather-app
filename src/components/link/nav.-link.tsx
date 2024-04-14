import Link from "next/link";

export const MobileNavLink = ({
  setOpen,
  linkText,
}: {
  setOpen: Function;
  linkText: string;
}) => {
  return (
    <Link
      onClick={() => setOpen(false)}
      href={"#"}
      className="lg:text-base transistion-all duration-300 hover:translate-x-[25%] hover:black/60 tracking-wide   "
    >
      {linkText}
    </Link>
  );
};

export const NavLink = ({ linkText }: { linkText: string }) => {
  return (
    <Link
      href={"#"}
      className="lg:text-base hover:text-white/60 tracking-wide "
    >
      {linkText}
    </Link>
  );
};
