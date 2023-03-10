import Image from "next/image";
import Link from "next/link";
import React from "react";
const UserIdSection = () => {
  return (
    <div
      style={{ backgroundImage: "url(assets/Images/userIdback.svg)" }}
      className="w-full h-screen bg-cover bg-fixed p-10 flex flex-col justify-evenly md:justify-around "
    >
      <div className="text-white self-end flex flex-col  gap-4 md:text-justify text-center ">
        <span className="text-2xl font-semibold tracking-widest leading-8">
          PERSONALIZED FOR YOU
        </span>
        <span className="sm:text-md leading-loose text-xs">
          DELIVERING THOUSANDS OF PERSONLIZED ALERTS <br />
          EVERYDAY OUR USERS CAN BE FIRST IN LINE WHEN <br />
          THAT OPPRORTUNITY OF A LIFETIME IS HERE.
        </span>
      </div>

      <div className="flex md:flex-row md:gap-0 gap-4 flex-col justify-between items-center ">
        <div>
          <Image src={"assets/logos/zimolight.svg"} alt="zimolight" width={300} height={300} />
        </div>
        <Link
          href={"#"}
          className="flex items-center text-white tracking-widest gap-4"
        >
          CREATE USER ID
          <Image src={"assets/logos/UserArrow.svg"} alt="userarrow" width={25} height={25} />
        </Link>
      </div>
    </div>
  );
};

export default UserIdSection;
