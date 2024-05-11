import Hero from "../components/UI/Hero";
import SearchCar from "../components/UI/SearchCar";
import WhyUs from "../components/UI/WhyUs";
import PopularCar from "../components/UI/PopularCar";
import NewArrival from "../components/UI/NewArrival";
import TestimonialsCarousel from "../components/UI/TestimonialsCarousel";
import ContactUs from "../components/UI/ContactUs";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <SearchCar />
      <WhyUs />
      <PopularCar />
      <NewArrival />
      <TestimonialsCarousel />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
