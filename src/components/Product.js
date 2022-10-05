import React, { useContext } from "react";
import { CartContext } from "../Context";

const Product = ({ prod }) => {
  const { cart, setCart } = useContext(CartContext);
  return (
    <div className="products">
      <img src={prod.image} alt={prod.name} />
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{prod.name}</span>
        <span>₹ {prod.price.substring(0, 3)}</span>
      </div>
      {/* <button
        className="add"
        onClick={() => {
          setCart(cart.filter((p) => p.id == prod.id));
        }}
      >
        Add to cart
      </button> */}
      {cart.includes(prod) ? (
        <button
          className="add remove"
          onClick={() => setCart(cart.filter((c) => c.id !== prod.id))}
        >
          Remove from Cart
        </button>
      ) : (
        <button className="add" onClick={() => setCart([...cart, prod])}>
          Add to Cart
        </button>
      )}
    </div>
  );
};
export default Product;
