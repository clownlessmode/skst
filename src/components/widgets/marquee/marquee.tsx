"use client";
import React from "react";
import MarqueeComponent from "react-fast-marquee";
import { MarqueeItem } from "./marquee-item";
import { motion } from "framer-motion";

const MARQUEE_ITEMS = [
  {
    image: "/marquee/1.png",
    title: "100 ЛУЧШИХ<br />ТОВАРОВ РОССИИ",
  },
  {
    image: "/marquee/2.png",
    title: "Победители премии<br />большая перемена",
  },
  {
    image: "/marquee/1.png",
    title: "лучшие товары<br />и услуги кузбасса 2024",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

export const Marquee = () => {
  return (
    <motion.section
      className="flex flex-col items-center gap-8 relative w-full overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.p className="uppercase text-lg" variants={itemVariants}>
        Награды и достижения
      </motion.p>

      <motion.div variants={itemVariants} className="w-full">
        <MarqueeComponent speed={40} gradient={true} pauseOnHover>
          {MARQUEE_ITEMS.map((item, index) => (
            <MarqueeItem
              key={index}
              image={item.image}
              title={<span dangerouslySetInnerHTML={{ __html: item.title }} />}
            />
          ))}
        </MarqueeComponent>
      </motion.div>
    </motion.section>
  );
};
