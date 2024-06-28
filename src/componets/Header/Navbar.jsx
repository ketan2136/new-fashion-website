import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useSelector } from "react-redux";
import { useAuth } from "../../Routes/AuthContext";

const Navbar = () => {
  const [open, setopen] = useState(false);
  const [open1, setopen1] = useState(false);

  const navigate = useNavigate();
  const { user, logoutUser } = useAuth();

  console.log(";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;", user);

  useEffect(() => {
    navigate("/login");
  }, []);

  const [cartVal, setVartVal] = React.useState([]);
  const { item } = useSelector((state) => state.item);
  const cartValue = useSelector((state) => state.cart);

  const handleClose = () => {
    setopen(false);
    setopen1(false);
  };

  console.log("console.log", item);
  React.useEffect(() => {
    const favoriteValue = localStorage.getItem("cartItem");
    if (favoriteValue) {
      try {
        const parsedValue = JSON.parse(favoriteValue);
        setVartVal(parsedValue);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    } else {
      // Handle the case where favoriteValue is not found in localStorage
    }
  }, []);

  let countFavCart = cartVal?.length;

  let cartCount = 0;

  if (cartValue && cartValue.data) {
    cartCount = cartValue.data.reduce((acc, item) => acc + item.qty, 0);
  }

  console.log(cartCount);

  const toggleMenu = () => {
    setopen(!open);
  };

  return (
    <>
      <div>
        <div
          className={
            open1
              ? `offcanvas-menu-overlay ${open1 ? "active" : null}`
              : "offcanvas-menu-overlay"
          }
          onClick={handleClose}
        />
        <div
          className={
            open1
              ? `offcanvas-menu-wrapper ${open1 ? "active" : null}`
              : "offcanvas-menu-wrapper"
          }
        >
          <div className="offcanvas__option">
            <div className="offcanvas__links">
              {/* <a href="#">Sign in</a> */}
              <a href="#">FAQs</a>
            </div>
            <div className="offcanvas__top__hover">
              <span>
                Usd <i className="arrow_carrot-down" />
              </span>
              <ul>
                <li>USD</li>
                <li>EUR</li>
                <li>USD</li>
              </ul>
            </div>
          </div>
          <div className="offcanvas__nav__option">
            <a href="#" className="search-switch">
              <img src="img/icon/search.png" alt />
            </a>
            <a href="#">
              <img src="img/icon/heart.png" alt />
            </a>
            <a href="#">
              <img src="img/icon/cart.png" alt /> <span>0</span>
            </a>
            <div className="price">$0.00</div>
          </div>
          <div id="mobile-menu-wrap">
            <div class="slicknav_menu">
              <a
                href="#"
                aria-haspopup="true"
                role="button"
                tabIndex={0}
                className="slicknav_btn slicknav_collapsed"
                style={{ outline: "none" }}
              >
                <span className="slicknav_menutxt">MENU</span>
                <span className="slicknav_icon">
                  <span className="slicknav_icon-bar" />
                  <span className="slicknav_icon-bar" />
                  <span className="slicknav_icon-bar" />
                </span>
              </a>

              <nav className="slicknav_nav slicknav_hidden">
                <ul>
                  <li className="">
                    <NavLink
                      to={"/"}
                      
                      // className={({ isActive }) =>
                      //   isActive ? "active-links" : "unactive-link"
                      // }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/shop"
                    
                      // className={({ isActive }) =>
                      //   isActive ? "active-links" : "unactive-link"
                      // }
                    >
                      Shop
                    </NavLink>
                  </li>
                  <li>
                    <a className="navbar_pages" href="#">
                      Pages
                    </a>
                    <ul className="dropdown">
                      <li>
                        <NavLink
                          to={"/about"}
                          className={({ isActive }) =>
                            isActive ? "active-links" : "unactive-link"
                          }
                        >
                          About Us
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to={"shopDetails"}>Shop Details</NavLink>
                      </li>
                      <li>
                        <NavLink to={"shopCart"}>Shopping Cart</NavLink>
                      </li>
                      <li>
                        <NavLink to={"/checkout"}>Check Out</NavLink>
                      </li>
                      <li>
                        <NavLink to={"/blogDetails"}>Blog Details</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink
                      to={"/blog"}
                      className={({ isActive }) =>
                        isActive ? "active-links" : "unactive-link"
                      }
                    >
                      Blog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/contact"}
                      className={({ isActive }) =>
                        isActive ? "active-links" : "unactive-link"
                      }
                    >
                      Contacts
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="offcanvas__text">
            <p>Free shipping, 30-day return or refund guarantee.</p>
          </div>
        </div>
      </div>

      <div>
        <header className="header">
          <div className="header__top">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-7">
                  <div className="header__top__left">
                    <p>Free shipping, 30-day return or refund guarantee.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-5">
                  <div className="header__top__right">
                    <div className="header__top__links">
                      {user ? (
                        <NavLink onClick={logoutUser}>logout</NavLink>
                      ) : (
                        <NavLink to="/login">Login</NavLink>
                      )}
                      <NavLink>FAQs</NavLink>
                    </div>
                    <div className="header__top__hover">
                      <span>
                        Usd <i className="arrow_carrot-down" />
                      </span>
                      <ul>
                        <li>USD</li>
                        <li>EUR</li>
                        <li>USD</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3">
                <div className="header__logo">
                  <NavLink to="/">
                    <img src={"img/logo.png"} alt />
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <nav className="header__menu mobile-menu">
                  <ul>
                    <li className="">
                      <NavLink
                        to={"/"}
                        // style={({ isActive }) => {
                        //   return isActive ? { color: "plum" } : {};
                        // }}
                        className={({ isActive }) =>
                          isActive ? "active-links" : "unactive-link"
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/shop"
                        // style={({ isActive }) => {
                        //   return isActive ? { color: "plum" } : {};
                        // }}
                        className={({ isActive }) =>
                          isActive ? "active-links" : "unactive-link"
                        }
                      >
                        Shop
                      </NavLink>
                    </li>
                    <li>
                      <a className="navbar_pages" href="#">
                        Pages
                      </a>
                      <ul className="dropdown">
                        <li>
                          <NavLink
                            to={"/about"}
                            className={({ isActive }) =>
                              isActive ? "active-links" : "unactive-link"
                            }
                          >
                            About Us
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={"shopDetails"}>Shop Details</NavLink>
                        </li>
                        <li>
                          <NavLink to={"shopCart"}>Shopping Cart</NavLink>
                        </li>
                        <li>
                          <NavLink to={"/checkout"}>Check Out</NavLink>
                        </li>
                        <li>
                          <NavLink to={"/blogDetails"}>Blog Details</NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink
                        to={"/blog"}
                        className={({ isActive }) =>
                          isActive ? "active-links" : "unactive-link"
                        }
                      >
                        Blog
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/contact"}
                        className={({ isActive }) =>
                          isActive ? "active-links" : "unactive-link"
                        }
                      >
                        Contacts
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-3 col-md-3">
                <div className="header__nav__option">
                  <a href="#" className="search-switch">
                    <img src="img/icon/search.png" alt />
                  </a>
                  <a href="#" onClick={() => setopen((prev) => !prev)}>
                    {/* <img
                      src="img/icon/heart.png"
                      alt
                      
                    /> */}
                    <div className="icon-container" badgeContent={countFavCart}>
                      <FavoriteBorderIcon />
                      {/* {item.length !== 0 && ( */}
                      <div className="badge">{item?.length}</div>
                      {/* )} */}
                    </div>
                  </a>
                  <Link to={"./shopCart"}>
                    {/* <img src="img/icon/cart.png" alt /> <span>0</span> */}
                    <div className="icon-container">
                      <ShoppingCartCheckoutIcon />
                      <div className="badge">{cartCount}</div>
                    </div>
                  </Link>
                  {/* <div className="price">$0.00</div> */}
                </div>
              </div>
            </div>
            <div className="canvas__open">
              <i className="fa fa-bars" onClick={() => setopen1((pre) => !pre)} />
            </div>
          </div>
        </header>
      </div>
      {open && <Sidebar navRight="right" open1={open} close={handleClose} />}
      {/* {<Navbar subTotal={subTotal} />} */}
    </>
  );
};

export default Navbar;
