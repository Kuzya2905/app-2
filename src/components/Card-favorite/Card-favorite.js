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
      <div className="card">
        <button className="like">
          <img
            src={"./images/card-1-liked.svg"}
            alt=""
            onClick={() => {
              onDeleteFavorites(item.id);
            }}
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
            onClick={() => onClickPlus(item)}
          />
        </div>
      </div>
    </>
  );
}

export default CardFavorite;
