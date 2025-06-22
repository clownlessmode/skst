"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

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
      className="flex flex-row gap-18 items-center w-full justify-center px-4 md:px-0 mt-[32px] md:mt-0"
    >
      <div className="flex flex-col gap-8">
        <motion.div variants={item} className="flex flex-col">
          <h1 className="font-bold text-[48px] leading-none md:text-[90px] md:leading-[88.9px]">
            Образование
          </h1>
          <motion.h1
            className="font-bold text-[48px] leading-none md:text-[90px] md:leading-[88.9px] text-[#235095] "
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
          className="flex flex-col md:flex-row gap-5 items-center uppercase"
        >
          <Link href="tel:+73842280332" className="w-full md:w-auto">
            <Button className="uppercase w-full md:w-auto">
              Приемная комиссия
            </Button>
          </Link>
          <Link href="/about" className="w-full md:w-auto">
            <Button className="uppercase w-full md:w-auto" variant="outline">
              Узнать подробнее
            </Button>
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="hidden md:block"
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
