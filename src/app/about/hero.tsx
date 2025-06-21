"use client";
import { motion } from "framer-motion";

export const Hero = () => {
  // Варианты анимации для контейнера
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  // Варианты анимации для элементов
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-row text-center! justify-center gap-18 items-center w-full px-4 md:px-0 mt-[32px] md:mt-0"
    >
      <div className="flex flex-col gap-8 justify-center items-center">
        <motion.div variants={item} className="flex flex-col">
          <h1 className="font-bold text-[48px] leading-none md:text-[90px] md:leading-[88.9px]">
            Сибирский
            <br />
            колледж сервиса и технологий
          </h1>
        </motion.div>

        <motion.p
          variants={item}
          className="leading-[30px] text-[#69697B] text-lg max-w-[600px]"
        >
          Сибирский колледж сервиса и технологий осуществляет подготовку
          художников, дизайнеров, парикмахеров, ювелиров, художников по костюму
          и т.д
        </motion.p>
      </div>
    </motion.section>
  );
};
