import Card from "../components/Card/Сard";
import Carousel from "../components/Carousel/Carousel";
import AppContext from '../context';
import React from 'react';

function Home() {
  const {isLoading, searchItems, setSearchValue, searchValue, visibleItems} = React.useContext(AppContext);

  const emptyCards = [{idMain: 1}, {idMain: 2}, {idMain: 3}, {idMain: 4}, {idMain: 5}, {idMain: 6}, {idMain: 7}, {idMain: 8}]

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
            {(isLoading ? emptyCards: visibleItems).map((obj) => {
              return (
                <Card
                  key={obj.idMain}
                  obj={obj}
                />
              );
            })}
          </div>
        </div>
      </main>
    
  )
}
export default Home;