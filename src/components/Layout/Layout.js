import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import WhyUs from "../UI/WhyUs";
import ContactUs from "../UI/ContactUs";
import SearchFilter from "../UI/SearchFilter";

const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Routers />
      </div>
      <SearchFilter/>
      <WhyUs/>
      <ContactUs/>
      <Footer />
    </>
  );
};

export default Layout;
