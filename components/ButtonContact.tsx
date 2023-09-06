//next
import Link from "next/link";

//icon
import { BsWhatsapp } from "react-icons/bs";

export default function ButtonContact() {
  return (
    <Link
      href="https://wa.me//5542998361758?"
      target="_blank"
      className="group relative w-[180px] h-[50px] md:w-[246px] md:h-[65px] mt-9 flex items-center border rounded-3xl text-sm md:text-base transition-all"
    >
      <span className="w-0  group-hover:w-full group-hover:h-full bg-[#D9D9D9] ease-linear duration-[400ms] rounded-3xl" />
      <span className="group-hover:text-[#0A0A0A] absolute w-full flex justify-center items-center gap-4">
        <i className="text-lg md:text-2xl">
          <BsWhatsapp />
        </i>
        Entre em contato
      </span>
    </Link>
  );
}
