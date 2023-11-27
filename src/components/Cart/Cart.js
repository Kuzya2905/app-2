import React from "react";
import AppContext from "../../context";
import Info from "../Info/Info";

function Cart() {
  const {
    totalSumCart,
    stateCart,
    comeBack,
    onDeleteItemCart,
    cartItems,
    sendOrder,
    stateOrder,
    orders,
    orderBtnLoading,
  } = React.useContext(AppContext);

  if (stateCart) {
    const body = document.querySelector("body");
    body.className = "body-hidden";
  }

  return (
    <div
      className="overlay"
      onClick={(e) => {
        if (e.target.className === "overlay") {
          comeBack();
        }
      }}
    >
      <div className="cart-block">
        <h2 className="cart-block-title">
          Корзина
          <img
            className="cart-block-close"
            src="./images/Cart-block/cart-close.svg"
            alt=""
            onClick={comeBack}
          />
        </h2>
        {cartItems.length === 0 && !stateOrder ? (
          <Info
            title="Корзина пустая"
            description="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            image="images\Cart-block\Cart-empty-box.png"
          />
        ) : !stateOrder ? (
          <div className="cards-cart">
            {cartItems.map((item) => {
              return (
                <div key={item.idMain} className="card-cart">
                  <img className="card-cart-img" src={item.img} alt="" />
                  <div className="info">
                    <h2 className="info-h2">{item.name}</h2>
                    <span className="info-price">{item.price} руб.</span>
                  </div>
                  <img
                    className="delete"
                    src="./images/Cart-block/card-delete.svg"
                    alt=""
                    onClick={() => {
                      onDeleteItemCart(item.id);
                    }}
                  />
                </div>
              );
            })}
            <div className="footer">
              <div className="total-sum">
                <p>Итого:</p>
                <span className="line"></span>
                <span className="sum">{totalSumCart} руб.</span>
              </div>
              <div className="tax">
                <p>Налог 5%:</p>
                <span className="line"></span>
                <span className="sum">
                  {Math.round(
                    cartItems.reduce((sum, item) => {
                      return sum + item.price;
                    }, 0) * 0.05
                  )}{" "}
                  руб.
                </span>
              </div>
              <div className="button">
                <button
                  disabled={orderBtnLoading}
                  onClick={sendOrder}
                  className="btn"
                >
                  Оформить заказ
                </button>
              </div>
            </div>
          </div>
        ) : (
          <Info
            image="images\Cart-block\Order-complete.png"
            title="Заказ оформлен!"
            description={`Ваш заказ #${
              orders.length - 1
            } скоро будет передан курьерской доставке`}
          />
        )}
      </div>
    </div>
  );
}

export default Cart;
