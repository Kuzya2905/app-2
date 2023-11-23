import React from "react";
import CardOrder from "../components/Card-order/Card-order";
import AppContext from "../context";
import { Link } from "react-router-dom";

function Favorites() {
  const {orders} = React.useContext(AppContext)
  console.log(orders)
  
  return (
    <main>
        {/* Карточки товаров */}
        <div className="block-cards">
          <div className="top-block-cards">
            <h1 className="title">Заказы</h1>
          </div>
          <div className="cards">
            {orders.length === 0 ? 
              <div className="empty-page">
                <img src="images\Orders\Smile.jpg" alt="" />
                <h1>{`У вас нет заказов :(`}</h1>
                <p>Вы нищеброд?<br />Оформите хотя бы один заказ.</p>
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