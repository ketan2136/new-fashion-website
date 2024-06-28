import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";
import { addTocart } from "../../Redux/slice/cartSlice";
// import { addTocart } from "../../Redux/slice/cartSlice";

function ShopDetailsProduct() {
  const { id } = useParams();
  const [selectedRadio, setSelectedRadio] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const productVal = useSelector((state) => state.product);
  const shopData = productVal.product.filter((v) => v.id === parseInt(id));

  console.log("shopData", shopData.color);

  const handlePluse = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handelAddCart = (id) => {
    console.log("shopCart", id, selectedRadio, quantity);
    dispatch(addTocart({ cid: id, qty: quantity, sizeF: selectedRadio }));
  };

  return (
    <section className="shop-details">
      {shopData.map((v) => (
        <>
          <div className="product__details__pic">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="product__details__breadcrumb">
                    <a href="./index.html">Home</a>
                    <a href="./shop.html">Shop</a>
                    <span>Product DetailsS</span>
                    <span>Product DetailsS</span>
                  </div>
                </div>
              </div>
              {/* <div className="row"> */}
              <>
                {/* <div className="col-lg-3 col-md-3">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#tabs-1"
                        role="tab"
                      >
                        <div
                          className="product__thumb__pic set-bg"
                          data-setbg="img/shop-details/thumb-1.png"
                        ></div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#tabs-2"
                        role="tab"
                      >
                        <div
                          className="product__thumb__pic set-bg"
                          data-setbg="img/shop-details/thumb-2.png"
                        ></div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#tabs-3"
                        role="tab"
                      >
                        <div
                          className="product__thumb__pic set-bg"
                          data-setbg="img/shop-details/thumb-3.png"
                        ></div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#tabs-4"
                        role="tab"
                      >
                        <div
                          className="product__thumb__pic set-bg"
                          data-setbg="img/shop-details/thumb-4.png"
                        >
                          <i className="fa fa-play" />
                        </div>
                      </a>
                    </li>
                  </ul>
                </div> */}
                {/* <div className="col-lg-6 col-md-9"> */}
                <div className="tab-content">
                  <div
                    className="tab-pane active"
                    id="tabs-1"
                    role="tabpanel"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <div
                      className="product__details__pic__item"
                      style={{ width: "350px", height: "100%" }}
                    >
                      <img src={v.image_preview} alt />
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-2" role="tabpanel">
                    <div className="product__details__pic__item">
                      <img src="img/shop-details/product-big-3.png" alt />
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-3" role="tabpanel">
                    <div className="product__details__pic__item">
                      <img src="img/shop-details/product-big.png" alt />
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-4" role="tabpanel">
                    <div className="product__details__pic__item">
                      <img src="img/shop-details/product-big-4.png" alt />
                      <a
                        href="https://www.youtube.com/watch?v=8PJ3_p7VqHw&list=RD8PJ3_p7VqHw&start_radio=1"
                        className="video-popup"
                      >
                        <i className="fa fa-play" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* </div> */}
              </>
              {/* // ))} */}
              {/* </div> */}
            </div>
          </div>
          <div className="product__details__content">
            <div className="container">
              {/* {shopData.map((v) => ( */}
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <div className="product__details__text">
                    <h4>{v.username}</h4>
                    <div className="rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-o" />
                      <span> - 5 Reviews</span>
                    </div>
                    <h3>
                      <FaRupeeSign />
                      {v.price}.00 <span>70.00</span>
                    </h3>
                    <p>{v.description}</p>

                    <div className="product__details__option">
                      <div className="product__details__option__size">
                        <span>Size:</span>
                        <label htmlFor="xxl">
                          {v.clotheSizes.split(",").map((value) => (
                            <>
                              <label
                                className={
                                  selectedRadio == value ? "actvie" : ""
                                }
                                htmlFor={value}
                              >
                                {value}
                              </label>
                              <input
                                required
                                type="radio"
                                className={
                                  selectedRadio == value ? "actvie" : ""
                                }
                                onClick={() => setSelectedRadio(value)}
                                value={value}
                                id={value}
                                name="clotheSizes"
                              />
                            </>
                          ))}
                        </label>
                      </div>
                      <div className="product__details__option__color">
                        <span>Color:</span>
                        <label style={{ backgroundColor: v.color }}>
                          <input type="radio" id="sp-1" />
                        </label>
                      </div>
                    </div>

                    <div className="product__details__cart__option">
                      <div className="quantity">
                        <button onClick={handlePluse}>+</button>
                        <div className="pro-qty">
                          {/* <input type="text" defaultValue={1} /> */}
                          {quantity}
                        </div>
                        <button onClick={handleMinus}>-</button>
                      </div>
                      <a
                        href="#"
                        className="primary-btn"
                        onClick={() => handelAddCart(v.id)}
                      >
                        add to cart
                      </a>
                    </div>
                    <div className="product__details__btns__option">
                      <a href="#">
                        <i className="fa fa-heart" /> add to wishlist
                      </a>
                      <a href="#">
                        <i className="fa fa-exchange" /> Add To Compare
                      </a>
                    </div>
                    <div className="product__details__last__option">
                      <h5>
                        <span>Guaranteed Safe Checkout</span>
                      </h5>
                      <img src="img/shop-details/details-payment.png" alt />
                      {/* {shopData.map((v) => ( */}
                      <ul>
                        <li>
                          <span>SKU:</span> {v.sku}
                        </li>
                        {/* <li>
                        <span>Categories:</span> {v.categories}
                      </li> */}
                        <li>
                          <span>Tag:</span> {v.categories}
                        </li>
                      </ul>
                      {/* ))} */}
                    </div>
                  </div>
                </div>
              </div>
              {/* ))} */}

              <div className="row">
                <div className="col-lg-12">
                  <div className="product__details__tab">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-toggle="tab"
                          href="#tabs-5"
                          role="tab"
                        >
                          Description
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tabs-6"
                          role="tab"
                        >
                          Customer Previews(5)
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tabs-7"
                          role="tab"
                        >
                          Additional information
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div
                        className="tab-pane active"
                        id="tabs-5"
                        role="tabpanel"
                      >
                        <div className="product__details__tab__content">
                          <p className="note">
                            Nam tempus turpis at metus scelerisque placerat
                            nulla deumantos solicitud felis. Pellentesque diam
                            dolor, elementum etos lobortis des mollis ut risus.
                            Sedcus faucibus an sullamcorper mattis drostique des
                            commodo pharetras loremos.
                          </p>
                          <div className="product__details__tab__content__item">
                            <h5>Products Infomation</h5>
                            <p>
                              A Pocket PC is a handheld computer, which features
                              many of the same capabilities as a modern PC.
                              These handy little devices allow individuals to
                              retrieve and store e-mail messages, create a
                              contact file, coordinate appointments, surf the
                              internet, exchange text messages and more. Every
                              product that is labeled as a Pocket PC must be
                              accompanied with specific software to operate the
                              unit and must feature a touchscreen and touchpad.
                            </p>
                            <p>
                              As is the case with any new technology product,
                              the cost of a Pocket PC was substantial during
                              it’s early release. For approximately $700.00,
                              consumers could purchase one of top-of-the-line
                              Pocket PCs in 2003. These days, customers are
                              finding that prices have become much more
                              reasonable now that the newness is wearing off.
                              For approximately $350.00, a new Pocket PC can now
                              be purchased.
                            </p>
                          </div>
                          <div className="product__details__tab__content__item">
                            <h5>Material used</h5>
                            <p>
                              Polyester is deemed lower quality due to its none
                              natural quality’s. Made from synthetic materials,
                              not natural like wool. Polyester suits become
                              creased easily and are known for not being
                              breathable. Polyester suits tend to have a shine
                              to them compared to wool and cotton suits, this
                              can make the suit look cheap. The texture of
                              velvet is luxurious and breathable. Velvet is a
                              great choice for dinner party jacket and can be
                              worn all year round.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="tabs-6" role="tabpanel">
                        <div className="product__details__tab__content">
                          <div className="product__details__tab__content__item">
                            <h5>Products Infomation</h5>
                            <p>
                              A Pocket PC is a handheld computer, which features
                              many of the same capabilities as a modern PC.
                              These handy little devices allow individuals to
                              retrieve and store e-mail messages, create a
                              contact file, coordinate appointments, surf the
                              internet, exchange text messages and more. Every
                              product that is labeled as a Pocket PC must be
                              accompanied with specific software to operate the
                              unit and must feature a touchscreen and touchpad.
                            </p>
                            <p>
                              As is the case with any new technology product,
                              the cost of a Pocket PC was substantial during
                              it’s early release. For approximately $700.00,
                              consumers could purchase one of top-of-the-line
                              Pocket PCs in 2003. These days, customers are
                              finding that prices have become much more
                              reasonable now that the newness is wearing off.
                              For approximately $350.00, a new Pocket PC can now
                              be purchased.
                            </p>
                          </div>
                          <div className="product__details__tab__content__item">
                            <h5>Material used</h5>
                            <p>
                              Polyester is deemed lower quality due to its none
                              natural quality’s. Made from synthetic materials,
                              not natural like wool. Polyester suits become
                              creased easily and are known for not being
                              breathable. Polyester suits tend to have a shine
                              to them compared to wool and cotton suits, this
                              can make the suit look cheap. The texture of
                              velvet is luxurious and breathable. Velvet is a
                              great choice for dinner party jacket and can be
                              worn all year round.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="tabs-7" role="tabpanel">
                        <div className="product__details__tab__content">
                          <p className="note">
                            Nam tempus turpis at metus scelerisque placerat
                            nulla deumantos solicitud felis. Pellentesque diam
                            dolor, elementum etos lobortis des mollis ut risus.
                            Sedcus faucibus an sullamcorper mattis drostique des
                            commodo pharetras loremos.
                          </p>
                          <div className="product__details__tab__content__item">
                            <h5>Products Infomation</h5>
                            <p>
                              A Pocket PC is a handheld computer, which features
                              many of the same capabilities as a modern PC.
                              These handy little devices allow individuals to
                              retrieve and store e-mail messages, create a
                              contact file, coordinate appointments, surf the
                              internet, exchange text messages and more. Every
                              product that is labeled as a Pocket PC must be
                              accompanied with specific software to operate the
                              unit and must feature a touchscreen and touchpad.
                            </p>
                            <p>
                              As is the case with any new technology product,
                              the cost of a Pocket PC was substantial during
                              it’s early release. For approximately $700.00,
                              consumers could purchase one of top-of-the-line
                              Pocket PCs in 2003. These days, customers are
                              finding that prices have become much more
                              reasonable now that the newness is wearing off.
                              For approximately $350.00, a new Pocket PC can now
                              be purchased.
                            </p>
                          </div>
                          <div className="product__details__tab__content__item">
                            <h5>Material used</h5>
                            <p>
                              Polyester is deemed lower quality due to its none
                              natural quality’s. Made from synthetic materials,
                              not natural like wool. Polyester suits become
                              creased easily and are known for not being
                              breathable. Polyester suits tend to have a shine
                              to them compared to wool and cotton suits, this
                              can make the suit look cheap. The texture of
                              velvet is luxurious and breathable. Velvet is a
                              great choice for dinner party jacket and can be
                              worn all year round.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </section>
  );
}

export default ShopDetailsProduct;
