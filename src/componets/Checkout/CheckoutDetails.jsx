import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { FaRupeeSign } from "react-icons/fa";
import { addTocheckData } from "../../Redux/slice/checkoutSlice";

function CheckoutDetails() {
  const dispatch = useDispatch();

  const productValue = useSelector((state) => state.product);
  const cartValue = useSelector((state) => state.cart);

  console.log("cartValue", cartValue);
  console.log("productValue", productValue);

  const caretItems = cartValue.data.map((v) => {
    const productData = productValue.product.find((m) => m.id === v.cid);

    const fData = { ...productData, ...v };

    return fData;
  });

  // console.log(">>>>>>>>>>>>>>>>>>", caretItems);

  const subTotal = caretItems.reduce(
    (acc, item) => acc + item.qty * item.price,
    0
  );

  const checkoutSchema = yup.object({
    fName: yup.string().required("First name is required"),
    lName: yup.string().required("Last name is required"),
    country: yup.string().required("Country is required"),
    address: yup.string().required("Address is required"),
    city: yup.string().required("City is required"),
    state: yup.string().required("Country/State is required"),
    postcode: yup.string().required("Postcode is required"),
    phone: yup.string().required("Phone number is required"),
    email: yup.string().required("Email is required").email("Invalid email"),
    accountPass: yup.string().required("Account password is required"),
    order: yup.string().required("Order notes are required"),
    paymentMethod: yup.string().required("Select payment method"),
  });

  const formik = useFormik({
    validationSchema: checkoutSchema,
    initialValues: {
      fName: "",
      lName: "",
      country: "",
      address: "",
      city: "",
      state: "",
      postcode: "",
      phone: "",
      email: "",
      accountPass: "",
      order: "",
      createAccount: false,
      note: false,
      paymentMethod: "",
    },
    onSubmit: (values, action) => {
      console.log('checkout Data',values);
      dispatch(addTocheckData({ ...values, ...caretItems }));
      action.resetForm();
    },
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    formik;

  return (
    <>
      <section className="checkout spad">
        <div className="container">
          <div className="checkout__form">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-8 col-md-6">
                  <h6 className="coupon__code">
                    <span className="icon_tag_alt" /> Have a coupon?{" "}
                    <a href="#">Click here</a> to enter your code
                  </h6>
                  <h6 className="checkout__title">Billing Details</h6>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="checkout__input">
                        <p>
                          First Name<span>*</span>
                        </p>
                        <input
                          type="text"
                          name="fName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.fName}
                        />
                        <span style={{ color: "red" }}>
                          {errors.fName && touched.fName ? errors.fName : null}
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="checkout__input">
                        <p>
                          Last Name<span>*</span>
                        </p>
                        <input
                          type="text"
                          name="lName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.lName}
                        />
                        <span style={{ color: "red" }}>
                          {errors.lName && touched.lName ? errors.lName : null}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="checkout__input">
                    <p>
                      Country<span>*</span>
                    </p>
                    <input
                      type="text"
                      name="country"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.country}
                    />
                    <span style={{ color: "red" }}>
                      {errors.country && touched.country
                        ? errors.country
                        : null}
                    </span>
                  </div>
                  <div className="checkout__input">
                    <p>
                      Address<span>*</span>
                    </p>
                    <input
                      type="text"
                      placeholder="Street Address"
                      className="checkout__input__add"
                      name="address"
                      value={values.address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <span style={{ color: "red" }}>
                      {errors.address && touched.address
                        ? errors.address
                        : null}
                    </span>
                  </div>
                  <div className="checkout__input">
                    <p>
                      Town/City<span>*</span>
                    </p>
                    <input
                      type="text"
                      name="city"
                      value={values.city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <span style={{ color: "red" }}>
                      {errors.city && touched.city ? errors.city : null}
                    </span>
                  </div>
                  <div className="checkout__input">
                    <p>
                      Country/State<span>*</span>
                    </p>
                    <input
                      type="text"
                      name="state"
                      value={values.state}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <span style={{ color: "red" }}>
                      {errors.state && touched.state ? errors.state : null}
                    </span>
                  </div>
                  <div className="checkout__input">
                    <p>
                      Postcode / ZIP<span>*</span>
                    </p>
                    <input
                      type="text"
                      name="postcode"
                      value={values.postcode}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <span style={{ color: "red" }}>
                      {errors.postcode && touched.postcode
                        ? errors.postcode
                        : null}
                    </span>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="checkout__input">
                        <p>
                          Phone<span>*</span>
                        </p>
                        <input
                          type="text"
                          name="phone"
                          value={values.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <span style={{ color: "red" }}>
                          {errors.phone && touched.phone ? errors.phone : null}
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="checkout__input">
                        <p>
                          Email<span>*</span>
                        </p>
                        <input
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <span style={{ color: "red" }}>
                          {errors.email && touched.email ? errors.email : null}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="checkout__input__checkbox">
                    <label htmlFor="acc">
                      Create an account?
                      <input
                        type="checkbox"
                        id="acc"
                        name="createAccount"
                        checked={values.createAccount}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <span className="checkmark" />
                    </label>
                    <p>
                      Create an account by entering the information below. If
                      you are a returning customer please login at the top of
                      the page
                    </p>
                  </div>
                  {values.createAccount && (
                    <div className="checkout__input">
                      <p>
                        Account Password<span>*</span>
                      </p>
                      <input
                        type="password"
                        name="accountPass"
                        value={values.accountPass}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <span style={{ color: "red" }}>
                        {errors.accountPass && touched.accountPass
                          ? errors.accountPass
                          : null}
                      </span>
                    </div>
                  )}
                  <div className="checkout__input__checkbox">
                    <label htmlFor="diff-acc">
                      Note about your order, e.g, special note for delivery
                      <input
                        type="checkbox"
                        id="diff-acc"
                        name="note"
                        checked={values.note}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <span className="checkmark" />
                    </label>
                  </div>
                  {values.note && (
                    <div className="checkout__input">
                      <p>
                        Order notes<span>*</span>
                      </p>
                      <input
                        type="text"
                        placeholder="Notes about your order, e.g. special notes for delivery."
                        name="order"
                        value={values.order}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <span style={{ color: "red" }}>
                        {errors.order && touched.order ? errors.order : null}
                      </span>
                    </div>
                  )}
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="checkout__order">
                    <h4 className="order__title">Your order</h4>
                    <div className="checkout__order__products">
                      Product <span>Total</span>
                    </div>
                    <ul className="checkout__total__products">
                      {caretItems.map((v) => {
                        return (
                          <li>
                            01. {v.username}
                            <span>
                              <FaRupeeSign /> {v.qty * v.price}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                    <ul className="checkout__total__all">
                      <li>
                        Subtotal{" "}
                        <span>
                          <FaRupeeSign />
                          {subTotal}.00
                        </span>
                      </li>
                      <li>
                        Total{" "}
                        <span>
                          <FaRupeeSign />
                          {subTotal}.00
                        </span>
                      </li>
                    </ul>
                    <div className="checkout__input__checkbox">
                      <label htmlFor="acc-or">
                        Create an account?
                        <input type="checkbox" id="acc-or" />
                        <span className="checkmark" />
                      </label>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <div className="checkout__input__checkbox">
                      <label htmlFor="payment">
                        Check Payment
                        <input
                          type="radio"
                          id="payment"
                          name="paymentMethod"
                          value="Check Payment"
                          checked={values.paymentMethod === "Check Payment"}
                          onChange={handleChange}
                        />
                        <span className="checkmark" />
                      </label>
                    </div>
                    <div className="checkout__input__checkbox">
                      <label htmlFor="paypal">
                        Paypal
                        <input
                          type="radio"
                          id="paypal"
                          name="paymentMethod"
                          value="Paypal"
                          checked={values.paymentMethod === "Paypal"}
                          onChange={handleChange}
                        />
                        <span className="checkmark" />
                      </label>
                    </div>
                    <span style={{ color: "red" }}>
                      {errors.paymentMethod && touched.paymentMethod
                        ? errors.paymentMethod
                        : null}
                    </span>
                    <button type="submit" className="site-btn">
                      PLACE ORDER
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default CheckoutDetails;
