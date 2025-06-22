import Image from "next/image";

export const Logotype = () => {
  return (
    <Image
      className="w-[145px] h-[45px]"
      src={"/logotype.png"}
      alt="ГПОУ СКСТ - Сибирский колледж сервиса и технологий"
      title="ГПОУ СКСТ - официальный сайт"
      width={145 * 3}
      height={45 * 3}
      quality={100}
      priority
    />
  );
};
