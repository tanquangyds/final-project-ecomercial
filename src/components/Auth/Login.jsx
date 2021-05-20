import React from "react";
import { Link, useParams } from "react-router-dom";
import firebase from "../../firebase/firebase";
import useFormValidation from "./useFormValidation";
import validateLogin from "./validateLogin";
import "./Login.scss";
import usersIcon from "../../assets/images/users-solid.svg";
import userIcon from "../../assets/images/user-solid.svg";
import loginIcon from "../../assets/images/arrow-right-solid.svg";
import emailIcon from "../../assets/images/envelope-regular.svg";
import addressIcon from "../../assets/images/map-marker-alt-solid.svg";
import phoneIcon from "../../assets/images/phone-solid.svg";
import lockIcon from "../../assets/images/lock-solid.svg";

import { FirebaseContext } from "../../firebase/index";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
  phone: "",
  address: "",
};

function Login(props) {
  const initLogin = props.location.state;
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    isSubmitting,
  } = useFormValidation(INITIAL_STATE, validateLogin, authenticateUser);

  const [login, setLogin] = React.useState(initLogin);
  const [firebaseError, setFirebaseError] = React.useState(null);
  const { user, firebase } = React.useContext(FirebaseContext);

  async function authenticateUser() {
    const { name, phone, address, email, password } = values;
    try {
      if (login) {
        await firebase.login(email, password);
      } else {
        await firebase.register(name, phone, address, email, password);
        // console.log(user);
        // await firebase.createProfile({ ...values, user });
      }
      props.history.goBack();
    } catch (err) {
      console.error("Authentication Error", err);
      setFirebaseError(err.message);
    }
  }

  return (
    <div className="login__container">
      <div className="login__header">
        <div className="login__logo">
          <img src={usersIcon} alt="users-icon" />
        </div>
        <div className="login__title">{login ? "Login" : "Create Account"}</div>
      </div>
      <form onSubmit={handleSubmit} className="login__form">
        {!login && (
          <>
            <div className="form__group">
              <div className="form__group__icon">
                <img src={userIcon} alt="user-icon" />
              </div>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                name="name"
                value={values.name}
                type="text"
                placeholder="Your name"
                autocomplete="off"
              />
            </div>
            <div className="form__group">
              <div className="form__group__icon">
                <img src={phoneIcon} alt="user-icon" />
              </div>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                name="phone"
                value={values.phone}
                type="tel"
                placeholder="Your phone"
                autocomplete="off"
              />
            </div>
            <div className="form__group">
              <div className="form__group__icon">
                <img src={addressIcon} alt="user-icon" />
              </div>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                name="address"
                value={values.address}
                type="text"
                placeholder="Your address"
                autocomplete="off"
              />
            </div>
          </>
        )}

        <div className="form__group">
          <div className="form__group__icon">
            <img src={emailIcon} alt="user-icon" />
          </div>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            name="email"
            value={values.email}
            type="email"
            className={errors.email && "error-input"}
            placeholder="Your email"
            autocomplete="off"
          />
        </div>
        <div className="form__notification">
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>
        <div className="form__group">
          <div className="form__group__icon">
            <img src={lockIcon} alt="user-icon" />
          </div>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            name="password"
            value={values.password}
            type="password"
            className={errors.password && "error-input"}
            placeholder="Chose a secure password"
            autocomplete="off"
          />
        </div>
        <div className="form__notification">
          {errors.password && <p className="error-text">{errors.password}</p>}
          {firebaseError && <p className="error-text">{firebaseError}</p>}
        </div>

        <div className="form__submit">
          <button
            type="submit"
            className="login__button"
            disabled={isSubmitting}
            style={{ background: isSubmitting ? "grey" : "green" }}
          >
            <img src={loginIcon} alt="login_icon" />
          </button>
        </div>
        <div className="form__toggle">
          <button
            type="button"
            className="login__togglebutton"
            onClick={() => {
              setLogin((prevLogin) => !prevLogin);
            }}
          >
            {login ? "Need to create an account" : "Already have an account ?"}
          </button>
          <div className="forgot-password">
            <Link to="/forgot">Forgot password?</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
