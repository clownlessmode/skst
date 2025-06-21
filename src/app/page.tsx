import { News } from "@/components/widgets/news/news";
import { About } from "@/components/widgets/about/about";
import { Header } from "@/components/widgets/header/header";
import { Hero } from "@/components/widgets/hero/hero";
import { Marquee } from "@/components/widgets/marquee/marquee";
import { Specialties } from "@/components/widgets/specialties/specialties";
import { Links } from "@/components/widgets/links/links";
import { Footer } from "@/components/widgets/footer/footer";

const Page = () => {
  return (
    <div className="mx-auto max-w-[1440px] w-full flex flex-col gap-[10vh]">
      <div className="flex flex-col justify-between py-8 min-h-screen">
        <Header />
        <Hero />
        <Marquee />
      </div>
      <About />
      <Specialties />
      <News />
      <Links />
      <Footer />
    </div>
  );
};
export default Page;
