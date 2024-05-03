import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import WhyUs from "../UI/WhyUs";
import ContactUs from "../UI/ContactUs";
// import CustomerCard from "../UI/CustomerCard";
// import Testimonials from "../UI/Testimonials";
import TestimonialsCarousel from "../UI/TestimonialsCarousel";
import PopularCar from "../UI/PopularCar";


const Layout = () => {
  return (
    <>
      <Header />

      <div>
        <Routers />
      </div>
      
      <WhyUs />
      <PopularCar />
      <TestimonialsCarousel/>
      {/* <CustomerCard/> */}
      {/* <Testimonials/> */}
      <ContactUs />
      <Footer />
      

    </>
  );
};

export default Layout;
