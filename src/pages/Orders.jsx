import React from "react";
import CardOrder from "../components/Card-order/Card-order";
import AppContext from "../context";
import { Link } from "react-router-dom";
import ContentLoader from "react-content-loader";

function Favorites() {
  const {orders, isLoading} = React.useContext(AppContext)
  console.log(orders)

  const emptyCards = [{idMain: 1}, {idMain: 2}, {idMain: 3}, {idMain: 4}, {idMain: 5}, {idMain: 6}, {idMain: 7}, {idMain: 8}]
  
  return (
    <main>
        {/* Карточки товаров */}
        <div className="block-cards">
          <div className="top-block-cards">
            <h1 className="title">Заказы</h1>
          </div>
          <div className="cards">
            {isLoading ? emptyCards.map((item) => {
              return (
                <ContentLoader
                  key={item.idMain}
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
              )
            }):
            orders.length === 0 ? 
              <div className="empty-page">
                <img src="images\Orders\Smile.jpg" alt="" />
                <h1>{`У вас нет заказов :(`}</h1>
                <p>Заказов нет<br />Оформите хотя бы один заказ.</p>
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
            : orders.map((item)=> {
              return Object.keys(item).map(elem => {
                return typeof(item[elem]) !== 'string' ? <CardOrder orders={orders} key={item[elem].idMain} item={item[elem]}/>: null
              })
            })
            }
          </div>
        </div>
      </main>
  )
}
export default Favorites;