import { Footer } from "@/components/widgets/footer/footer";
import { Header } from "@/components/widgets/header/header";
import React from "react";
import { Hero } from "./hero";
import { Specials } from "./specials";
import Why from "./why";

const SpecialtiesPage = () => {
  return (
    <div className="mx-auto max-w-[1440px] w-full flex flex-col gap-[20vh]">
      <div className="flex flex-col justify-between py-8 min-h-screen">
        <Header />
        <Hero />
        <div className="w-full h-[1px] bg-[#E0E0E0]" />
      </div>
      <Specials />
      <Why />
      <Footer />
    </div>
  );
};

export default SpecialtiesPage;
