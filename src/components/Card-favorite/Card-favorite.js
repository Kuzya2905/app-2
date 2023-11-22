import style from "./card.module.scss";
import React from "react";

function CardFavorite({
  item,
  onDeleteFavorites,
  onAddToCart,
  stateCart,
  cartItems,
}) {
  const [stateBtnPlus, setStateBtnPlus] = React.useState(false);

  const onClickPlus = (item) => {
    setStateBtnPlus(!stateBtnPlus);
    onAddToCart(item, stateBtnPlus);
  };
  if (stateCart) {
    setStateBtnPlus(false);
  }

  React.useEffect(() => {
    if (cartItems.find((elem) => elem.img === item.img)) {
      setStateBtnPlus(true);
    }
  }, [cartItems, item.img]);

  return (
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
            stateBtnPlus
              ? "./images/card-1-plus-active.svg"
              : "./images/card-1-plus.svg"
          }
          alt=""
          onClick={() => onClickPlus(item)}
        />
      </div>
    </div>
  );
}

export default CardFavorite;
