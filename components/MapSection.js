import React from "react";

const MapSection = () => {
  return (
    <>
      <div
        style={{ backgroundImage: "url(assets/Images/worldmap.svg)" }}
        className="w-full h-screen bg-cover bg-fixed  flex justify-center items-center"
      >
        <div className="flex flex-col gap-7 text-center items-center tracking-widest">
          <span className="text-2xl ">GLOBAL VISION</span>
          <span className="text-sm">
            WITH A REMOTE CULTURE DIVERSITY IS NATURALLY IN OUR DNA <br />
            BASED ACROSS THE GLOBE. MAKING UP OVER 23 DIFFERENT NATIONALITIES
          </span>
        </div>
      </div>
      <hr />
    </>
  );
};

export default MapSection;
