import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import currencyFormatter from "currency-formatter";
import { Link } from "react-router-dom";
import { getProducts } from "../../redux/actions/Products";
import Banner from "../../components/Banner/index";

//----------------------------------------------------------------
import FirebaseContext from "../../firebase/context";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import ProductList from "../../components/ProductList/ProductList";

//----------------------------------------------------------------

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const { firebase, user } = React.useContext(FirebaseContext);
  const [products, setProducts] = React.useState(null);
  //----------------------------------------------------------------
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

        setProducts(dataproducts);
      });
  }
  //----------------------------------------------------------------

  // const { products } = useSelector((state) => state.products);
  return (
    <div>
      <div className="container">
        {/* <Banner /> */}
        <div className="row">
          <ProductList />
          {/* {!products ? (
            <div>Loading...</div>
          ) : (
            <>
              {products.map((product) => (
                <div className="col-3" key={product.id}>
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
                </div>
              ))}
            </>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Home;
