"use client";

import Image from "next/image";
import Link from "next/link";
import LinkButton from "../LinkButton";

import { useState, useEffect } from "react";
const Header = () => {
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scroll]);

  return (
    <div
      className={`flex justify-center fixed items-center w-full z-100 transition-all duration-300  md:top-0 bg-black/95 bottom-0 h-fit  py-2
    ${scroll ? " md:bg-black/95 md:p-4" : " md:bg-transparent md:p-8"}`}
    >
      <div
        className={`flex  items-center w-full max-w-screen-2xl justify-between `}
      >
        <Link
          href={"/"}
          className={`  w-full items-center focus:outline-none hidden md:flex  `}
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="object-contain mr-4"
          />
          <h1 className="text-4xl font-bold">theMovies</h1>
        </Link>
        <div className="flex items-center focus:outline-none w-full md:justify-end justify-around">
          <LinkButton text="Home" href="/" />
          <LinkButton text="Movies" href="/movie" />
          <LinkButton text="TV Series" href="/tv" />
        </div>
      </div>
    </div>
  );
};
export default Header;
