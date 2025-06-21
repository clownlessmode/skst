"use client";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

interface SpecialtiesItemProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonText?: string;
  className?: string;
}

export const SpecialtiesItem = ({
  imageSrc,
  title,
  description,
  buttonText = "Узнать подробнее",
  className = "",
}: SpecialtiesItemProps) => {
  return (
    <motion.a
      className={`h-[650px] w-full rounded-[30px] shadow-md overflow-hidden flex flex-col bg-white ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      href="/specialties"
    >
      <motion.div
        transition={{ delay: 0.2, duration: 0.7 }}
        className="relative min-h-[250px] w-full overflow-hidden"
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          quality={100}
          className="object-cover h-[250px]!"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>

      <div className="flex-1 p-[30px] flex flex-col">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col gap-4 mb-6"
        >
          <h3 className="text-2xl font-medium line-clamp-3">{title}</h3>
          <p className="text-[#69697B] text-lg line-clamp-5">{description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="mt-auto"
        >
          <Button
            className="w-fit  px-0! py-0! hover:bg-transparent! hover:scale-[1]!"
            variant="ghost"
          >
            {buttonText} <ArrowUpRight className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </motion.a>
  );
};
