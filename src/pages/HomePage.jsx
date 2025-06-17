import Header from "../components/Header";
import { CTA } from "../sections/CTA";
import Features from "../sections/Features";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Tesmonials from "../sections/Tesmonials";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Tesmonials />
    </main>
  );
};

export default HomePage;
