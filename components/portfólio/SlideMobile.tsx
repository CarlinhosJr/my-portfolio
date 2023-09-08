"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

//api
import data from "../../api/data.json";

//slide
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

//icons
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos,
   } from "react-icons/md";


export default function SlideMobile() {

  //get data
  const content = data.page.portfolio;

  //config slide
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
  });

  // show overlay
  const [showOverlay, setShowOverlay] = useState<boolean>(true);


  return (
    <div className="w-full h-[80%] my-auto flex flex-col md:justify-center items-center lg:hidden">
      <div
        ref={sliderRef}
        className="keen-slider"
        onClick={() => setShowOverlay(!showOverlay)}
      >
        {content.projects.map((slide, index) => (
          <div
            key={slide.title}
            className="keen-slider__slide number-slide1 flex flex-col justify-center items-center gap-4"
          >
            <div className="relative screen h-[150px] md:w-[60%] md:h-[250px] overflow-hidden">
              <Image
                src={slide.photo.src || "/porfólio/projeto-exec.png"}
                alt={slide.photo.alt}
                fill
                quality={100}
                className="-z-10 rounded-2xl"
              />
              <div
                className={`${
                  showOverlay ? "translate-y-[120%]" : ""
                } w-full h-full flex flex-col items-center justify-center ease-linear duration-700  absolute gap-4 bg-black/90 rounded-2xl`}
              >
                <div className="flex justify-center gap-4">
                  {slide.techs.map((tech) => (
                    <div key={tech.alt} className="relative w-[20px] h-[20px] md:w-[30px] md:h-[30px]">
                      <Image
                        src={tech.src_mobile}
                        alt={tech.alt}
                        fill
                        quality={100}
                        className=""
                      />
                    </div>
                  ))}
                </div>
                <div className=" text-[#D9D9D9] text-xs md:text-sm  uppercase font-semibold mt-4 flex items-center gap-4">
                  <Link href={slide.url} target="_blank">
                    {slide.url
                      ? "Conheça o projeto 🔥"
                      : "Projeto em andamento 👨‍💻"}
                  </Link>
                  {slide.url && (
                    <i className="md:text-lg animate-pingarrow">
                      <MdOutlineArrowForwardIos />
                    </i>
                  )}
                </div>
              </div>
            </div>
            <div className="screen md:w-[60%] text-[#D9D9D9] ">
              <p className="font-bold text-sm">{slide.title}</p>
              <p className="text-xs md:text-sm font-light">{slide.design.by} <Link href={slide.design.url}>{slide.design.property}</Link></p>
            </div>
          </div>
        ))}
      </div>

      {/* BUTTONS NAVIGATION */}
      <div className="mt-20 flex items-center gap-6">
        <button
          className=""
          onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
         
        >
          <i className=" text-3xl md:text-4xl  shadow-2xl text-[#004475] hover:text-[#D9D9D9] transition-colors duration-200">
           
            < MdOutlineArrowBackIos/>
          </i>
        </button>

        <button
          className=""
          onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
          
        >
          <i className="text-3xl md:text-4xl  shadow-2xl text-[#004475] hover:text-[#D9D9D9] transition-colors duration-200">
          <MdOutlineArrowForwardIos />
          </i>
        </button>
      </div>

    </div>
  );
}
