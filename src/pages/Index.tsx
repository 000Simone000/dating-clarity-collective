
import Hero from "../components/Hero";
import WhyDifferent from "../components/WhyDifferent";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <WhyDifferent />
      <Services />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Index;
