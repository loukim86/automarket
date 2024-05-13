import Footer from "../components/Footer/Footer";
import ShoppingCartCard from "../components/UI/ShoppingCartCard";
import { useFavorites } from "./context/FavoriteContext";

import "../styles/cart.css";

const Cart = () => {
  const { cartItems, removeFromCart } = useFavorites();

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
            {cartItems.length > 0 ? (
              cartItems.map((car, index) => (
                <ShoppingCartCard
                  key={index}
                  car={car}
                  onRemove={() => removeFromCart(car.pk_car_id)}
                />
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
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
