import Image from "next/image";
import React from "react";
import SliderCard from "./SliderCard";

const LastSection = () => {
  const data = {
    img: "/assets/Images/Car.jpg",
  };
  return (
    <div className="relative  ">
      <Image
        src={"assets/Images/lastBack.svg"}
        width={0}
        height={0}
        alt="background"
        className="w-full"
      />
      <div className="absolute  lg:bottom-[-250px] bottom-[-100px] flex w-full justify-between p-10 bg-fixed overflow-hidden">
        <Image
          src={data.img}
          width={300}
          height={400}
          alt="car"
          className="rounded-xl sm:w-fit md:w-96 w-32"
        />
        <Image
          src={"/assets/logos/lastSecLogo.svg"}
          width={800}
          height={800}
          alt="lastlogo"
          className=" lg:w-fit w-64 "
        />
      </div>
    </div>
  );
};

export default LastSection;
