import cart from '../../assets/img/cart1.svg'
import { useFavorites } from '../../pages/context/FavoriteContext';
import '../../styles/cart-icon.css'

const CartIcon = () => {
    const { cartItems } = useFavorites();
    const cartItemCount = cartItems.length;
  
    return (
      <div className="cart-icon-container">
      <img src={cart} alt="" className='cart-icon' />
        {cartItemCount > 0 && <span className="cart-item-count">{cartItemCount}</span>}
      </div>
    );
  };

export default CartIcon