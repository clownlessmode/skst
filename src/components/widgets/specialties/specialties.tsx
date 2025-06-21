"use client";
import { Button } from "@/components/ui/button";
import React, { useState, useCallback, memo } from "react";
import { SpecialtiesItem } from "./specialties-item";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SPECIALTIES_DATA = [
  {
    id: 1,
    imageSrc: "/specialties/1.png",
    title: "Дизайн (по отраслям)",
    description:
      "Готовим дизайнеров для работы в рекламе, веб-дизайне, интерьере и графике. Изучаем композицию, цветоведение и современные компьютерные программы.",
  },
  {
    id: 2,
    imageSrc: "/specialties/2.png",
    title: "Технологии индустрии красоты",
    description:
      "Готовим специалистов в области косметологии, парикмахерского искусства и ногтевого сервиса. Изучаем современные технологии и тенденции индустрии.",
  },
  {
    id: 3,
    imageSrc: "/specialties/3.png",
    title: "Художник по костюму",
    description:
      "Готовим специалистов по созданию сценических костюмов. Изучаем историю костюма, технологию пошива и современные материалы.",
  },
  {
    id: 4,
    imageSrc: "/specialties/1.png",
    title: "Дизайн интерьера",
    description: "Готовим специалистов по дизайну интерьеров и архитектуре.",
  },
  {
    id: 5,
    imageSrc: "/specialties/2.png",
    title: "Визажист",
    description: "Обучаем искусству макияжа и созданию образов.",
  },
  {
    id: 6,
    imageSrc: "/specialties/3.png",
    title: "Стилист",
    description: "Готовим стилистов по одежде и имиджу.",
  },
];

const MemoizedSpecialtiesItem = memo(SpecialtiesItem);

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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
      duration: 0.3,
    },
  },
};

const slideVariants = {
  enter: (direction: "left" | "right") => ({
    x: direction === "right" ? 50 : -50,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.3,
    },
  },
  exit: (direction: "left" | "right") => ({
    x: direction === "right" ? -50 : 50,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.2,
    },
  }),
};

export const Specialties = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection("right");
    setCurrentIndex((prev) =>
      prev + 3 >= SPECIALTIES_DATA.length ? 0 : prev + 3
    );
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection("left");
    setCurrentIndex((prev) =>
      prev - 3 < 0 ? Math.max(0, SPECIALTIES_DATA.length - 3) : prev - 3
    );
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const getCurrentSlides = useCallback(() => {
    return SPECIALTIES_DATA.slice(currentIndex, currentIndex + 3);
  }, [currentIndex]);

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col gap-8"
    >
      <motion.div className="flex flex-col gap-6" variants={itemVariants}>
        <div className="w-full justify-between items-center flex">
          <h2 className="text-4xl font-medium">Чему мы обучаем?</h2>
          <Button variant="outline" className="uppercase">
            ВСЕ СПЕЦИАЛЬНОСТИ
          </Button>
        </div>
        <p className="text-[#69697B] text-lg">
          Специализируемся на подготовке кадров для
          <br />
          творческих профессий и индустрии красоты.
        </p>
      </motion.div>

      <div className="relative overflow-hidden h-[610px] w-full">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute top-0 left-0 right-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            style={{ willChange: "transform" }}
          >
            {getCurrentSlides().map((specialty, index) => (
              <motion.div
                key={specialty.id}
                variants={itemVariants}
                custom={index}
              >
                <MemoizedSpecialtiesItem
                  imageSrc={specialty.imageSrc}
                  title={specialty.title}
                  description={specialty.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div
        className="flex flex-row gap-5 items-center justify-center w-full"
        variants={itemVariants}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="cursor-pointer flex justify-center items-center size-9 rounded-full border border-[#ECECF4] bg-[#FAFAFA]"
          onClick={prevSlide}
        >
          <ArrowLeft className="opacity-70 size-7" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="cursor-pointer flex justify-center items-center size-9 rounded-full border border-[#ECECF4] bg-[#FAFAFA]"
          onClick={nextSlide}
        >
          <ArrowRight className="opacity-70 size-7" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
