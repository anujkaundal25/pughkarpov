import Area from "@/componenets/home/Area";
import Disclaimer from "@/componenets/home/Disclaimer";
import Experience from "@/componenets/home/Experience";
import HeroSection from "@/componenets/home/HeroSection";
import Team from "@/componenets/home/Team";
import Footer from "@/componenets/ui/Footer";
import Header from "@/componenets/ui/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Experience />
      <Area />
      <Team />
      <Disclaimer />
      <Footer />
    </>
  );
}
