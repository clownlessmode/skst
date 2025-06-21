"use client";
import { Calendar, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface NewsItemProps {
  id: string;
  href: string;
  imageSrc: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  location: string;
  className?: string;
}

export const NewsItem = ({
  id,
  href = "/news",
  imageSrc = "/news/1.png",
  title = "Форум предприятий легкой промышленности",
  excerpt = "27 мая 2025 года в городе Барнаул на базе КГБПОУ 'Алтайская академия гостеприимства' начал работу Форум",
  date = "Май 16, 2025",
  readTime = "3 минуты",
  location = "г. Новосибирск, национальный центр\n«Абилимпикс»",
  className = "",
}: NewsItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <Link
        href={href}
        className={`w-full flex flex-row overflow-hidden rounded-[30px] shadow-md bg-white hover:shadow-lg transition-shadow duration-300 ${className}`}
      >
        <div
          className="min-h-[300px] w-[500px] h-full flex-shrink-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${imageSrc}")` }}
        />

        <motion.div
          className="px-[64px] py-5 flex flex-col gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="flex flex-col gap-4">
            <h4 className="text-2xl font-medium">{title}</h4>
            <p className="text-[#69697B] text-lg">{excerpt}</p>
          </div>

          <div className="w-full h-px bg-[#69697B] opacity-10" />

          <div className="flex flex-row gap-6 flex-wrap">
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-3 items-center">
                <Calendar className="text-[#235095] size-5" />
                <p>{date}</p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <Clock className="text-[#235095] size-5" />
                <p>{readTime}</p>
              </div>
            </div>

            <div className="flex flex-row gap-3">
              <MapPin className="text-[#235095] size-5 mt-1" />
              <p className="whitespace-pre-line">{location}</p>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};
