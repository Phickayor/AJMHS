import AboutUs from "@/components/AboutUs";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="py-12">
      <Header />
      <Hero />
      <AboutUs />
    </div>
  );
}
