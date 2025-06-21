import Image from "next/image";

export const Logotype = () => {
  return (
    <Image
      className="w-[145px] h-[45px]"
      src={"/logotype.png"}
      alt="logotype"
      width={145 * 3}
      height={45 * 3}
      quality={100}
    />
  );
};
