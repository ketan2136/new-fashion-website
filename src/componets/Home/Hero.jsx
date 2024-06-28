import React from "react";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <OwlCarousel
        className="hero__slider owl-carousel"
        items={1}
        loop
        margin={10}
        nav
      >
        <div
          className="hero__items set-bg"
          data-setbg="img/hero/hero-1.jpg"
          style={{ backgroundImage: 'url("img/hero/hero-1.jpg")' }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-7 col-md-8">
                <div className="hero__text">
                  <h6>Summer Collection</h6>
                  <h2>Fall - Winter Collections 2024</h2>
                  <p>
                    A specialist label creating luxury essentials. Ethically
                    crafted with an unwavering commitment to exceptional
                    quality.
                  </p>
                  <Link to={"/shop"} className="primary-btn hero-button">
                    Shop now <span className="arrow_right" />
                  </Link>
                  <div className="hero__social">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-pinterest" />
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="hero__items set-bg"
          data-setbg="img/hero/hero-2.jpg"
          style={{ backgroundImage: 'url("img/hero/hero-2.jpg")' }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-7 col-md-8">
                <div className="hero__text">
                  <h6>Summer Collection</h6>
                  <h2>Fall - Winter Collections 2024</h2>
                  <p>
                    A specialist label creating luxury essentials. Ethically
                    crafted with an unwavering commitment to exceptional
                    quality.
                  </p>
                  <Link to={"/shop"} className="primary-btn">
                    Shop now <span className="arrow_right" />
                  </Link>
                  <div className="hero__social">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-pinterest" />
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </section>
  );
}

export default Hero;
