import { Footer } from "@/components/widgets/footer/footer";
import { Header } from "@/components/widgets/header/header";
import React from "react";
import { Hero } from "./hero";
import { Marquee } from "./_marquee/marquee";
import { Stats } from "./stats/stats";
import { History } from "./history";
import { Mission } from "./mission";
import { Map } from "./map";
import Prepods from "./prepods";

const AboutPage = () => {
  return (
    <div className="mx-auto max-w-[1440px] w-full flex flex-col gap-[20vh]">
      <div className="flex flex-col justify-between py-8 min-h-screen">
        <Header />
        <Hero />
        <Marquee />
      </div>
      <Stats />
      <History />
      <Mission />
      <Map />
      <Prepods />
      <Footer />
    </div>
  );
};

export default AboutPage;
