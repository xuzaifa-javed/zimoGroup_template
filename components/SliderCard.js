import Image from "next/image";
import React from "react";

const SliderCard = ({ data }) => {
  console.log(data);
  const styles = {
    slideBackground:
      "mt-10 ml-10 w-[420px] bg-cover h-[420px] rounded-2xl flex justify-center items-end pb-8",
  };
  return (
    <div className="w-[100%] flex">
      <div
        style={{ backgroundImage: `url(${data.img})` }}
        className={styles.slideBackground}
      >
        <span className="text-white text-2xl">{data?.label}</span>
      </div>
    </div>
  );
};

export default SliderCard;
