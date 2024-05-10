import Footer from "../components/Footer/Footer";
import ShoppingCartCard from "../components/UI/ShoppingCartCard";
import "../styles/cart.css";

const Cart = () => {
  return (
    <>
      <div className="container">
        <div className="shopping-cart">
          <p className="cart-title">SHOPPING CART</p>
          <table>
            <thead>
              <tr>
                <th className="th-photo">Photo</th>
                <th className="th-model">Model</th>
                <th className="th-year">Year</th>
                <th className="th-mileage">Mileage</th>
                <th className="th-fuel">Fuel</th>
                <th className="th-price">Price</th>
                <th className="empty-cell "></th>
              </tr>
            </thead>
          </table>
          <div className="cart-container">
            <ShoppingCartCard />
            <ShoppingCartCard />
            <ShoppingCartCard />
            <ShoppingCartCard />
            <ShoppingCartCard />
          </div>
        </div>
      </div>
      <div className="footer-box">
        <Footer />
      </div>
    </>
  );
};

export default Cart;
