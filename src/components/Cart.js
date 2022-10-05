import React, { useContext } from "react";
import { CartContext } from "../Context";
import Product from "./Product";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: 20 }}>MY CART</h1>
      <div className="container">
        {cart.map((item) => (
          <Product prod={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
