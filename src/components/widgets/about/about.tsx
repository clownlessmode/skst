"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <motion.section
      className="flex flex-row w-full gap-8 items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="relative overflow-hidden rounded-3xl h-[465px] w-full min-w-[50%]"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <Image
          src="/about.png"
          alt="about"
          fill
          quality={100}
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>

      <motion.div
        className="flex flex-col gap-6 max-w-[476px]"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h2 className="text-4xl font-medium">О СКСТ</h2>
        <p className="text-[#69697B] text-lg">
          ГПОУ &quot;Сибирский колледж сервиса и технологий&quot; основан в 1943
          году.
          Располагается в Кемерово по адресу ул. Космическая, 8А. Директор
          колледжа — Ижмулкин Олег Петрович. Учебный корпус площадью 6156 кв.м
          оснащен современным оборудованием. Дополнительно имеется спортивный
          зал на ул. Тухачевского.
        </p>
        <motion.div>
          <Button variant="outline" className="w-fit uppercase">
            Подробнее
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
