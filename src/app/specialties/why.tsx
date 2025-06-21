"use client";
import { motion } from "framer-motion";
import React from "react";
import { WhyItem } from "./why-item";
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
const items = [
  {
    icon: "/icons/1.png",
    title: "Опытные преподаватели",
    description:
      "Действующие специалисты, которые делятся актуальными знаниями и профессиональными секретами для быстрого освоения специальности.",
  },
  {
    icon: "/icons/2.png",
    title: "Дружный коллектив студентов",
    description:
      "Дружная атмосфера и поддержка студентов создают комфортную среду для обучения. Легко найти единомышленников и завести полезные знакомства для будущей карьеры.",
  },
  {
    icon: "/icons/3.png",
    title: "Государственный колледж",
    description:
      "Государственный статус колледжа гарантирует качественное образование и выдачу дипломов государственного образца, которые признаются всеми работодателями.",
  },
  {
    icon: "/icons/4.png",
    title: "Постоянное наставничество",
    description:
      "Персональная поддержка и регулярные консультации преподавателей на протяжении всего обучения обеспечивают уверенное освоение профессиональных навыков.",
  },
];

const Why = () => {
  return (
    <motion.section className="flex flex-col gap-8 px-4 md:px-0 items-center">
      <motion.div className="flex flex-col gap-6" variants={itemVariants}>
        <div className="w-full justify-between items-center flex flex-col gap-3">
          <h2 className="text-4xl font-medium">Почему выбирают нас?</h2>
          <p className="text-[#69697B] text-lg text-center max-w-[550px]">
            Практические занятия на современном оборудовании и обучение от
            ведущих специалистов отрасли. Гарантируем качественную подготовку и
            актуальные знания для успешного старта карьеры.
          </p>
        </div>
      </motion.div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-x-[100px] gap-y-8">
        {items.map((item) => (
          <WhyItem key={item.title} {...item} />
        ))}
      </div>
    </motion.section>
  );
};
export default Why;
