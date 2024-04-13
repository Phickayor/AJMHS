import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <div className="py-12">
      <Header />
      <Hero />
      <AboutUs />
      <div className="mt-96">
        <Gallery />
      </div>
      <Reviews />
      <Contact />
    </div>
  );
}
