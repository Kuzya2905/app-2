import React from "react";
import AppContext from "../../context";

const Info = ({ title, image, description }) => {
  const { comeBack } = React.useContext(AppContext);
  return (
    <div className="cart-state">
      <img className="cart-state-img" src={image} alt="" />
      <h1 className="cart-state-title">{title}</h1>
      <p>{description}</p>
      <button onClick={comeBack}>
        <img
          className="button-pointer"
          src="images\Cart-block\Cart-button-pointer.svg"
          alt=""
        />
        <span className="button-p"> Вернуться назад</span>
      </button>
    </div>
  );
};

export default Info;
