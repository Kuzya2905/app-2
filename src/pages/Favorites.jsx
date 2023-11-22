import React from "react";
import CardFavorite from "../components/Card-favorite/Card-favorite";

function Favorites({favorites, onAddToCart, onDeleteFavorites, stateCart, cartItems}) {
  
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
                <CardFavorite 
                key={item.id}
                favorites={favorites}
                item={item}
                onAddToCart={onAddToCart}
                onDeleteFavorites={onDeleteFavorites}
                stateCart={stateCart}
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