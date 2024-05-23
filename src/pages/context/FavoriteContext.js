import React, { createContext, useContext, useState } from "react";

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const addFavorite = (carId) => {
    if (!favorites.includes(carId)) {
      setFavorites([...favorites, carId]);
    }
  };

  const removeFavorite = (carId) => {
    setFavorites(favorites.filter((id) => id !== carId));
  };

  const addToCart = (car) => {
    setCartItems([...cartItems, car]);
  };

  const removeFromCart = (carId) => {
    setCartItems(cartItems.filter((item) => item.pk_car_id !== carId));
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoriteContext);
