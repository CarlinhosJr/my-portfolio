//next
import Image from "next/image";
import Link from "next/link";

//api
import data from "../api/data.json";

//icon
import { FaHeart } from "react-icons/fa";

//interface
interface footer {
  icon: Array<{
    link: string
    src: string;
    alt: string;
  }>;

  logo: {
    src: string;
    alt: string;
  };
  copyright: string;
}

export default function Footer() {
  // get data
  const content: footer = data.footer;

  // get year
  const ano_atual = new Date().getFullYear();

  return (
    <footer className="bg-[#181818] h-[240px]  flex">
      <div className="screen my-auto space-y-10 ">

        {/* ICONS SOCIAIS */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 ">
            {content.icon.map((items) => (
              <Link key={items.alt} target="_blank" href={''}>
              <Image
                key={items.alt}
                width={25}
                height={25}
                quality={100}
                priority
                src={items.src}
                alt={items.alt}
                className="hover:text-gray-400  lg:grayscale hover:grayscale-0 ease-linear duration-300 brightness-125 hover:brightness-100"
              /></Link>
            ))}
          </div>

          <Link href="/" className="hidden md:block grayscale brightness-200 hover:grayscale-0 hover:brightness-110 ease-linear duration-300">
            <Image
              width={50}
              height={50}
              quality={100}
              priority
              src={content.logo.src}
              alt={content.logo.alt}
            />
          </Link>
        </div>

        {/* BAR */}
        <div className="w-full h-[1px] bg-[#D9D9D9] " />

        {/* COPYRIGHT */}
        <div className="flex flex-col md:flex-row text-sm md:text-base md:items-center justify-between gap-4 md:gap-0 text-[#D9D9D9]">
          <p>
            {content.copyright} {ano_atual}
          </p>
          <p className="flex items-center gap-2">
            Feito com muito{" "}
            <i className="animate-heartbeat">
              <FaHeart />
            </i>{" "}
            por mim mesmo
          </p>
        </div>
      </div>
    </footer>
  );
}
