import React, { useRef } from "react";
import Navbar from "./Navbar";
import Link from "next/link";
import Image from "next/image";

const Header = () => {



  return (
    <div
      style={{ backgroundImage: "url(assets/Images/navImage.png)" }}
      className="w-full h-screen bg-cover bg-fixed p-10"
    >
      <Navbar />
      <div className="flex flex-col justify-between h-full">
        <div className="mt-10">
          <Link href={"#"}>
            <Image src={"assets/logos/backArrow.svg"} 
            alt="backarrow" width={80} height={80} />
          </Link>
        </div>
        <div className="text-white flex flex-col gap-6">
          <span className="  sm:text-4xl text-xl tracking-widest">
            DISCOVER
          </span>
          <span className="sm:text-6xl text-3xl tracking-widest">
            A NEW WORLD
          </span>
          <span className=" md:text-lg text-xs text-[#737373] tracking-widest">
            FOR THOSE WHO WISH FOR MORE...
          </span>
        </div>
        <div className="flex flex-col items-center gap-4 mb-2 animate-bounce cursor-pointer" >
          <span className="text-[#737373] sm:text-lg  text-[8px] tracking-widest">
            BRINGING THE WORLD CLOSER TOGETHER
          </span>
          <Image
            src={"assets/logos/downWhiteArrow.svg"}
            width={80}
            height={80}
            alt="downarrow"
            className="sm:h-full h-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
