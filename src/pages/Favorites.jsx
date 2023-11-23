import React from "react";
import CardFavorite from "../components/Card-favorite/Card-favorite";
import AppContext from "../context";
import { Link } from "react-router-dom";

function Favorites() {
  const {favorites, cartItems, onDeleteFavorites, onAddToCart} = React.useContext(AppContext)
  
  return (
    <main>
        {/* Карточки товаров */}
        <div className="block-cards">
          <div className="top-block-cards">
            <h1 className="title">Закладки</h1>
          </div>
          <div className="cards">
            {favorites.length === 0 ? 

              <div className="empty-page">
                <img src="images\Favorties\Smile.png" alt="" />
                <h1>{`Закладок нет :(`}</h1>
                <p>Вы ничего не добавляли в закладки</p>
                <Link to='/'>
                  <button >
                    <img
                      className="button-pointer"
                      src="images\Cart-block\Cart-button-pointer.svg"
                      alt=""
                    />
                    <span className="button-p"> Вернуться назад</span>
                  </button>
                </Link>
              </div>

            : favorites.map((item) => {
              return (
                <CardFavorite 
                key={item.idMain}
                favorites={favorites}
                item={item}
                onAddToCart={onAddToCart}
                onDeleteFavorites={onDeleteFavorites}
                cartItems={cartItems}
                />
              )
            })}
          </div>
        </div>
      </main>
  )
}
export default Favorites;