import React, { useEffect, useState, Component } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../../redux/actions/Products";

import Slider from "react-slick";
import "../Slide/Slide.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SpinLoading from "../Spin/SpinLoading"
import Loading from "../Loading/loading"

//----------------------------------------------------------------
import FirebaseContext from "../../firebase/context";

//----------------------------------------------------------------
function Slide(props) {
  const { firebase, user } = React.useContext(FirebaseContext);
  const [product, setProduct] = React.useState(null);

  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getProduct(id));
  }, []);
  // const { product} = useSelector((state) => state.products);
  React.useEffect(() => {
    getData();
  }, []);
  
  function getData() {
    firebase.db
      .collection("products")
      .get()
      .then((snapshot) => {
        const dataproducts = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProduct(dataproducts[id]);
      });
  }
  const settings= {
    customPaging: function(i) {
      return (
        <a >
          <img src={product.poster[i].url} />
        </a>
      );
    },
    dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1

  };

  return (
    <div className="group-image-detail">
       {product ? 
     <Slider {...settings}>
        <div>
            <img src={product.poster[0].url} />
          </div>
          {/* <div>
            <img src={product.poster[1].url} />
          </div>
          <div>
            <img src={product.poster[2].url} />
          </div>
          <div>
            <img src={product.poster[3].url} />
          </div> */}
      </Slider> : <SpinLoading/>}
    </div>
  );
}

export default Slide;