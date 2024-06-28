import { useFormik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import * as yup from "yup";
import { useAuth } from "../../Routes/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const {user, registerUser } = useAuth();

    const registerForm = useRef(null);
    
    useEffect(() => {
      if (user) {
        navigate("/");
      }
    }, [user, navigate]);

  let authSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password1: yup.string().required(),
    password2: yup
      .string()
      .required()
      .oneOf([yup.ref("password1"), null], "Passwords must match"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password1: "",
      password2: "",
    },
    validationSchema: authSchema,
    onSubmit: (value, action) => {
      console.log(value);
      const name = value.name;
      const email = value.email;
      const password = value.password1;
      const userInfo = { name, email, password };
      registerUser(userInfo);

      action.resetForm();
    },
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    formik;

  return (
    <section className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        {/* {error && <div className="error">{error}</div>} */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your name"
            />
            <span style={{ color: "red" }}>
              {errors.name && touched.name ? errors.name : null}
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your email"
            />
            <span style={{ color: "red" }}>
              {errors.email && touched.email ? errors.email : null}
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="password1">Password:</label>
            <input
              type="password"
              id="password1"
              name="password1"
              value={values.password1}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your password"
            />
            <span style={{ color: "red" }}>
              {errors.password1 && touched.password1 ? errors.password1 : null}
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="password2">Confirm Password:</label>
            <input
              type="password"
              id="password2"
              name="password2"
              value={values.password2}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Confirm your password"
            />
            <span style={{ color: "red" }}>
              {errors.password2 && touched.password2 ? errors.password2 : null}
            </span>
          </div>
          <div className="login-button">
            <button type="submit">Register</button>
          </div>
          <span className="login-spanLink">
            Already account ! <Link to={"/login"}>Login</Link>
          </span>
        </form>
      </div>
    </section>
  );
}

export default Register;
