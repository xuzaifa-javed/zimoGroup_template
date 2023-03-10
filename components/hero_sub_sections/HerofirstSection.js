import Image from "next/image";

const HerofirstSection = () => {
  return (
    <div  className="h-screen bg-fixed p-10 flex flex-col sm:text-justify text-center gap-6">
      <div className="sm:py-0 py-10">
        <span className="flex justify-center font-normal">
          A REAL ESTATE AND PROPERTY PLATFORM THAT IS CHANGING THE WORLD
        </span>
      </div>

      <div className="flex justify-start flex-col  leading-tight sm:py-0 py-2">
        <span className="sm:text-[27px] text-[10px] tracking-[5px]">
          A REVOLUTIONARY PLATFORM
        </span>
        <span className="sm:text-[42px] text-[8px] tracking-[8px]">
          ENTRIES - SELLERS
        </span>
        <span className="sm:text-[64px] text-[16px] font-semibold tracking-[14px]">
          WORLDWIDE
        </span>
      </div>
      <div className="flex flex-col justify-end items-end gap-8 sm:py-0 py-10">
        <Image
          src={"/assets/logos/zimoZig.svg"}
          width={500}
          height={500}
          alt="zimozig"
          className="sm:w-[30%] w-64"
        />
        <div className="text-center flex flex-col tracking-widest font-normal leading-8 sm:text-lg text-[8px]">
          <span>CONNECTING USER FROM ACROSS THE GLOBE</span>
          <span>TO FACILITATE LIFE'S MOST IMPORTANT</span>
          <span>PERSONAL TRANSACTIONS</span>
        </div>
      </div>

      <div className="tracking-[4px] flex flex-col items-start gap-3 py-4">
        <h1 className="sm:text-4xl text-lg font-normal">
          THE BEST OF THE BEST
        </h1>
        <span className="max-w-4xl sm:text-sm text-xs leading-6">
          A COMBINATION OF AUTOMATION AND MANUAL CURATION OUR PRO AGENTS AND{" "}
          <br />
          MODERATION TEAM SELECTS THE HIGHLIGHT QUALITY LISTINGS ON THE MARKET{" "}
          <br /> FROM ACROSS THE WORLD.
        </span>
      </div>
      <Image
        src={"/assets/logos/downArrow.svg"}
        width={50}
        height={50}
        alt="downarrow"
        className="sm:h-full h-4 self-center cursor-pointer animate-bounce"
      />
    </div>
  );
};

export default HerofirstSection;
