import Footer from "../components/Footer/Footer";
import ShoppingCartCard from "../components/UI/ShoppingCartCard";
import CartSelection from "./cart/CartSelection";
import { useFavorites } from "./context/FavoriteContext";

import "../styles/cart.css";

const Cart = () => {
  const { cartItems, removeFromCart } = useFavorites();

  return (
    <>
      <div className="container">
        <div className="shopping-cart">
          <p className="cart-title">SHOPPING CART</p>
          <CartSelection />

          <div className="cart-container">
            {cartItems.length > 0 ? (
              cartItems.map((car, index) => (
                <ShoppingCartCard
                key={index}
                car={car}
                onRemove={() => removeFromCart(car.pk_car_id)}
                className="custom-cart-card" 
                mobileClassName="custom-cart-card-mobile"
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
