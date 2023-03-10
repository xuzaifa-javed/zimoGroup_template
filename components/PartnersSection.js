import Image from "next/image";
import React from "react";

const PartnersSection = () => {
  return (
    <div className="h-screen flex p-10 justify-evenly md:justify-start   items-center md:gap-96 md:flex-row flex-col">
      <div className="pl-10 flex flex-col gap-4">
        <Image src={'/assets/logos/ZIMOB.svg'} width={250} height={250} className="sm:w-full w-36" />
        <span className="sm:text-[55px]  text-4xl text-[#737373] tracking-widest">PARTNER</span>
      </div>
      <Image src={"assets/logos/thirstPartners.svg"} alt="thirdpartner" width={200} height={200} />
    </div>
  );
};

export default PartnersSection;
