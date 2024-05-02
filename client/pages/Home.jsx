import Hero from "./homepageSections/Hero";
import Overview from "./homepageSections/Overview";
import FAQ from "./homepageSections/Faq";
import Selectedprojects from "./homepageSections/Selectedprojects";
import Services from "./homepageSections/Services";
import Testimonials from "@/components/ui/Testimonials";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Selectedprojects />
      <Overview />
      <Testimonials />
      <FAQ />
    </>
  );
}

export default Home;
