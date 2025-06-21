"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export const About = () => {
  return (
    <motion.section
      className="px-4 md:px-0 flex flex-col md:flex-row w-full gap-8 items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="relative overflow-hidden rounded-3xl md:h-[465px] h-[226px] w-full min-w-[50%]"
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
          className="object-cover object-center "
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
          году. Располагается в Кемерово по адресу ул. Космическая, 8А. Директор
          колледжа — Ижмулкин Олег Петрович. Учебный корпус площадью 6156 кв.м
          оснащен современным оборудованием. Дополнительно имеется спортивный
          зал на ул. Тухачевского.
        </p>
        <motion.div>
          <Link href="/about">
            <Button variant="outline" className="w-full md:w-fit uppercase">
              Подробнее
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
