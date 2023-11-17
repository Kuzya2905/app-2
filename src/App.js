import Header from "./components/header/header";
import Card from "./components/card/card";
import Carousel from "./components/carousel/carousel";
import axios from "axios";
import Cart from "./components/cart-block/cart";
import React, { useEffect } from "react";

function App() {
  const [items, setItems] = React.useState([]);
  const [visibleItems, setVisibleItems] = React.useState(items);

  const [cartItems, setCartItems] = React.useState([]);
  const [stateCart, setStateCart] = React.useState(false);

  const [favorites, setFavorites] = React.useState([]);

  const [searchValue, setSearchValue] = React.useState("");

  const [totalSumcart, setTotalSumCart] = React.useState();

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
    axios.post("https://655672a384b36e3a431fc526.mockapi.io/Favorite", obj);
    setFavorites((prev) => [...prev, obj]);
  };

  const onDeleteItemCart = (id) => {
    axios.delete(`https://654f47aa358230d8f0cd2b74.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
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

  const sumCart = (cartItems) => {
    let sum = cartItems.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
    sum = Math.round(sum + sum * 0.05);
    setTotalSumCart(sum);
    return sum;
  };

  React.useEffect(() => {
    sumCart(cartItems);
  }, [cartItems]);

  return (
    <div className="wrapper">
      <Header
        openCart={() => {
          setStateCart(!stateCart);
        }}
        totalSumcart={totalSumcart}
      />
      <main>
        <Carousel />
        {/* Карточки товаров */}
        <div className="title-cards">
          <h1 className="title">Все кроссовки</h1>
          <input
            onChange={(event) => {
              setSearchValue(event.target.value);
              searchItems(event.target.value);
            }}
            value={searchValue}
            className="search"
            type="search"
            placeholder="Поиск..."
          />
        </div>
        <div className="cards">
          {visibleItems.map((obj, index) => {
            return (
              <Card
                onAddToFavorites={onAddToFavorites}
                key={index}
                obj={obj}
                onAddToCart={onAddToCart}
                cartItems={cartItems}
              />
            );
          })}
        </div>
      </main>
      {stateCart ? (
        <Cart
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
