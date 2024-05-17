import CartSelection from "../../../pages/cart/CartSelection";
import ShoppingCartCard from "../../../components/UI/ShoppingCartCard";
import { useFavorites } from "../../context/FavoriteContext";

const HistoryOrder = () => {
  const { cartItems, removeFromCart } = useFavorites();

  return (
    <div className="history-wrapper">
      <div className="user-shopping-cart">
        <CartSelection
          photo="Photo"
          model="Model"
          year="Year"
          mileage="Mileage"
          fuel="Fuel"
          price="Price"
          className="user-shopping-style"
        />
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
    </div>
  );
};

export default HistoryOrder;
