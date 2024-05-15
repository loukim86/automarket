import CartSelection from "../cart/CartSelection";
import ShoppingCartCard from "../../components/UI/ShoppingCartCard";
import { useFavorites } from "../context/FavoriteContext";
import '../../styles/user-shopping-cart.css'


const UserShoppingCart = () => {
    const { cartItems, removeFromCart } = useFavorites();
  return (
    <div className="user-shopping-cart">
      <CartSelection />
      <div className="shopping-cart-container">
            {cartItems.length > 0 ? (
              cartItems.map((car, index) => (
                <ShoppingCartCard
                  key={index}
                  car={car}
                  onRemove={() => removeFromCart(car.pk_car_id)}
                  className="user-shopping"
                />
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>
    </div>
  );
};

export default UserShoppingCart;
