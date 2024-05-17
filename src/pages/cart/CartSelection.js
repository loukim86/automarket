const CartSelection = ({ photo, model, year, mileage, fuel, price, className }) => {
  return (
    <div className={`shopping-cart-details ${className}`}>
      <div className="shopping-cart-info th-photo">{photo}</div>
      <div className="shopping-cart-info th-model">{model}</div>
      <div className="shopping-cart-info th-year">{year}</div>
      <div className="shopping-cart-info th-mileage">{mileage}</div>
      <div className="shopping-cart-info th-fuel">{fuel}</div>
      <div className="shopping-cart-info th-price">{price}</div>
      <div className="shopping-cart-info empty-cell"></div>
    </div>
  );
};
export default CartSelection;
