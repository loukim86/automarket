import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import WhyUs from "../UI/WhyUs";

const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Routers />
      </div>
      <WhyUs/>
      <Footer />
    </>
  );
};

export default Layout;
