import { useFormik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import * as yup from "yup";
import { useAuth } from "../../Routes/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { user, loginUser } = useAuth();

  const loginFrom = useRef(null);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  let authSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: authSchema,
    onSubmit: (value, action) => {
      console.log(value);

      const email = value.email;
      const password = value.password;

      const userInfo = { email, password };

      loginUser(userInfo);
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
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your password"
            />
            <span style={{ color: "red", paddingTop: "10px" }}>
              {errors.password && touched.password ? errors.password : null}
            </span>
          </div>
          <div className="login-button">
            <button type="submit">Login</button>
          </div>
          <span className="login-spanLink" >
            Create a account ? <Link to={"/register"}>Sing in</Link>
          </span>{" "}
        </form>
      </div>
    </section>
  );
}

export default Login;
