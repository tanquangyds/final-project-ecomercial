import React from "react";
import { Link, withRouter } from "react-router-dom";
import { getDomain } from "../../utils";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import FirebaseContext from "../../firebase/context";
import lockIcon from "../../assets/images/lock-solid.svg";
//---------------------------------------------------------
import currencyFormatter from "currency-formatter";
import "./ProductItem.scss";
import RatingStar from "../Rating/RatingStar";
import plusIcon from "../../assets/images/plus-solid.svg";
import starIcon from "../../assets/images/star-regular.svg";
import { AiOutlinePlus } from "react-icons/ai";

//---------------------------------------------------------
function ProductItem({ product, index, showCount, history }) {
  const discount = product.discount ? product.discount : null;
  return (
    <div className="ProductItem__container">
      <div class="ProductItem__box">
        <h3 class="ProductItem__name">{product.name}</h3>
        <p class="ProductItem__subName">sub Name</p>
        <div class="ProductItem__grid">
          <div class="ProductItem__img">
            <img src={product.poster[0].url} alt="image name" />
          </div>
          <div class="mask">
            <Link to={`/details/${product.id}`}>
              <div class="info">Quick view</div>
            </Link>
          </div>
        </div>
        <div class="price">
          <span class="price__actual">
            {currencyFormatter.format(product.price, { code: "USD" })}
          </span>
          {discount && (
            <>
              <span className="discount">-10%</span>
              <span class="price__sale">
                {currencyFormatter.format(product.price, { code: "USD" })}
              </span>
            </>
          )}
        </div>
      </div>
      <div class="ProductItem__foot">
        <div className="Rating">
          <RatingStar />
        </div>
        <ul class="list">
          <div className="list__wrapper">
            <div className="list__img">
              <img src={starIcon} alt="star-icon" />
            </div>
            <ul>
              <AiOutlinePlus
                style={{
                  color: "white",
                  fontSize: "20px",
                  marginRight: "10px",
                }}
              />
              <li>Add to Bag</li>
              <ul>
                <li>
                  <h3>Sed diam nonumy</h3>
                </li>
                <li>
                  <p>Lorem ipsum dolor amet</p>
                </li>
              </ul>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default withRouter(ProductItem);

{
  /* <div className="col-3" key={product.id}>
<div className="product">
  <div className="product__img">
    <Link to={`/details/${product.id}`}>
      <img src={product.poster[0].url} alt="image name" />
    </Link>
  </div>
  <div className="product__name">{product.name}</div>
  <div className="row">
    <div className="col-6">
      <div className="product__price">
        <span className="actualPrice">
          {currencyFormatter.format(product.price, {
            code: "USD",
          })}
        </span>{" "}
        <span className="discount">{product.discount}%</span>
      </div>
    </div>
    <div className="col-6">
      <div className="product__discount__price">
        {currencyFormatter.format(product.discountPrice, {
          code: "USD",
        })}
      </div>
    </div>
  </div>
</div>
</div> */
}
