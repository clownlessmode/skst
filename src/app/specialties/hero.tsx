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
            Профессии
          </h1>
        </motion.div>

        <motion.p
          variants={item}
          className="leading-[30px] text-[#69697B] text-lg max-w-[780px]"
        >
          В нашем колледже вы освоите творческие и востребованные специальности,
          которые открывают широкие возможности для самореализации в современном
          мире.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col md:flex-row gap-5 items-center uppercase"
        >
          <Link href="tel:+73842280332" className="w-full">
            <Button className="uppercase w-full md:w-auto">
              Приемная комиссия
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
          className="w-[498.79px] h-[571px]"
          width={498.79 * 5}
          height={571 * 5}
          src={"/specialties.png"}
          alt="hero"
        />
      </motion.div>
    </motion.section>
  );
};
