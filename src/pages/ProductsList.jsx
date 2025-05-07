import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Loading from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slices/cartItems";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems.cartItemsVal);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://dummyjson.com/products?limit=10&skip=${(pageNumber - 1) * 10}`
      )
      .then((res) => {
        setProducts((prev) => [...prev, ...res.data.products]);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        alert("Failed to load products. Please try again.");
      })
      .finally(() => setIsLoading(false));
  }, [pageNumber]);

  const handleProductDetails = (productId) => {
    navigate(`/product-details/${productId}`);
  };

  const handlePagination = () => {
    setPageNumber((prev) => prev + 1);
  };

  const handleAddToCart = (product) => {
    const isExist = cartItems.find((item) => item.id === product.id);
    if (isExist) {
      dispatch(
        addToCart({
          id: product.id,
          image: product.thumbnail,
          title: product.title,
          price: product.price,
          quantity: isExist.quantity + 1,
        })
      );
    } else {
      dispatch(
        addToCart({
          id: product.id,
          image: product.thumbnail,
          title: product.title,
          price: product.price,
          quantity: 1,
        })
      );
    }
  };

  useEffect(() => {
    console.log("Cart items:", cartItems);
  }, [cartItems]);

  return (
    <div className="container product-list">
      <h2>Products Lists</h2>
      <hr />
      {isLoading && <Loading />}
      <div className="grid-list">
        {products.map((product, index) => (
          <div key={`${product.id}-${index}`} className="card-container">
            <img
              src={product.thumbnail}
              alt={product.title}
              onClick={() => handleProductDetails(product.id)}
            />
            {product.stock <= 0 ? (
              <small className="red stock">Out of Stock</small>
            ) : (
              <small className="green stock">In Stock</small>
            )}
            <h3 onClick={() => handleProductDetails(product.id)}>
              {product.title}
            </h3>
            <button onClick={() => handleAddToCart(product)}>
              Add To Cart
            </button>
          </div>
        ))}
      </div>
      {!isLoading && <button onClick={handlePagination}>Load More</button>}
    </div>
  );
};

export default ProductsList;
