"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="w-full bg-[#F9FAFB]">
      <div className="flex flex-col items-center bg-white px-4 py-[10%] text-[#374151]">
        <h2 className="my-4 text-2xl  font-[900] capitalize tracking-tight md:text-[50px] ">
          404 Page Not Found
        </h2>
        <p className="text-md">Could not find requested resource</p>

        <Link href="/" className="flex items-center font-medium text-[#312e81]">
          &larr; Go back
        </Link>
      </div>
    </section>
  );
}
