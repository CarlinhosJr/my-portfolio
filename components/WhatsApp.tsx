import Link from "next/link";

// icons
import { BsWhatsapp } from "react-icons/bs";

export default function WhatsApp() {
  return (
    <>
      <Link
        href={"https://wa.me/5542998361758"}
        target="_blank"
        id="whatsapp_icon"
        rel="noopener noreferrer"
        className="fixed z-[120] flex items-center justify-center min-w-[50px] lg:min-w-[60px] min-h-[50px] lg:min-h-[60px] right-[5%] bottom-[5%] bg-[#3CE600] rounded-full  hover:scale-110 ease-out duration-500 group hover:bg-[#2D2D2E]"
      >
        <span>
          <BsWhatsapp className="text-2xl lg:text-4xl text-[#0A0A0A] group-hover:text-[#3CE600] ease-linear duration-300" />
        </span>
      </Link>
    </>
  );
}

{
}
