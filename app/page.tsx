import Image from "next/image";

import { getDataJson } from "../utils/api-helpers";
import ButtonContact from "@/components/ButtonContact";

import { BsSendFill } from "react-icons/bs";
import Link from "next/link";
import DownloadCV from "@/components/DownloadCV";
import SlidePortfólio from "@/components/portfólio/SlidePortfólio";
import SlideMobile from "@/components/portfólio/SlideMobile";

export default function Home() {
  const { saudacoes, portfolio, tecnologias, novidades, contato } =
    getDataJson();

  return (
    <main>
      <section
        className="relative flex flex-col md:flex-row  md:items-center h-screen"
        id="inicio"
      >
        <div className="relative w-full h-[400px] block md:hidden">
          <Image
            src={saudacoes.photo_mobile.src}
            alt={saudacoes.photo.alt}
            priority
            quality={100}
            fill
          />
        </div>
        <div className="w-full h-4 bg-gradient-to-r from-[#210130] to-[#004475] block md:hidden" />

        <div className="w-[90%] md:w-full h-[300px] 3xl:h-[400px] flex flex-col md:bg-[#0A0A0A] py-6 md:py-0 border-e border-b border-[#004475]  rounded-br-lg md:border-none">
          <div className="screen  text-[#D9D9D9] mt-8 md:my-auto">
            <h1 className="font-bold text-2xl md:text-3xl 2xl:text-4xl">
              {saudacoes.title}
            </h1>
            <h2 className=" md:text-lg lg:text-xl">{saudacoes.sub_title}</h2>
            <p className=" md:w-[325px] mt-4 text-xs md:text-sm lg:text-base ">
              {saudacoes.about_me}
            </p>
            <ButtonContact />
          </div>
          <div className="w-full h-4 bg-gradient-to-r from-[#210130] to-[#004475] hidden md:block" />
        </div>

        <div className="absolute w-[40%] h-[50%] lg:h-[60%] xl:w-[30%]  xl:h-[80%] 3xl:h-[80%] right-0 hidden md:block">
          <Image
            src={saudacoes.photo.src}
            alt={saudacoes.photo.alt}
            priority
            quality={100}
            fill
          />
        </div>
      </section>


      <section className="relative my-20 h-[60dvh] lg:h-[80vh] xl:h-screen flex ">
        <div className="absolute  w-full h-full -z-10">
          <Image src={portfolio.photo.src} alt={portfolio.photo.alt} fill className="" />
        </div>

        <SlidePortfólio/>
        <SlideMobile/>
      </section>

      <section
        className="relative h-[80vh] my-20 md:mt-0 scroll-my-40"
        id="techs"
      >
        <div className="screen pt-10 md:pt-[100px]">
          <p className="md:w-[450px] text-2xl md:text-[40px] text-[#D9D9D9] font-bold leading-[50px]">
            {tecnologias.title}
          </p>
          <div className="xl:w-[80%] 2xl:w-[60%] mt-20 md:mt-[100px] grid grid-cols-3  lg:grid-cols-5 gap-6  ">
            {tecnologias.logo.map((logo) => (
              <div
                key={logo.alt}
                className=" relative w-[70px] h-[30px] md:w-[140px] md:h-[40px] xl:grayscale hover:grayscale-0 ease-linear duration-150 xl:brightness-200 hover:brightness-100 cursor-pointer"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  quality={100}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 w-full h-full  -z-10">
          <Image
            src={tecnologias.photo.src}
            alt={tecnologias.photo.alt}
            priority
            quality={100}
            fill
          />
        </div>
      </section>


      <section className="relative h-[40vh] lg:h-screen flex items-center justify-end  mt-20 md:mt-0">
        <div className="screen lg:flex lg:items-end  lg:justify-end lg:border border-[#004475] rounded-2xl py-20 h-[70%] 2xl:h-[60%]">
          <p className="w-[70%] md:w-1/2 lg:w-[450px] text-2xl md:text-3xl lg:text-[40px] text-[#D9D9D9] font-bold md:leading-[50px]">
            {novidades.text}
          </p>
        </div>
        <div className="absolute  w-full h-full 2xl:h-[80%] -z-10">
          <Image
            src={novidades.photo.src}
            alt={novidades.photo.alt}
            priority
            quality={100}
            fill
          />
        </div>
      </section>

      <section
        className="relative py-20  text-[#D9D9D9] scroll-my-52"
        id="contato"
      >
        <div className="screen flex flex-col md:items-center">
          <div className=" w-[138px] h-[45px] flex justify-center items-center gap-2 bg-[#210130] rounded-2xl font-semibold ">
            <span> {contato.text_button}</span>
            <span>📫</span>
          </div>
          <div className=" 2xl:w-[30%] mt-6">
            <p className="w-[75%] md:w-[390px] md:mx-auto  md:text-center text-xl md:text-4xl  font-extrabold">
              {contato.title}
            </p>
            <div className="flex flex-col lg:flex-row md:items-center gap-10 justify-center mt-8 md:mt-16 ">
              {/* <ButtonContact /> */}
              <Link
                href="mailto:luizgraziosi@hotmail.com"
                target="_blank"
                className=" flex flex-col md:justify-center md:items-center hover:text-gray-500 ease-out duration-300"
              >
                <i className="text-lg">
                  <BsSendFill />
                </i>
                <span>Email:</span>
                <span>luizgraziosi@hotmail.com</span>
              </Link>
            </div>
          </div>
          <div className="mt-8 md:mt-20 lg:mt-28 text-3xl">
            <DownloadCV size_text="2xl" size_icon="2xl" />
          </div>
        </div>
      </section>
    </main>
  );
}
