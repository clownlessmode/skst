"use client";
import React from "react";
import MarqueeComponent from "react-fast-marquee";

import { motion } from "framer-motion";
import { MarqueeItem } from "./marquee-item";

const MARQUEE_ITEMS = [
  {
    image: "/marquee/about/1.png",
    height: 317.27,
    width: 388.8,
  },
  {
    image: "/marquee/about/2.png",
    height: 243.27,
    width: 446.39,
  },
  {
    image: "/marquee/about/3.png",
    height: 321.47,
    width: 259.19,
  },
  {
    image: "/marquee/about/4.png",
    height: 245.97,
    width: 388.8,
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
      className="flex flex-col items-end gap-8 relative w-full overflow-hidden mt-[32px] md:mt-0"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        variants={itemVariants}
        className="w-full flex items-end h-[160px] md:h-[400px]"
      >
        <MarqueeComponent
          speed={40}
          gradient={true}
          pauseOnHover
          className="about-marquee-bottom-align"
          style={{ height: "100%" }}
        >
          {MARQUEE_ITEMS.map((item, index) => (
            <MarqueeItem
              key={index}
              image={item.image}
              height={item.height}
              width={item.width}
            />
          ))}
        </MarqueeComponent>
      </motion.div>
    </motion.section>
  );
};
