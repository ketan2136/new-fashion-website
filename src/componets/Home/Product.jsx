import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../Redux/action/product.action";
import { FaRupeeSign } from "react-icons/fa";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import { addFavorite } from "../../Redux/action/favorite.action";

function Product() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const productVal = useSelector((state) => state.product);

  console.log("Shop-Data", productVal.product);

   const handleFevorite = (id) => {
     console.log(id);
     dispatch(addFavorite(id));
   };

  return (
    <section className="product spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ul className="filter__controls">
              <li className="active" data-filter="*">
                Best Sellers
              </li>
              <li data-filter=".new-arrivals">New Arrivals</li>
              <li data-filter=".hot-sales">Hot Sales</li>
            </ul>
          </div>
        </div>
        <div className="row product__filter">
          {productVal.product.map((product, i) => {
            if (i < 7) {
              return (
                <Link
                  className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals"
                  to={`/shopDetails/${product.id}`}
                >
                  <div className="product__item" key={product.id}>
                    <div
                      className="product__item__pic set-bg"
                      data-setbg="img/product/product-1.jpg"
                      style={{
                        background: `url(${product.image_preview})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <span className="label">New</span>
                      <ul className="product__hover">
                        <li className="iconHeart">
                          <Link>
                            {/* <img src="img/icon/heart.png" alt /> */}
                            <div>
                              <FavoriteBorderIcon
                                onClick={() => handleFevorite(product.id)}
                              />
                            </div>
                          </Link>
                        </li>
                        <li>
                          <a href="#">
                            <img src="img/icon/compare.png" alt />{" "}
                            <span>Compare</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="img/icon/search.png" alt />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <h6>{product.username}</h6>
                      <a href="#" className="add-cart">
                        + Add To Cart
                      </a>
                      <div className="rating">
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                      </div>
                      <h5>
                        <FaRupeeSign />
                        {product.price}
                      </h5>
                      <div className="product__color__select">
                        <label htmlFor="pc-1">
                          <input type="radio" id="pc-1" />
                        </label>
                        <label className="active black" htmlFor="pc-2">
                          <input type="radio" id="pc-2" />
                        </label>
                        <label className="grey" htmlFor="pc-3">
                          <input type="radio" id="pc-3" />
                        </label>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            }
          })}

          <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
            <div className="product__item">
              <div
                className="product__item__pic set-bg"
                data-setbg="img/product/product-1.jpg"
                style={{ backgroundImage: 'url("img/product/product-1.jpg")' }}
              >
                <span className="label">New</span>
                <ul className="product__hover">
                  <li>
                    <a href="#">
                      <img src="img/icon/heart.png" alt />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/icon/compare.png" alt />{" "}
                      <span>Compare</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/icon/search.png" alt />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product__item__text">
                <h6>Piqué Biker Jacket</h6>
                <a href="#" className="add-cart">
                  + Add To Cart
                </a>
                <div className="rating">
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                </div>
                <h5>$67.24</h5>
                <div className="product__color__select">
                  <label htmlFor="pc-1">
                    <input type="radio" id="pc-1" />
                  </label>
                  <label className="active black" htmlFor="pc-2">
                    <input type="radio" id="pc-2" />
                  </label>
                  <label className="grey" htmlFor="pc-3">
                    <input type="radio" id="pc-3" />
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales">
            <div className="product__item">
              <div
                className="product__item__pic set-bg"
                data-setbg="img/product/product-2.jpg"
                style={{ backgroundImage: 'url("img/product/product-2.jpg")' }}
              >
                <ul className="product__hover">
                  <li>
                    <a href="#">
                      <img src="img/icon/heart.png" alt />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/icon/compare.png" alt />{" "}
                      <span>Compare</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/icon/search.png" alt />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product__item__text">
                <h6>Piqué Biker Jacket</h6>
                <a href="#" className="add-cart">
                  + Add To Cart
                </a>
                <div className="rating">
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                </div>
                <h5>$67.24</h5>
                <div className="product__color__select">
                  <label htmlFor="pc-4">
                    <input type="radio" id="pc-4" />
                  </label>
                  <label className="active black" htmlFor="pc-5">
                    <input type="radio" id="pc-5" />
                  </label>
                  <label className="grey" htmlFor="pc-6">
                    <input type="radio" id="pc-6" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
            <div className="product__item sale">
              <div
                className="product__item__pic set-bg"
                data-setbg="img/product/product-3.jpg"
                style={{ backgroundImage: 'url("img/product/product-3.jpg")' }}
              >
                <span className="label">Sale</span>
                <ul className="product__hover">
                  <li>
                    <a href="#">
                      <img src="img/icon/heart.png" alt />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/icon/compare.png" alt />{" "}
                      <span>Compare</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/icon/search.png" alt />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product__item__text">
                <h6>Multi-pocket Chest Bag</h6>
                <a href="#" className="add-cart">
                  + Add To Cart
                </a>
                <div className="rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-o" />
                </div>
                <h5>$43.48</h5>
                <div className="product__color__select">
                  <label htmlFor="pc-7">
                    <input type="radio" id="pc-7" />
                  </label>
                  <label className="active black" htmlFor="pc-8">
                    <input type="radio" id="pc-8" />
                  </label>
                  <label className="grey" htmlFor="pc-9">
                    <input type="radio" id="pc-9" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales">
            <div className="product__item">
              <div
                className="product__item__pic set-bg"
                data-setbg="img/product/product-4.jpg"
                style={{ backgroundImage: 'url("img/product/product-4.jpg")' }}
              >
                <ul className="product__hover">
                  <li>
                    <a href="#">
                      <img src="img/icon/heart.png" alt />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/icon/compare.png" alt />{" "}
                      <span>Compare</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/icon/search.png" alt />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product__item__text">
                <h6>Diagonal Textured Cap</h6>
                <a href="#" className="add-cart">
                  + Add To Cart
                </a>
                <div className="rating">
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                </div>
                <h5>$60.9</h5>
                <div className="product__color__select">
                  <label htmlFor="pc-10">
                    <input type="radio" id="pc-10" />
                  </label>
                  <label className="active black" htmlFor="pc-11">
                    <input type="radio" id="pc-11" />
                  </label>
                  <label className="grey" htmlFor="pc-12">
                    <input type="radio" id="pc-12" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
            <div className="product__item">
              <div
                className="product__item__pic set-bg"
                data-setbg="img/product/product-5.jpg"
                style={{ backgroundImage: 'url("img/product/product-5.jpg")' }}
              >
                <ul className="product__hover">
                  <li>
                    <a href="#">
                      <img src="img/icon/heart.png" alt />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/icon/compare.png" alt />{" "}
                      <span>Compare</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/icon/search.png" alt />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product__item__text">
                <h6>Lether Backpack</h6>
                <a href="#" className="add-cart">
                  + Add To Cart
                </a>
                <div className="rating">
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                </div>
                <h5>$31.37</h5>
                <div className="product__color__select">
                  <label htmlFor="pc-13">
                    <input type="radio" id="pc-13" />
                  </label>
                  <label className="active black" htmlFor="pc-14">
                    <input type="radio" id="pc-14" />
                  </label>
                  <label className="grey" htmlFor="pc-15">
                    <input type="radio" id="pc-15" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales">
            <div className="product__item sale">
              <div
                className="product__item__pic set-bg"
                data-setbg="img/product/product-6.jpg"
                style={{ backgroundImage: 'url("img/product/product-6.jpg")' }}
              >
                <span className="label">Sale</span>
                <ul className="product__hover">
                  <li>
                    <a href="#">
                      <img src="img/icon/heart.png" alt />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/icon/compare.png" alt />{" "}
                      <span>Compare</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/icon/search.png" alt />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product__item__text">
                <h6>Ankle Boots</h6>
                <a href="#" className="add-cart">
                  + Add To Cart
                </a>
                <div className="rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-o" />
                </div>
                <h5>$98.49</h5>
                <div className="product__color__select">
                  <label htmlFor="pc-16">
                    <input type="radio" id="pc-16" />
                  </label>
                  <label className="active black" htmlFor="pc-17">
                    <input type="radio" id="pc-17" />
                  </label>
                  <label className="grey" htmlFor="pc-18">
                    <input type="radio" id="pc-18" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
            <div className="product__item">
              <div
                className="product__item__pic set-bg"
                data-setbg="img/product/product-7.jpg"
                style={{ backgroundImage: 'url("img/product/product-7.jpg")' }}
              >
                <ul className="product__hover">
                  <li>
                    <a href="#">
                      <img src="img/icon/heart.png" alt />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/icon/compare.png" alt />{" "}
                      <span>Compare</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/icon/search.png" alt />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product__item__text">
                <h6>T-shirt Contrast Pocket</h6>
                <a href="#" className="add-cart">
                  + Add To Cart
                </a>
                <div className="rating">
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                </div>
                <h5>$49.66</h5>
                <div className="product__color__select">
                  <label htmlFor="pc-19">
                    <input type="radio" id="pc-19" />
                  </label>
                  <label className="active black" htmlFor="pc-20">
                    <input type="radio" id="pc-20" />
                  </label>
                  <label className="grey" htmlFor="pc-21">
                    <input type="radio" id="pc-21" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales">
            <div className="product__item">
              <div
                className="product__item__pic set-bg"
                data-setbg="img/product/product-8.jpg"
                style={{ backgroundImage: 'url("img/product/product-8.jpg")' }}
              >
                <ul className="product__hover">
                  <li>
                    <a href="#">
                      <img src="img/icon/heart.png" alt />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/icon/compare.png" alt />{" "}
                      <span>Compare</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/icon/search.png" alt />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product__item__text">
                <h6>Basic Flowing Scarf</h6>
                <a href="#" className="add-cart">
                  + Add To Cart
                </a>
                <div className="rating">
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                </div>
                <h5>$26.28</h5>
                <div className="product__color__select">
                  <label htmlFor="pc-22">
                    <input type="radio" id="pc-22" />
                  </label>
                  <label className="active black" htmlFor="pc-23">
                    <input type="radio" id="pc-23" />
                  </label>
                  <label className="grey" htmlFor="pc-24">
                    <input type="radio" id="pc-24" />
                  </label>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Product;
