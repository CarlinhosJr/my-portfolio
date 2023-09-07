//next
import Link from "next/link";

//icon
import { GoDownload } from "react-icons/go";

// api helper
import { getDataJson } from "@/utils/api-helpers";

interface CvProps{
  size_text?:string
  size_icon?:string
}

export default function DownloadCV({size_text = "", size_icon = ""}: CvProps) {

  //get data
  const { document } = getDataJson();

  return (
    <div className="text-[#D9D9D9] font-semibold flex items-center gap-2 group">
      <Link
        href={document.src}
        target="_blank"
        className={`group-hover:text-gray-400 ease-out duration-300 text-${size_text}`}
      >
        {document.label}
      </Link>
      <i className={`text-${size_icon} group-hover:text-gray-400 ease-out duration-200`}>
        <GoDownload />
      </i>
    </div>
  );
}
