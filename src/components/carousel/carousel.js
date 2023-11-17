function Carousel() {
  return (
    <div id="carouselExample" className="carousel slide">
      <a href="http://localhost:3000/">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./images/main_carousel_1.jpg"
              className="d-block w-100"
              alt="carousel"
            />
          </div>
          <div className="carousel-item">
            <img
              src="./images/main_carousel_1.jpg"
              className="d-block w-100"
              alt="carousel"
            />
          </div>
          <div className="carousel-item">
            <img
              src="./images/main_carousel_1.jpg"
              className="d-block w-100"
              alt="carousel"
            />
          </div>
        </div>
      </a>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <img className="button-img" src="./images/carousel_button.svg" alt="" />
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <img className="button-img" src="./images/carousel_button.svg" alt="" />
      </button>
    </div>
  );
}

export default Carousel;
