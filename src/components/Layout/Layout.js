import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import WhyUs from "../UI/WhyUs";
import ContactUs from "../UI/ContactUs";
import SearchFilter from "../UI/SearchFilter";
import PopularCar from "../UI/PopularCar";

const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Routers />
      </div>
      <SearchFilter />
      <WhyUs />
      <PopularCar />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Layout;
