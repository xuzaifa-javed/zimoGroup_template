import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-end gap-6    ">
          <Image src={"/assets/logos/navLogoOne.svg"} alt="logo" width={50} height={50} />
          <Image
            src={"/assets/logos/navLogoTwo.svg"}  alt="logotwo"
            width={150}
            height={150}
           
            className="md:block hidden"
          />
          <span>
            <Link href="#" className="text-white ">
              ABOUT
            </Link>
          </span>
        </div>
        <div>
          <Image
            src={"/assets/logos/navLogoThree.svg"}
            width={150}
            height={150}
            alt="navlogo"
            className="lg:block hidden"
          />
        </div>
        <div className="flex items-center sm:gap-10 gap-5">
          <div className="flex items-center gap-4  ">
            <div className="flex flex-col items-end text-xs sm:flex hidden ">
              <span className="text-white font-medium tracking-widest">
                17:23 LONDON UNITED KINGDOM
              </span>
              <span className="text-amber-400 font-light tracking-widest">
                SUNDAY, 12 FEBRUARY 2023
              </span>
            </div>
            <Image src={"/assets/logos/Flag.svg"} alt="flag" width={37} height={25} />
          </div>
          <Image src={"/assets/logos/cart.svg"} alt="cart" width={20} height={25} />
          <Image src={"/assets/logos/userIcon.svg"} alt="usericon" width={20} height={25} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
