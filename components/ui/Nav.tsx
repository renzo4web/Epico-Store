import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartOpen } from "../../actions/checkout";
import { RootState } from "../../reducers/rootReducer";
import ToggleThemeBtn from "./ToggleThemeBtn";

const Nav = () => {
  const dispatch = useDispatch();
  const { cart, cartOpen } = useSelector((state: RootState) => state.checkout);

  return (
    <header className="sticky top-0 z-20  bg-purple-50 dark:bg-purple-900">
      <nav className="flex items-center justify-between max-w-6xl pt-4 pb-2 px-4 mx-auto lg:max-w-screen-xl">
        <Link href="/" passHref>
          <a className="cursor-pointer">
            <span className="text-lg pt-1 font-bold dark:text-white">
              Epic Store
            </span>
          </a>
        </Link>
        <a
          onClick={() => dispatch(toggleCartOpen(!cartOpen))}
          className="text-md font-bold cursor-pointer dark:text-white"
        >
          Cart({cart.length})
        </a>
        <ToggleThemeBtn />
      </nav>
    </header>
  );
};

export default Nav;

