import React from "react";
import { BsFillBagFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { ROUTES } from "../../constants/routes";
//------------------
import { FirebaseContext } from "../../firebase/index";
import SearchProducts from "../SearchProduct/SearchProducts";
import "./Header.scss";
//------------------

const Nav = () => {
  const { totalQuantities } = useSelector((state) => state.cart);
  const [profile, setProfile] = React.useState(null);
  const { user, firebase } = React.useContext(FirebaseContext);
  const check = true;
  React.useEffect(() => {
    getData();
  }, []);

  function getData() {
    if (user) {
      firebase.db
        .collection("profile")
        .doc(user.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log(doc.data());
            setProfile(doc.data());
          }
        });
    }
  }

  console.log(user);
  const history = useHistory();
  const handleSubmit = () => {};
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__left">
          <div onClick={() => history.push(ROUTES.HOME)}>
            <img src={logo} />
          </div>
        </div>
        <div className="searchbar">
          <SearchProducts />
        </div>
        <div className="header__right">
          <div className="btn-login">
            {user ? (
              <>
                <div className="header-name">
                  <FaUserCircle className="header-user" />
                  {user.displayName}
                  {/* {profile ? profile.phone : "none"} */}
                </div>
                <div
                  className="header-button"
                  onClick={() => firebase.logout()}
                >
                  logout
                </div>
              </>
            ) : (
              <>
                <NavLink
                  to={{
                    pathname: ROUTES.LOGIN,
                    state: true,
                  }}
                  className="header-link"
                >
                  Sign In
                </NavLink>
                <NavLink
                  to={{
                    pathname: ROUTES.LOGIN,
                    state: false,
                  }}
                  className="header-link"
                >
                  Register
                </NavLink>
              </>
            )}
          </div>
          <div className="cart-box" onClick={() => history.push(ROUTES.CART)}>
            <div className="basket">
              <BsFillBagFill className="cart-icon" />
              {user && <span>{totalQuantities}</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
