"use client";
import { Logotype } from "./logotype";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { BlindMode } from "@/components/features/blind-mode/blind-mode";
import { motion, AnimatePresence } from "framer-motion";
import { MoreHorizontal, X } from "lucide-react";
import { useState } from "react";

// Ссылки для ПК версии (основные)
const navLinks = [
  { label: "Сведения об ОО", to: "/about" },
  { label: "Студентам", to: "/students" },
  { label: "Абитуриентам", to: "/about" },
];

// Расширенные ссылки для мобильного меню
const mobileNavLinks = [
  { label: "Главная", to: "/" },
  { label: "О СКСТ", to: "/about" },
  { label: "Специальности", to: "/specialties" },
  { label: "Новости", to: "/news" },
  { label: "Абитуриентам", to: "/about" },
  { label: "Полезные ссылки", to: "/links" },
  { label: "Студентам", to: "/students" },
  { label: "УПК", to: "/upk" },
  { label: "Центр трудоустройства", to: "/career-center" },
  { label: "Преподавателям", to: "/teachers" },
  { label: "Сведения об ОО", to: "/about" },
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

// Анимация для мобильного меню
const mobileMenuVariants = {
  hidden: {
    y: "-100%",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
  exit: {
    y: "-100%",
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
};

// Анимация для элементов мобильного меню
const mobileItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

export const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-row justify-between px-4 lg:px-0 items-center"
    >
      <div className="flex flex-row gap-7 items-center">
        <motion.div variants={itemVariants}>
          <Link href="/" className="hover:scale-105 transition-all">
            <Logotype />
          </Link>
        </motion.div>

        <nav className="hidden lg:flex flex-row gap-6 items-center ">
          {navLinks.map(({ label, to }) => {
            const isActive = pathname === to;
            return (
              <motion.div key={label} variants={itemVariants}>
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
      <div className="lg:hidden block">
        <button
          onClick={toggleMobileMenu}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="size-[24px]" />
          ) : (
            <MoreHorizontal className="size-[24px]" />
          )}
        </button>
      </div>
      <motion.div
        className="lg:flex hidden flex-row gap-7 items-center"
        variants={itemVariants}
      >
        <BlindMode />
        <Button>Связаться с нами</Button>
      </motion.div>

      {/* Мобильное меню */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Оверлей с размытием */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 backdrop-blur-sm bg-white/20 z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Меню */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              className="fixed inset-x-0 top-0 z-50 bg-white border-b border-gray-200 lg:hidden rounded-b-xl shadow-lg"
            >
              <motion.div
                className="flex flex-col h-screen overflow-y-auto"
                variants={containerVariants}
              >
                {/* Заголовок с кнопкой закрытия */}
                <motion.div
                  className="flex justify-between items-center p-6 border-b border-gray-200"
                  variants={mobileItemVariants}
                >
                  <h2 className="text-xl font-semibold text-gray-800">
                    Навигация
                  </h2>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Закрыть меню"
                  >
                    <X className="size-[24px] text-gray-600" />
                  </button>
                </motion.div>

                {/* Ссылки меню */}
                <div className="flex flex-col p-6 space-y-3 flex-1">
                  {mobileNavLinks.map(({ label, to }) => {
                    const isActive = pathname === to;
                    return (
                      <motion.div key={label} variants={mobileItemVariants}>
                        <Link
                          href={to}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block py-3 px-4 rounded-lg font-medium text-base transition-all ${
                            isActive
                              ? "bg-[#235095] text-white"
                              : "hover:bg-gray-100 text-gray-700"
                          }`}
                        >
                          {label}
                        </Link>
                      </motion.div>
                    );
                  })}

                  <motion.div
                    className="pt-4 border-t border-gray-200"
                    variants={mobileItemVariants}
                  >
                    <div className="flex flex-col space-y-4">
                      <div onClick={() => setIsMobileMenuOpen(false)}>
                        <BlindMode />
                      </div>
                      <Button
                        className="w-full"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Связаться с нами
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
