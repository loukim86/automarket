import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import WhyUs from "../UI/WhyUs";
import ContactUs from "../UI/ContactUs";
import TestimonialsCarousel from "../UI/TestimonialsCarousel";
import PopularCar from "../UI/PopularCar";
import NewArrival from "../UI/NewArrival";
import CarInformationCard from "../UI/CarInformationCard";


const Layout = () => {
  return (
    <>
      <Header />

      <div>
        <Routers />
      </div>

      <WhyUs />
      <PopularCar />
      {/* <CarInformationCard/> */}
      <TestimonialsCarousel />
      <NewArrival />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Layout;
