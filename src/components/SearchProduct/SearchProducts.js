import React from "react";
import FirebaseContext from "../../firebase/context";
import ProductItem from "../ProductItem/ProductItem";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./SearchProducts.scss";
import { AiOutlineSearch } from "react-icons/ai";

function SearchProducts(props) {
  const { firebase } = React.useContext(FirebaseContext);
  const [filteredProducts, setFilteredProducts] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [filter, setFilter] = React.useState("");
  const history = useHistory();

  //----------------------------------------------------------------
  const dispatch = useDispatch();
  // const { products, filteredProductList, isFilterRender } = useSelector(
  //   (state) => state.productList
  // );
  //----------------------------------------------------------------

  React.useEffect(() => {
    getInitialProducts();
  }, []);

  function getInitialProducts() {
    firebase.db
      .collection("products")
      .get()
      .then((snapshot) => {
        const products = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        dispatch({ type: "INITIAL", payload: products });
        setProducts(products);
      });
  }

  function handleSearch(event) {
    event.preventDefault();
    const query = filter.toLowerCase();
    const matchedProducts = products.filter((product) => {
      return (
        // product.description.toLowerCase().includes(query) ||
        product.name.toLowerCase().includes(query)
        // product.NSX.toLowerCase().includes(query)
      );
    });
    console.log(matchedProducts);
    dispatch({ type: "SEARCH", payload: matchedProducts });
    setFilteredProducts(matchedProducts);
    history.push("/");
  }
  return (
    <>
      <form onSubmit={handleSearch}>
        <div>
          <input
            placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..."
            onChange={(event) => setFilter(event.target.value)}
          />
          <button>
            <AiOutlineSearch
              style={{
                fontSize: "22px",
              }}
            />
          </button>
        </div>
      </form>
      {/* {filteredProducts.map((filteredProduct, index) => (
        <ProductItem
          key={filteredProduct.id}
          showCount={false}
          product={filteredProduct}
          index={index}
        />
      ))} */}
    </>
  );
}

export default SearchProducts;
