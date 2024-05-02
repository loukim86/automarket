import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import WhyUs from "../UI/WhyUs";
import ContactUs from "../UI/ContactUs";
import Testimonials from "../UI/Testimonials";
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
      <Testimonials/>
      <ContactUs />
      <Footer />
      

    </>
  );
};

export default Layout;
