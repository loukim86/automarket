import Footer from "../components/Footer/Footer";
import "../styles/cart.css";

const Cart = () => {
  return (
    <>
      <div className="container">
        <div className="shopping-cart">
          <p>SHOPPING CART</p>
          <table>
            <thead>
              <tr>
                <th>Photo</th>
                <th>Model</th>
                <th>Year</th>
                <th>Mileage</th>
                <th>Fuel</th>
                <th>Price</th>
                <th className="empty-cell "></th>
              </tr>
            </thead>
          </table>
          <div class="cart-card">
            <div class="cart-img">
              <img src="" alt="Hyundai" />
            </div>
            <div class="cart-info">
              <span>Hyundai</span>
              <span>2021</span>
              <span>1234km</span>
              <span>Diesel</span>
              <span>12,345,678</span>
            </div>
            <div class="cart-actions">
              <button class="btn application">Application</button>
              <button class="btn delete">Delete</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-box">
        {" "}
        <Footer />
      </div>
    </>
  );
};

export default Cart;
