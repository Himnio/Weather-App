import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoSunny } from "react-icons/io5";
import { TbCurrentLocation } from "react-icons/tb";
import Searchbox from "./Searchbox";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="shadow-sm sticky top-0 left-0 z-50 bg-white">
      <div className="h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto">
        <p className="flex justify-center items-center gap-2">
            <h2 className="text-gray-500 text-3xl">Weather</h2>
            <IoSunny className="text-3xl text-yellow-400 mt-1"/>
        </p>
        <section className="gap-2 flex items-center">
        <TbCurrentLocation className="text-2xl text-gray-500 hover:opacity-90 hover:text-green-500 cursor-pointer"/>
        <CiLocationOn className="text-3xl text-gray-500"/>
        <p className="text-slate-900/80 text-sm">India</p>
        <div>
            {/*Search bar components */}
            <Searchbox/>
        </div>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
