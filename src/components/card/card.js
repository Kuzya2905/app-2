import style from "./card.module.scss";
import React from "react";
import ContentLoader from "react-content-loader";
import AppContext from "../../context";

function Card({ obj }) {
  const { onAddToCart, onAddToFavorites, cartItems, favorites, isLoading } =
    React.useContext(AppContext);

  const onClickPlus = () => {
    onAddToCart(obj);
  };

  const onClickFavotite = () => {
    onAddToFavorites(obj);
  };

  const isItemAdded = () => {
    return cartItems.some((item) => item.idMain === obj.idMain);
  };

  const isItemFavorite = () =>
    favorites.some((elem) => elem.idMain === obj.idMain);

  return (
    <>
      {isLoading ? (
        <ContentLoader
          speed={2}
          width={210}
          height={260}
          viewBox="0 0 150 187"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="91" />
          <rect x="0" y="108" rx="3" ry="3" width="150" height="15" />
          <rect x="0" y="128" rx="3" ry="3" width="93" height="15" />
          <rect x="0" y="160" rx="8" ry="8" width="80" height="24" />
          <rect x="115" y="154" rx="8" ry="8" width="32" height="32" />
        </ContentLoader>
      ) : (
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
                isItemAdded()
                  ? "./images/card-1-plus-active.svg"
                  : "./images/card-1-plus.svg"
              }
              alt=""
              onClick={onClickPlus}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
