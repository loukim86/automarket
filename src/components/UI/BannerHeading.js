import { Container } from "reactstrap";
import '../../styles/banner-heading.css'

const BannerHeading = () => {
  return (
    <div className="heading">
      <Container>
        <div className="main-text">
          <p>Buy, Sell, and <br /> Trade cars with us</p>
        </div>
        <div className="text">
          <p>We offer a wide selection of <br /> cars for every need. Find <br /> your ideal car now.</p>
        </div>
      </Container>
    </div>
  );
};

export default BannerHeading;
