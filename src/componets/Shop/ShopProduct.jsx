import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../Redux/action/product.action";
import { FaRupeeSign } from "react-icons/fa";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import { FaRegHeart } from "react-icons/fa";
import { addFavorite } from "../../Redux/action/favorite.action";
import { addTocart } from "../../Redux/slice/cartSlice";
// import { FaRupeeSign } from "react-icons/fa";

function ShopProduct() {
  const dispatch = useDispatch();
  const [categoryCounts, setCategoryCounts] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const [productData, setProductData] = useState([]);
  const [categoryName, setCategoryName] = useState(false);
  const [startPrice, setStartPrice] = useState(false);
  const [endPrice, setEndPrice] = useState(false);

  console.log("productData", productData);

  const { isLoading, product } = useSelector((state) => state.product);
    console.log(product);

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  useEffect(() => {
    let filteredProducts = product;

    if (categoryName !== false) {
      filteredProducts = filteredProducts.filter(
        (item) => item.categories === categoryName
      );
    }

    if (startPrice !== undefined && endPrice !== undefined) {
      filteredProducts = filteredProducts.filter((item) => {
        return item.price >= startPrice && item.price <= endPrice;
      });
    }

    setProductData(filteredProducts);
  }, [categoryName, startPrice, endPrice, product]);

  useEffect(() => {
    if (product && product.length > 0) {
      const updatedCounts = {};

      product.forEach((item) => {
        const categories = item.categories.split(",");

        categories.forEach((category) => {
          const trimmedCategory = category.trim();

          if (trimmedCategory !== "") {
            if (trimmedCategory in updatedCounts) {
              updatedCounts[trimmedCategory]++;
            } else {
              updatedCounts[trimmedCategory] = 1;
            }
          }
        });
      });

      setCategoryCounts(updatedCounts);
    }
    setProductData(product);
  }, [product]);

  const handleSearch = (val) => {
   const filteredDatas = product.filter(
     (v) =>
       
       v.username.toLowerCase().includes(val.toLowerCase())
     
   );
   setFilteredData(filteredDatas);
  };

  const handleFevorite = (id) => {
    dispatch(addFavorite(id));
  };

  const handelAddCart = (id) => {
    dispatch(addTocart({ cid: id, qty: 1 }));
  };

  const setPriceValue = (value1, value2) => {
    setStartPrice(value1);
    setEndPrice(value2);
  };

  const styles = {
    color: "#000",
  };

  return (
    <>
      <section className="shop spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="shop__sidebar">
                <div className="shop__sidebar__search">
                  <form action="#">
                    <input
                      type="text"
                      placeholder="Search..."
                      onChange={(e) => handleSearch(e.target.value)}
                    />
                    <button type="submit">
                      <span className="icon_search" />
                    </button>
                  </form>
                </div>
                <div className="shop__sidebar__accordion">
                  <div className="accordion" id="accordionExample">
                    <div className="card">
                      <div className="card-heading">
                        <a data-toggle="collapse" data-target="#collapseOne">
                          Categories
                        </a>
                      </div>
                      <div
                        id="collapseOne"
                        className="collapse show"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          <div className="shop__sidebar__categories">
                            <ul className="nice-scroll">
                              <li onClick={() => setProductData(product)}>
                                <a
                                  style={
                                    productData === product
                                      ? { color: "red" }
                                      : null
                                  }
                                >
                                  All ({product?.length})
                                </a>
                              </li>
                              {Object.entries(categoryCounts).map(
                                ([category, count]) => (
                                  <li
                                    key={category}
                                    onClick={() => setCategoryName(category)}
                                  >
                                    <a
                                      style={
                                        categoryName === category
                                          ? { color: "red" }
                                          : null
                                      }
                                    >
                                      {category} ({count})
                                    </a>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-heading">
                        <a data-toggle="collapse" data-target="#collapseTwo">
                          Branding
                        </a>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse show"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          <div className="shop__sidebar__brand">
                            <ul>
                              <li>
                                <a href="#">Louis Vuitton</a>
                              </li>
                              <li>
                                <a href="#">Chanel</a>
                              </li>
                              <li>
                                <a href="#">Hermes</a>
                              </li>
                              <li>
                                <a href="#">Gucci</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-heading">
                        <a data-toggle="collapse" data-target="#collapseThree">
                          Filter Price
                        </a>
                      </div>
                      <div
                        id="collapseThree"
                        className="collapse show"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          <div className="shop__sidebar__price">
                            <ul>
                              <li
                                onClick={() => {
                                  setPriceValue(false, false);
                                  setProductData(product);
                                }}
                              >
                                <a
                                  style={
                                    startPrice === false && endPrice === false
                                      ? { color: "red" }
                                      : null
                                  }
                                >
                                  <FaRupeeSign />
                                  All price
                                </a>
                              </li>
                              <li
                                className="priceActive"
                                onClick={() => setPriceValue(100, 500)}
                              >
                                <a
                                  style={
                                    startPrice === 100 && endPrice === 500
                                      ? { color: "red" }
                                      : null
                                  }
                                >
                                  <FaRupeeSign />
                                  100 - <FaRupeeSign />
                                  500
                                </a>
                              </li>
                              <li onClick={() => setPriceValue(500, 1000)}>
                                <a
                                  style={
                                    startPrice === 500 && endPrice === 1000
                                      ? { color: "red" }
                                      : null
                                  }
                                >
                                  <FaRupeeSign />
                                  500 - <FaRupeeSign />
                                  1000
                                </a>
                              </li>
                              <li onClick={() => setPriceValue(1000, 1500)}>
                                <a
                                  style={
                                    startPrice === 1000 && endPrice === 1500
                                      ? { color: "red" }
                                      : null
                                  }
                                >
                                  <FaRupeeSign />
                                  1000 - <FaRupeeSign />
                                  1500
                                </a>
                              </li>
                              <li onClick={() => setPriceValue(1500, 2000)}>
                                <a
                                  style={
                                    startPrice === 1500 && endPrice === 2000
                                      ? { color: "red" }
                                      : null
                                  }
                                >
                                  <FaRupeeSign />
                                  1500 - <FaRupeeSign />
                                  2000
                                </a>
                              </li>
                              <li onClick={() => setPriceValue(2000, 2500)}>
                                <a
                                  style={
                                    startPrice === 2000 && endPrice === 2500
                                      ? { color: "red" }
                                      : null
                                  }
                                >
                                  <FaRupeeSign />
                                  2000 - <FaRupeeSign />
                                  2500
                                </a>
                              </li>
                              <li>
                                <a href="#">2500+</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-heading">
                        <a data-toggle="collapse" data-target="#collapseFour">
                          Size
                        </a>
                      </div>
                      <div
                        id="collapseFour"
                        className="collapse show"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          <div className="shop__sidebar__size">
                            <label htmlFor="xs">
                              xs
                              <input type="radio" id="xs" />
                            </label>

                            {/* {product.map((value) => (
                              <>
                                <label
                                  className={
                                    selectedRadio == value.clotheSizes
                                      ? "actvie"
                                      : ""
                                  }
                                  htmlFor={value.clotheSizes}
                                >
                                  {value.clotheSizes}
                                </label>
                                <input
                                  type="radio"
                                  className={
                                    selectedRadio == value.clotheSizes
                                      ? "actvie"
                                      : ""
                                  }
                                  onClick={() =>
                                    setSelectedRadio(value.clotheSizes)
                                  }
                                  value={value.clotheSizes}
                                  id={value.clotheSizes}
                                  name="clotheSizes"
                                />
                              </>
                            ))} */}

                            <label htmlFor="sm">
                              s
                              <input type="radio" id="sm" />
                            </label>
                            <label htmlFor="md">
                              m
                              <input type="radio" id="md" />
                            </label>
                            <label htmlFor="xl">
                              xl
                              <input type="radio" id="xl" />
                            </label>
                            <label htmlFor="xxl">
                              xxl
                              <input type="radio" id="xxl" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-heading">
                        <a data-toggle="collapse" data-target="#collapseFive">
                          Colors
                        </a>
                      </div>
                      <div
                        id="collapseFive"
                        className="collapse show"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          <div className="shop__sidebar__color">
                            <label className="c-1" htmlFor="sp-1">
                              <input type="radio" id="sp-1" />
                            </label>
                            <label className="c-2" htmlFor="sp-2">
                              <input type="radio" id="sp-2" />
                            </label>
                            <label className="c-3" htmlFor="sp-3">
                              <input type="radio" id="sp-3" />
                            </label>
                            <label className="c-4" htmlFor="sp-4">
                              <input type="radio" id="sp-4" />
                            </label>
                            <label className="c-5" htmlFor="sp-5">
                              <input type="radio" id="sp-5" />
                            </label>
                            <label className="c-6" htmlFor="sp-6">
                              <input type="radio" id="sp-6" />
                            </label>
                            <label className="c-7" htmlFor="sp-7">
                              <input type="radio" id="sp-7" />
                            </label>
                            <label className="c-8" htmlFor="sp-8">
                              <input type="radio" id="sp-8" />
                            </label>
                            <label className="c-9" htmlFor="sp-9">
                              <input type="radio" id="sp-9" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <div className="card">
                      <div className="card-heading">
                        <a data-toggle="collapse" data-target="#collapseSix">
                          Tags
                        </a>
                      </div>
                      <div
                        id="collapseSix"
                        className="collapse show"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          <div className="shop__sidebar__tags">
                            <a href="#">Product</a>
                            <a href="#">Bags</a>
                            <a href="#">Shoes</a>
                            <a href="#">Fashio</a>
                            <a href="#">Clothing</a>
                            <a href="#">Hats</a>
                            <a href="#">Accessories</a>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="shop__product__option">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="shop__product__option__left">
                      <p>Showing 1–12 of 126 results</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="shop__product__option__right">
                      <p>Sort by Price:</p>
                      <select>
                        <option value>Low To High</option>
                        <option value>$0 - $55</option>
                        <option value>$55 - $100</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                {isLoading ? (
                  <span>Loading....</span>
                ) : (
                 filteredData && productData.map((product) => (
                    <Link
                      className="col-lg-4 col-md-6 col-sm-6"
                      to={`/shopDetails/${product.id}`}
                    >
                      <div className="product__item" key={product.id}>
                        <div
                          className="product__item__pic set-bg"
                          data-setbg="img/product/product-2.jpg"
                          style={{
                            background: `url(${product.image_preview})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        >
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
                                {/* <img src="img/icon/compare.png" alt />{" "} */}
                                <span>Compare</span>
                                <div>
                                  <CompareArrowsIcon />
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                {/* <img src="img/icon/search.png" alt /> */}
                                <div>
                                  <SavedSearchIcon />
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="product__item__text">
                          <h6>{product.username}</h6>
                          <Link
                            className="add-cart"
                            onClick={() => handelAddCart(product.id)}
                          >
                            + Add To Cart
                          </Link>
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
                    </Link>
                  ))
                )}

                {/* {product.map((product) => (
                  // <div key={product.id}>
                  //   <p>{product.name}</p>
                  //   <p>{product.price}</p>
                  // </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item" key={product.id}>
                      <div
                        className="product__item__pic set-bg"
                        data-setbg="img/product/product-2.jpg"
                        style={{
                          background: `url(${product.image_preview})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
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
                ))} */}
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="product__pagination">
                    <a className="active" href="#">
                      1
                    </a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <span>...</span>
                    <a href="#">21</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ShopProduct;
