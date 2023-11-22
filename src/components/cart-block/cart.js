import React from "react";

function Cart({
  cartItems,
  onCloseCart,
  stateCart,
  onDeleteItemCart,
  totalSumCart,
}) {
  if (stateCart) {
    const body = document.querySelector("body");
    body.className = "body-hidden";
  }

  return (
    <div
      className="overlay"
      onClick={(e) => {
        if (e.target.className === "overlay") {
          onCloseCart();
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
            onClick={onCloseCart}
          />
        </h2>
        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <img
              className="cart-empty-box"
              src="./images/Cart-block/Cart-empty-box.png"
              alt=""
            />
            <h1 className="cart-empty_title">Корзина пустая</h1>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button onClick={onCloseCart}>
              <img
                className="button-pointer"
                src="./images/Cart-block/Cart-empty-button-pointer.svg"
                alt=""
              />
              <span className="button-p"> Вернуться назад</span>
            </button>
          </div>
        ) : (
          <div className="cards-cart">
            {cartItems.map((item) => {
              return (
                <div key={item.id} className="card-cart">
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
