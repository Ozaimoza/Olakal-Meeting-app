import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav
      className="flex flex-between fixed z-50 w-full bg-dark-1 px-4 py-4 lg:px-10
    "
    >
      <Link href="/" className="flex items-center gap-1">
        <Image
          src={"/icons/logo.svg"}
          width={40}
          height={40}
          alt="Olakal Logo"
          className=" max-sm:size-10"
        />
        <p className="text-white font-extrabold text-[26px] max-sm:hidden">
          Olakal
        </p>
      </Link>

      <div className="flex-between gap-5">
        {/* User management */}
        <SignedIn>
          <UserButton />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
