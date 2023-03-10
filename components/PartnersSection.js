import Image from "next/image";
import React from "react";

const PartnersSection = () => {
  return (
    <div className="h-screen flex p-10 justify-evenly md:justify-start   items-center md:gap-96 md:flex-row flex-col">
      <Image src={"assets/logos/zimapartner.svg"} width={200} height={200} />
      <Image src={"assets/logos/thirstPartners.svg"} width={200} height={200} />
    </div>
  );
};

export default PartnersSection;
