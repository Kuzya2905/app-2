import { useContext } from "react";
import style from "./card.module.scss";
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
    <div className={style.card}>
      <button className={style.like}>
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
      <img className={style.img} src={item.img} alt="card-img" />
      <h2 className={style.title}>{item.name}</h2>
      <div className={style.info}>
        <div className={style.price}>
          <h2 className={style.title}>ЦЕНА:</h2>
          <span className={style.sum}>{item.price} руб.</span>
        </div>
        <img
          className={style.btn}
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
