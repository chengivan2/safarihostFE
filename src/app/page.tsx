import Footer from "@/components/Footer/Footer";
import TopNavBar2 from "@/components/TopNav/TopNavBar2";

import { Metadata } from "next";
import About from "./homecomponents/components/About";
import Blog from "./homecomponents/components/Blog";
import ChooseUs from "./homecomponents/components/ChooseUs";
import CTA from "./homecomponents/components/CTA";
import DomainArea from "./homecomponents/components/DomainArea";
import Hero from "./homecomponents/components/Hero";
import Pricing from "./homecomponents/components/Pricing";
import Services from "./homecomponents/components/Services";
import Testimonials from "./homecomponents/components/Testimonials";
import TopBanner from "@/components/TopNav/TopBanner";

export const metadata: Metadata = {
  title: "SafariHost - Reliable Affordable Web Hosting",
};

const Hosting02 = () => {
  return (
    <>
      <TopBanner />
      <TopNavBar2 />
      <main>
        <Hero />
        <DomainArea />
        <About />
        <Services />
        <ChooseUs />
        <Pricing />
        <Testimonials />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default Hosting02;
