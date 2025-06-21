"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
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
      className="flex flex-row gap-18 items-center w-full justify-center"
    >
      <div className="flex flex-col gap-8">
        <motion.div variants={item} className="flex flex-col">
          <h1 className="font-bold text-[90px] leading-[88.9px]">
            Образование
          </h1>
          <motion.h1
            className="font-bold text-[90px] text-[#235095] leading-[88.9px]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            – путь к успеху!
          </motion.h1>
        </motion.div>

        <motion.p
          variants={item}
          className="leading-[30px] text-[#69697B] text-lg max-w-[780px]"
        >
          В СКСТ студенты получают практические навыки в современных мастерских
          под руководством опытных преподавателей, что гарантирует их
          востребованность на рынке труда.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-row gap-5 items-center uppercase"
        >
          <Button className="uppercase">Приемная комиссия</Button>
          <Button className="uppercase" variant="outline">
            Узнать подробнее
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        <Image
          className="w-[326px] h-[494px]"
          width={326 * 3}
          height={494 * 3}
          src={"/hero.png"}
          alt="hero"
        />
      </motion.div>
    </motion.section>
  );
};
