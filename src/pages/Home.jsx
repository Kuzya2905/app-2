import Card from '../components/Card/Card';
import Carousel from "../components/Carousel/Carousel";

function Home({searchItems, setSearchValue, searchValue, visibleItems, onAddToFavorites, onAddToCart, cartItems, stateCart, favorites}) {
  return (
    <main>
        <Carousel />
        {/* Карточки товаров */}
        <div className="block-cards">
          <div className="top-block-cards">
            <h1 className="title">Все кроссовки</h1>
            <input
              onChange={(event) => {
                setSearchValue(event.target.value);
                searchItems(event.target.value);
              }}
              value={searchValue}
              className="search"
              type="search"
              placeholder="Поиск..."
            />
          </div>
          <div className="cards">
            {visibleItems.map((obj, index) => {
              return (
                <Card
                  visibleItems = {visibleItems}
                  stateCart={stateCart}
                  onAddToFavorites={onAddToFavorites}
                  key={obj.img}
                  obj={obj}
                  onAddToCart={onAddToCart}
                  cartItems={cartItems}
                  favorites={favorites}
                />
              );
            })}
          </div>
        </div>
      </main>
    
  )
}
export default Home;