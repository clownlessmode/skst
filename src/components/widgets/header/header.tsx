"use client";
import { Logotype } from "./logotype";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { BlindMode } from "@/components/features/blind-mode/blind-mode";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Сведения об ОО", to: "/info" },
  { label: "Студентам", to: "/students" },
  { label: "Абитуриентам", to: "/applicants" },
];

// Анимация для контейнера
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

// Анимация для элементов
const itemVariants = {
  hidden: { y: -20, opacity: 0 },
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

export const Header = () => {
  const pathname = usePathname();

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-row justify-between"
    >
      <div className="flex flex-row gap-7 items-center">
        <motion.div variants={itemVariants}>
          <Link href="/" className="hover:scale-105 transition-all">
            <Logotype />
          </Link>
        </motion.div>

        <nav className="flex flex-row gap-6 items-center">
          {navLinks.map(({ label, to }) => {
            const isActive = pathname === to;

            return (
              <motion.div key={to} variants={itemVariants}>
                <Link
                  href={to}
                  className={`font-medium text-lg transition-all ${
                    isActive
                      ? "cursor-default"
                      : "hover:text-[#235095] cursor-pointer"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
              </motion.div>
            );
          })}
        </nav>
      </div>

      <motion.div
        className="flex flex-row gap-7 items-center"
        variants={itemVariants}
      >
        <BlindMode />
        <Button>Связаться с нами</Button>
      </motion.div>
    </motion.header>
  );
};
