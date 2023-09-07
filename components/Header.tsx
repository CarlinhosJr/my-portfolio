"use client";

// nextjs
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// api
import data from "../api/data.json";

// scroll header
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

//hamburger
import { Slant as Hamburger } from "hamburger-react";

//icon
import { GoDownload } from "react-icons/go";
import DownloadCV from "./DownloadCV";
import { getDataJson } from "@/utils/api-helpers";



export default function Header() {
  //get data
  const {header} = getDataJson()

  // handle menu scroll
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  //handle menu open
  const [open, setOpen] = useState<boolean>(false);

  //useEffect for freez body with menu open
  useEffect(() => {
    const body = document.querySelector("body") as HTMLElement | null;
    if (body) {
      if (open) {
        body.style.overflowY = "hidden";
      } else {
        body.style.overflowY = "visible";
      }
    }
  }, [open]);

  // CHANGE HEADER SCROLL
  useScrollPosition(
    ({ currPos }: { currPos: { x: number; y: number } }) => {
      setIsScrolled(currPos.y > 50);
    },
    [isScrolled],
    null || undefined,
    true
  );

  return (
    <>
      <header
        className={`h-[80px] 2xl:h-[100px] w-full z-50 transition-all ease-linear duration-200 bg-[#181818] ${
          isScrolled ? "sticky top-0" : ""
        }`}
      >
        <div className="screen h-full items-center justify-between flex">
          <div className="flex items-center gap-5">
            <Link href="/">
              <Image
                width={150}
                height={42}
                quality={100}
                priority
                src={header.logo.src}
                alt={header.logo.alt}
              />
            </Link>
            <div className="w-[3px] h-[33px] bg-[#D9D9D9] hidden md:block" />
           <div className="hidden md:block">
           <DownloadCV size_icon="lg"/>
           </div>
          </div>

          {/* NAVIGATE */}
          <nav className="items-center hidden gap-10 lg:flex">
            {header.navigation.map((item) => (
              <div key={item.label} className="group">
                <Link href={item.url} className="text-[#D9D9D9] font-medium">
                  {item.label}
                </Link>
                <div className=" group-hover:w-full w-0 h-[3px] bg-[#D9D9D9] ease-linear duration-200 rounded-xl" />
              </div>
            ))}
          </nav>

          {/* HAMBURGER */}
          <div className=" text-white lg:hidden  ">
            <Hamburger
              toggled={open}
              toggle={setOpen}
              duration={0.3}
              easing="ease-in"
              rounded
            />
          </div>
        </div>
      </header>

      {/* MOBILE */}
      <nav
        className={`w-full h-full py-20 lg:hidden  fixed top-0 bg-black/90 text-white  font-semibold z-40 ease-linear duration-500  ${
          open ? "translate-x-0" : "translate-x-[-120%]"
        } `}
      >
        <div className="flex flex-col justify-between gap-6 screen">
          {header.navigation.map((item) => (
            <Link
              href={item.url}
              key={item.label}
              className="text-[#D9D9D9] font-medium"
              onClick={() => setOpen(!open)}
            >
              {item.label}
            </Link>
          ))}
          <div className="block md:hidden">
           <DownloadCV size_icon="lg"/>
           </div>
        </div>
      </nav>
    </>
  );
}
