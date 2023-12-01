import { useContext } from "react";
import React from "react";
import AppContext from "../../context";

function CardOrder({ item, onDeleteFavorites, orders }) {
  const { onAddToCart, cartItems, favorites, onAddToFavorites } =
    useContext(AppContext);
  const isItemAdded = () => cartItems.some((obj) => obj.idMain === item.idMain);

  console.log(item);

  const onClickPlus = () => {
    onAddToCart(item);
  };

  const onClickFavotite = () => {
    onAddToFavorites(item);
  };

  const isItemFavorite = () =>
    favorites.some((elem) => elem.idMain === item.idMain);

  return (
    <div className="card">
      <button className="like">
        <img
          src={
            isItemFavorite()
              ? "./images/card-1-liked.svg"
              : "./images/card-1-unliked.svg"
          }
          alt=""
          onClick={onClickFavotite}
        />
      </button>
      <img className="img" src={item.img} alt="card-img" />
      <h2 className="title">{item.name}</h2>
      <div className="info">
        <div className="price">
          <h2 className="title">ЦЕНА:</h2>
          <span className="sum">{item.price} руб.</span>
        </div>
        <img
          className="btn"
          src={
            isItemAdded()
              ? "./images/card-1-plus-active.svg"
              : "./images/card-1-plus.svg"
          }
          alt=""
          onClick={() => onClickPlus()}
        />
      </div>
    </div>
  );
}

export default CardOrder;
