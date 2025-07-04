"use client";
import { Button } from "@/components/ui/button";
import React, { useState, useCallback, memo, useEffect } from "react";
import { SpecialtiesItem } from "./specialties-item";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

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
    title: "Реклама",
    description:
      "Обучаем специалистов рекламной сферы для карьеры в брендинговых агентствах, PR-компаниях и онлайн-маркетинге. Осваиваем создание концепций, анализ целевой аудитории и актуальные digital-инструменты продвижения.",
  },
  {
    id: 3,
    imageSrc: "/specialties/3.png",
    title: "Технология парикмахерского искусства",
    description:
      "Готовим парикмахеров для работы в салонах красоты, барбершопах и стилистических студиях. Изучаем техники стрижки, окрашивания и современные тренды в парикмахерском искусстве.",
  },
  {
    id: 4,
    imageSrc: "/specialties/4.png",
    title: "Стилистика и искусство визажа",
    description:
      "Готовим визажистов для работы в салонах красоты, модельных агентствах, на съемочных площадках и в свадебной индустрии. Изучаем техники макияжа, колористику и современные тренды в визаже.",
  },
  {
    id: 5,
    imageSrc: "/specialties/5.png",
    title: "Технология эстетических услуг",
    description:
      "Готовим специалистов эстетических услуг для работы в косметологических центрах, салонах красоты, оздоровительных клиниках и студиях красоты. Изучаем процедуры по уходу за кожей, массажные техники и современное косметологическое оборудование.",
  },
  {
    id: 6,
    imageSrc: "/specialties/6.png",
    title: "Технологии индустрии красоты",
    description:
      "Обучаем специалистов индустрии красоты для карьеры в салонах красоты и косметологических кабинетах. Осваиваем парикмахерское искусство, косметологические процедуры, ногтевой сервис и работу с профессиональным оборудованием.",
  },
  {
    id: 7,
    imageSrc: "/specialties/7.png",
    title:
      "Конструирование, моделирование и технология изготовления изделий легкой промышленности",
    description:
      "Обучаем конструкторов одежды для швейных предприятий и ателье. Изучаем построение выкроек, технологии пошива и современное оборудование.",
  },
  {
    id: 8,
    imageSrc: "/specialties/8.png",
    title: "Художник по костюму",
    description:
      "Обучаем художников по костюму разрабатывать стильные образы и уникальные наряды. Осваиваем историю моды, технологии кроя и работу с современными материалами для воплощения творческих идей.",
  },
  {
    id: 9,
    imageSrc: "/specialties/9.png",
    title: "Конструирование, моделирование и технология швейных изделий",
    description:
      "Готовим конструкторов и технологов швейного производства для работы на фабриках, в ателье и дизайн-студиях. Изучаем построение выкроек, моделирование одежды и современные технологии пошива.",
  },
  {
    id: 10,
    imageSrc: "/specialties/10.png",
    title: "Ювелир",
    description:
      "Готовим ювелиров для работы в ювелирных мастерских, салонах и производственных предприятиях. Изучаем техники обработки металлов, работу с драгоценными камнями и современные методы ювелирного дела.",
  },
  {
    id: 11,
    imageSrc: "/specialties/11.png",
    title: "Исполнитель художественно-оформительских работ",
    description:
      "Обучаем исполнителей художественно-оформительских работ для оформления торговых площадей и культурных мероприятий. Осваиваем художественные техники, работу с материалами и современные методы декорирования.",
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection("right");
    const step = isMobile ? 1 : 3;
    setCurrentIndex((prev) =>
      prev + step >= SPECIALTIES_DATA.length ? 0 : prev + step
    );
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, isMobile]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection("left");
    const step = isMobile ? 1 : 3;
    setCurrentIndex((prev) =>
      prev - step < 0
        ? Math.max(0, SPECIALTIES_DATA.length - step)
        : prev - step
    );
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, isMobile]);

  const getCurrentSlides = useCallback(() => {
    const count = isMobile ? 1 : 3;
    return SPECIALTIES_DATA.slice(currentIndex, currentIndex + count);
  }, [currentIndex, isMobile]);

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col gap-8 px-4 md:px-0"
    >
      <motion.div className="flex flex-col gap-6" variants={itemVariants}>
        <div className="w-full justify-between items-center flex">
          <h2 className="text-4xl font-medium">Чему мы обучаем?</h2>
          <Link href="/specialties">
            <Button variant="outline" className="uppercase hidden md:flex">
              ВСЕ СПЕЦИАЛЬНОСТИ
            </Button>
          </Link>
        </div>
        <p className="text-[#69697B] text-lg max-w-[500px]">
          Специализируемся на подготовке кадров для творческих профессий и
          индустрии красоты.
        </p>
      </motion.div>

      <div className="relative overflow-hidden h-[660px] w-full">
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
