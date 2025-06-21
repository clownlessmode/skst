import React from "react";

export const MarqueeItem = ({
  image,
  height,
  width,
}: {
  image: string;
  height: number;
  width: number;
}) => {
  return (
    <div className="flex items-end" style={{ height: "100%" }}>
      <div
        className="bg-black rounded-[18px] ml-10"
        style={{
          height: `${window.innerWidth < 768 ? height / 2 : height}px`,
          width: `${window.innerWidth < 768 ? width / 2 : width}px`,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};
