import style from "./card.module.scss";
import React from "react";
import AppContext from "../../context";

function CardFavorite({ item }) {
  const { onDeleteFavorites, onAddToCart, cartItems } =
    React.useContext(AppContext);

  const isItemAdded = () => cartItems.some((obj) => obj.idMain === item.idMain);

  const onClickPlus = (item) => {
    onAddToCart(item);
  };

  return (
    <>
      <div className={style.card}>
        <button className={style.like}>
          <img
            src={"./images/card-1-liked.svg"}
            alt=""
            onClick={() => {
              onDeleteFavorites(item.id);
            }}
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
            onClick={() => onClickPlus(item)}
          />
        </div>
      </div>
    </>
  );
}

export default CardFavorite;
