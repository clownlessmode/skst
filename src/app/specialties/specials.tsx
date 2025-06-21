"use client";

import React, { memo } from "react";
import { SpecialtiesItem } from "@/components/widgets/specialties/specialties-item";
import { motion } from "framer-motion";

const SPECIALTIES_DATA = [
  {
    id: 1,
    imageSrc: "/specialties/111.png",
    title: "Дизайн (по отраслям)",
    description:
      "Готовим дизайнеров для работы в рекламе, веб-дизайне, интерьере и графике. Изучаем композицию, цветоведение и современные компьютерные программы.",
  },
  {
    id: 2,
    imageSrc: "/specialties/222.png",
    title: "Реклама",
    description:
      "Обучаем специалистов рекламной сферы для карьеры в брендинговых агентствах, PR-компаниях и онлайн-маркетинге. Осваиваем создание концепций, анализ целевой аудитории и актуальные digital-инструменты продвижения.",
  },
  {
    id: 3,
    imageSrc: "/specialties/333.png",
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

export const Specials = () => {
  return (
    <motion.section className="flex flex-col gap-8 px-4 md:px-0">
      <motion.div className="flex flex-col gap-6" variants={itemVariants}>
        <div className="w-full justify-between items-center flex">
          <h2 className="text-4xl font-medium">Все профессии</h2>
        </div>
      </motion.div>

      <div className="w-full center-last-row">
        {SPECIALTIES_DATA.map((specialty, index) => (
          <motion.div key={specialty.id} variants={itemVariants} custom={index}>
            <MemoizedSpecialtiesItem
              imageSrc={specialty.imageSrc}
              title={specialty.title}
              description={specialty.description}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
