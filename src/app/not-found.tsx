import { Button } from "@/components/ui/button";
import { Footer } from "@/components/widgets/footer/footer";
import { Header } from "@/components/widgets/header/header";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="mx-auto w-full max-w-[1440px] flex flex-col gap-[10vh]">
      <div className="flex flex-col justify-between py-8">
        <Header />
      </div>
      <div className="flex w-full flex-col gap-3 min-h-[calc(100vh-300px)] text-center items-center">
        <h1 className="text-[180px] font-bold text-[#235095] leading-none">
          404
        </h1>
        <p className="text-[48px] font-medium text-[#235095]">
          Страница не найдена
        </p>
        <p className="text-lg text-[#235095]">
          Данная страница не найдена или не существует, чтобы <br />
          вернуться на главную нажмите на кнопку ниже.
        </p>
        <Button className="w-fit">
          <Link href="/">Вернуться на главную</Link>
        </Button>
      </div>
      <Footer />
    </div>
  );
};
export default NotFound;
