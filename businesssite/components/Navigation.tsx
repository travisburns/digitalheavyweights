"use client";
import { NavLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Transition from "./Transition";

const Navigation = () => {
  const [isRouting, setisRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    if (prevPath !== path) {
      setisRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setisRouting(false);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [isRouting]);
  return (
    <div
     
      className="absolute z-[50] bottom-1 w-[70%]  max-h-[3rem] rounded-[1rem] flex justify-between items-center border bg-black border-white px-2 py-[1rem] md:flex-col md:w-[7%] md:top-28 md:max-h-[10rem]  md:px-1 md:left-[0%] md:rounded-none"
      
    >

      {isRouting  && <Transition />}
      {NavLinks.map((nav) => (
        <Link key={nav.name} href={nav.link} className=" pl-3 sm:pl-10 min-w-[20%] w-[71%] md:pl-1">
          <div className="left-[15rem]">
          <nav.icon
            className={`w-[24px] h-[24px] ${
              path === nav.name ? "text-purple-800" : "text-white"
            }`}
          />
          </div>
          
        </Link>
      ))}
    </div>
  );
};

export default Navigation;