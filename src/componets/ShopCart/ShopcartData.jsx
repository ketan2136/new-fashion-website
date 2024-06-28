import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCart,
  incrementCart,
  removeCart,
} from "../../Redux/slice/cartSlice";
import { FaRupeeSign } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../Routes/AuthContext";

function ShopcartData() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const cartValue = useSelector((state) => state.cart);
  const productVal = useSelector((state) => state.product);
  const navigate = useNavigate();

  console.log("user>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", user);

  const handleChangeLogin = () => {
    // // history.push("/login");
    // const userLogin = user ? (
    //   <Navigate to="/checkout" />
    // ) : (
    //   <Navigate to="/login" />
    // );

    // return userLogin;

    if (user) {
      navigate("/checkout");
    } else {
      navigate("/login");
    }
  };

  const cartItem = cartValue.data.map((v) => {
    console.log(v);
    const cartDatas = productVal.product.find((m) => m.id === v.cid);
    const fData = { ...cartDatas, ...v };
    console.log(fData);
    return fData;
  });
  console.log("data", cartItem);

  const handleCartIncrement = (id) => {
    dispatch(incrementCart(id));
  };

  const handleCartDecrement = (id) => {
    const item = cartValue.data.find((v) => v.cid === id);
    console.log(item);
    if (item && item.qty > 1) dispatch(decrementCart(id));
  };

  const handleRemopve = (id) => {
    dispatch(removeCart(id));
  };

  const subTotal = cartItem.reduce(
    (acc, item) => acc + item.qty * item.price,
    0
  );
  console.log(subTotal);

  // const subtotal = cartItems.reduce(
  //   (acc, item) => acc + item.qty * item.price,
  //   0
  // );

  return (
    <>
      {cartItem.length === 0 ? (
        <p>cart not found</p>
      ) : (
        <section className="shopping-cart spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="shopping__cart__table">
                  <table>
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      {cartItem.map((v) => (
                        <tr>
                          <td className="product__cart__item">
                            <div className="product__cart__item__pic">
                              <img
                                style={{
                                  width: "90px",
                                  height: "90px",
                                  objectFit: "cover",
                                }}
                                src={v.image_preview}
                                alt
                              />
                            </div>
                            <div className="product__cart__item__text">
                              <h6>{v.username}</h6>
                              <h5>
                                <FaRupeeSign />
                                {v.price}
                              </h5>
                            </div>
                          </td>
                          <td className="quantity__item">
                            <div className="quantity">
                              <div className="pro-qty-2">
                                {/* <input type="text" defaultValue={1} /> */}
                                <button
                                  style={{
                                    borderRadius: "50%",
                                    marginRight: "10px",
                                    border: "none",
                                  }}
                                  className="plusButton"
                                  onClick={() => handleCartIncrement(v.id)}
                                >
                                  {" "}
                                  +
                                </button>
                                {v.qty}
                                <button
                                  style={{
                                    borderRadius: "50%",
                                    border: "none",
                                    marginLeft: "10px",
                                  }}
                                  className="minusButton"
                                  onClick={() => handleCartDecrement(v.id)}
                                >
                                  -
                                </button>
                              </div>
                            </div>
                          </td>
                          <td className="cart__price">
                            <FaRupeeSign />
                            {v.qty * v.price}
                          </td>
                          <td className="">
                            <button
                              className="cart__close"
                              onClick={() => handleRemopve(v.id)}
                            >
                              <i className="fa fa-close" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="continue__btn">
                      <Link to={"/shop"}>Continue Shopping</Link>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="continue__btn update__btn">
                      <a href="#">
                        <i className="fa fa-spinner" /> Update cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="cart__discount">
                  <h6>Discount codes</h6>
                  <form action="#">
                    <input type="text" placeholder="Coupon code" />
                    <button type="submit">Apply</button>
                  </form>
                </div>
                <div className="cart__total">
                  <h6>Cart total</h6>
                  <ul>
                    <li>
                      Subtotal{" "}
                      <span>
                        <FaRupeeSign /> {subTotal}
                      </span>
                    </li>
                    <li>
                      Total{" "}
                      <span>
                        <FaRupeeSign /> {subTotal}
                      </span>
                    </li>
                  </ul>
                  {/* <PrivateRoutes> */}
                  <button
                    // to={"/checkout"}
                    className="primary-btn"
                    onClick={handleChangeLogin}
                  >
                    Proceed to checkout
                  </button>
                  {/* </PrivateRoutes> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default ShopcartData;
