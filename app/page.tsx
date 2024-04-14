import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <div className="py-5 xl:py-12">
      <Header />
      <Hero />
      <AboutUs />
      <div className="mt-72 md:mt-96">
        <Gallery />
      </div>
      <Reviews />
      <Contact />
      <Footer/>
    </div>
  );
}
