import Header from "./components/Header/Header";
import axios from "axios";
import Cart from "./components/Cart-block/Cart";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Favorites from "./pages/Favorites.jsx";

function App() {
  const [items, setItems] = React.useState([]);
  const [visibleItems, setVisibleItems] = React.useState(items);

  const [cartItems, setCartItems] = React.useState([]);
  const [stateCart, setStateCart] = React.useState(false);

  const [favorites, setFavorites] = React.useState([]);

  const [searchValue, setSearchValue] = React.useState("");

  const [totalSumCart, setTotalSumCart] = React.useState();

  useEffect(() => {
    axios
      .get("https://654f47aa358230d8f0cd2b74.mockapi.io/Items")
      .then((response) => setItems(response.data));

    axios
      .get("https://654f47aa358230d8f0cd2b74.mockapi.io/cart")
      .then((response) => setCartItems(response.data));

    axios
      .get("https://655672a384b36e3a431fc526.mockapi.io/Favorite")
      .then((response) => setFavorites(response.data));
  }, []);

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  useEffect(() => {
    setVisibleItems(items);
  }, [items]);

  const onAddToCart = (obj) => {
    axios
      .post("https://654f47aa358230d8f0cd2b74.mockapi.io/cart", obj)
      .then(() =>
        axios
          .get("https://654f47aa358230d8f0cd2b74.mockapi.io/cart")
          .then((response) => setCartItems(response.data))
      );
  };
  const onAddToFavorites = (obj) => {
    axios
      .post("https://655672a384b36e3a431fc526.mockapi.io/Favorite", obj)
      .then(() =>
        axios
          .get("https://655672a384b36e3a431fc526.mockapi.io/Favorite")
          .then((response) => setFavorites(response.data))
      );
  };

  const onDeleteItemCart = (id) => {
    axios.delete(`https://654f47aa358230d8f0cd2b74.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onDeleteFavorites = (id) => {
    axios.delete(`https://655672a384b36e3a431fc526.mockapi.io/Favorite/${id}`);
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  const searchItems = (value) => {
    if (value) {
      return setVisibleItems(
        visibleItems.filter((item) => {
          return item.name.toUpperCase().includes(value.toUpperCase());
        })
      );
    } else {
      return setVisibleItems(items);
    }
  };

  const onCloseCart = () => {
    setStateCart(!stateCart);
    const body = document.querySelector("body");
    body.className = "";
  };

  React.useEffect(() => {
    sumCart(cartItems);
  }, [cartItems]);

  const sumCart = (cartItems) => {
    let sum = cartItems.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
    sum = Math.round(sum + sum * 0.05);
    setTotalSumCart(sum);
  };

  const openCart = () => {
    setStateCart(!stateCart);
  };

  return (
    <div className="wrapper">
      <Header openCart={openCart} totalSumCart={totalSumCart} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              searchItems={searchItems}
              setSearchValue={setSearchValue}
              searchValue={searchValue}
              visibleItems={visibleItems}
              onAddToFavorites={onAddToFavorites}
              onAddToCart={onAddToCart}
              cartItems={cartItems}
              stateCart={stateCart}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              favorites={favorites}
              onAddToCart={onAddToCart}
              onDeleteFavorites={onDeleteFavorites}
            />
          }
        ></Route>
      </Routes>

      {stateCart ? (
        <Cart
          totalSumCart={totalSumCart}
          sumCart={sumCart}
          stateCart={stateCart}
          cartItems={cartItems}
          onCloseCart={onCloseCart}
          onDeleteItemCart={onDeleteItemCart}
        />
      ) : null}
    </div>
  );
}

export default App;
