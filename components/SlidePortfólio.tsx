"use client";

//api
import data from "../api/data.json";

import React, { useState, useEffect } from "react";

import Image from "next/image";

import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import Link from "next/link";

export default function SlidePortfólio() {
  // get data
  const content = data.page.portfolio;

  const [startIndex, setStartIndex] = useState(0);

  const numImagesToShow = 2;

  const nextImages = () => {
    if (startIndex + numImagesToShow < content.projects.length) {
      setStartIndex((prevIndex) => prevIndex + numImagesToShow);
    }
  };

  const prevImages = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - numImagesToShow);
    }
  };

  //   useEffect(() => {
  //     const interval = setInterval(nextImages, 5000); // Trocar de imagem a cada 5 segundos

  //     return () => {
  //       clearInterval(interval);
  //     };
  //   },);

  return (
    <div
      className={`screen h-[90%] 2xl:h-[80%]  flex flex-col justify-between 2xl:justify-around my-auto`}
    >
      {content.projects
        .slice(startIndex, startIndex + numImagesToShow)
        .map((slide, index) => (
          <div
            key={slide.title}
            className={`flex items-end  gap-10 ${
              index !== 0 ? "transition-opacity ease-in-out duration-300" : ""
            }`}
          >
            <div className="text-[#D9D9D9] ">
              <div className="pl-2">
                <p className="font-bold">{slide.title}</p>
                <p className="text-sm font-light">{slide.sub_title}</p>
              </div>
              <div
                className={`relative w-[362px] h-[166px] mt-3 group overflow-hidden rounded-2xl flex items-center justify-center cursor-pointer`}
              >
                <Link href={slide.url}>
                  <Image
                    src={slide.photo.src || "/porfólio/projeto-exec.png"}
                    alt={slide.photo.alt}
                    fill
                    className="group-hover:scale-110 ease-linear duration-500"
                  />
                </Link>
                <div className="invisible group-hover:visible group-hover:bg-black/90 ease-linear duration-300 w-full h-full absolute" />
                <div className="invisible group-hover:visible text-[#D9D9D9] text-sm absolute uppercase font-semibold">
                  {slide.url
                    ? "Conheça o projeto 🔥"
                    : "Projeto em andamento 👨‍💻"}
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-[2px] h-[166px] bg-[#D9D9D9]" />
              <div className="flex items-center gap-8">
                {slide.techs.map((tech) => (
                  <div
                    key={tech.alt}
                    className={`relative w-[70px] h-[30px] md:w-[140px] md:h-[40px] grayscale hover:grayscale-0 ease-linear duration-150 brightness-200 hover:brightness-100 cursor-pointer`}
                  >
                    <Image
                      src={tech.src}
                      alt={tech.alt}
                      fill
                      quality={100}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      <div className="flex justify-end gap-4  text-[#D9D9D9]">
        <div>Clique para navegar</div>
        <div className="text-2xl">
          <button onClick={prevImages}>
            <MdOutlineArrowBackIos />
          </button>
          <button onClick={nextImages}>
            <MdOutlineArrowForwardIos />
          </button>
        </div>
      </div>
    </div>
  );
}
