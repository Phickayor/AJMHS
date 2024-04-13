import AboutUs from "@/components/AboutUs";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="py-12">
      <Header />
      <Hero />
      <AboutUs />
      <div className="mt-96">
        <Gallery />
      </div>
    </div>
  );
}
