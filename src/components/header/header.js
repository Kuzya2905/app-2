function Header(props) {
  return (
    <header className="header">
      <div className="header-left">
        <a href="http://localhost:3000/" className="logo">
          <img src="./images/header_logo.svg" alt="logo" />
        </a>
        <div className="info">
          <div className="title">REACT SNEAKERS</div>
          <div className="text">Магазин лучших кроссовок</div>
        </div>
      </div>
      <ul className="header-right">
        <li className="cart" onClick={props.openCart}>
          <img src="./images/header_cart.svg" alt="cart" />
          <span className="text">{props.totalSumcart} руб.</span>
        </li>
        <li className="bookmarks" color="color_red">
          <img src="./images/header_bookmarks.svg" alt="bookmarks" />
          <span className="text">Закладки</span>
        </li>
        <li className="profile">
          <img src="./images/header_profile.svg" alt="profile" />
          <span className="text">Профиль</span>
        </li>
      </ul>
    </header>
  );
}

export default Header;
