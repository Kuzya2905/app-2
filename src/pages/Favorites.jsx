import React from "react";
import style from "./card.module.scss";

function Favorites({favorites, onAddToCart, onDeleteFavorites, stateCart}) {
  const [stateBtnPlus, setStateBtnPlus] = React.useState(false);

  const onClickPlus = () => {
    setStateBtnPlus(!stateBtnPlus);
    onAddToCart(favorites, stateBtnPlus);
  };
  if(stateCart){
    setStateBtnPlus(false)
  }
  console.log(stateCart)
  
  return (
    <main>
        {/* Карточки товаров */}
        <div className="block-cards">
          <div className="top-block-cards">
            <h1 className="title">Закладки</h1>
          </div>
          <div className="cards">
            {favorites.map((item) => {
              return (
                <div key={item.id} className={style.card}>
                  <button className={style.like}>
                    <img
                      src={"./images/card-1-liked.svg"}
                      alt=""
                      onClick={()=> {
                        onDeleteFavorites(item.id)
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
                      onClick={onClickPlus}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </main>
  )
}
export default Favorites;