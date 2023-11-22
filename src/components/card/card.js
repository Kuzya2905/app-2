import style from "./card.module.scss";
import React, { useEffect } from "react";
import ContentLoader from "react-content-loader";

function Card({
  obj,
  onAddToCart,
  onAddToFavorites,
  cartItems,
  favorites,
  visibleItems,
  loading,
}) {
  const [stateBtnPlus, setStateBtnPlus] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  useEffect(() => {
    if (cartItems.find((item) => item.img === obj.img)) {
      setStateBtnPlus(true);
    }
  }, [cartItems, obj.img]);

  React.useEffect(() => {
    if (favorites.find((elem) => elem.img === obj.img)) {
      setIsFavorite(true);
    }
  }, [favorites, obj.img]);

  const onClickPlus = () => {
    setStateBtnPlus(!stateBtnPlus);
    onAddToCart(obj);
  };

  const onClickFavotite = () => {
    setIsFavorite(!isFavorite);
    onAddToFavorites(obj);
  };

  return (
    <div className={style.card}>
      <button className={style.like}>
        <img
          src={
            isFavorite
              ? "./images/card-1-liked.svg"
              : "./images/card-1-unliked.svg"
          }
          alt=""
          onClick={onClickFavotite}
        />
      </button>
      <img className={style.img} src={obj.img} alt="card-img" />
      <h2 className={style.title}>{obj.name}</h2>
      <div className={style.info}>
        <div className={style.price}>
          <h2 className={style.title}>ЦЕНА:</h2>
          <span className={style.sum}>{obj.price} руб.</span>
        </div>
        <img
          className={style.btn}
          src={
            stateBtnPlus
              ? "./images/card-1-plus-active.svg"
              : "./images/card-1-plus.svg"
          }
          alt=""
          onClick={onClickPlus}
        />
      </div>
    </div>
  );
}

export default Card;
