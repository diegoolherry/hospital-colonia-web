import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfoCards from "@/components/InfoCards";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <InfoCards />
      <Services />
      <Gallery />
      <Testimonials />
      <Footer />
    </>
  );
}
