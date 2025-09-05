"use client";

import Image from "next/image";
import Link from "next/link";
import LinkButton from "../LinkButton";

import { useState, useEffect } from "react";
const Header = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  const [resize, setResizeWidth] = useState<number | null>(null);
  console.log(resize);
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

  useEffect(() => {
    const handleResize = () => {
      setResizeWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [resize]);
  return (
    <div
      className={`flex justify-center fixed items-center w-full z-100 transition-all duration-300
    ${
      resize != null && resize < 763
        ? "bottom-0 bg-black/95 p-4"
        : scroll
        ? "top-0 bg-black/95 p-4"
        : "top-0 bg-transparent p-8"
    }`}
    >
      <div
        className={`flex  items-center w-full max-w-screen-2xl justify-between ${
          resize != null && resize < 763 ? "justify-center" : "justify-between"
        }`}
      >
        <Link
          href={"/"}
          className={`flex  w-full items-center focus:outline-none ${
            resize != null && resize < 763 ? "hidden" : "flex"
          } `}
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
        <div className="flex items-center focus:outline-none justify-between">
          <LinkButton text="Home" href="/" />
          <LinkButton text="Movies" href="/movie" />
          <LinkButton text="TV Series" href="/tv" />
        </div>
      </div>
    </div>
  );
};
export default Header;
