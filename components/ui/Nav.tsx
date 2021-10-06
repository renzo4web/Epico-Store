import Link from "next/link";
import React from "react";
import ToggleThemeBtn from "./ToggleThemeBtn";

const Nav = () => {
  return (
    <header className="border-b sticky top-0 z-20 dark:bg-orange">
      <nav className="flex items-center justify-between max-w-6xl pt-4 pb-2 px-4 mx-auto lg:max-w-screen-xl">
        <Link href="/" passHref>
          <a className="cursor-pointer">
            <span className="text-lg pt-1 font-bold dark:text-white">
              Epic Store
            </span>
          </a>
        </Link>
        <a className="text-md font-bold cursor-pointer dark:text-white">Cart</a>
        <ToggleThemeBtn />
      </nav>
    </header>
  );
};

export default Nav;
