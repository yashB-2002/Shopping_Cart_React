import React, { useState } from "react";
import * as faker from "faker";
import Product from "./Product";
faker.seed(100);
const Home = () => {
  const array = [...Array(15)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    // inStock: faker.random.arraElement([0, 3, 4, 5, 6]),
    // rating: faker.random.arraElement([1, 2, 3, 4, 5]),
  }));
  const [arr] = useState(array);

  // console.log(cart);
  return (
    <div className="container">
      {arr.map((prod) => (
        <Product prod={prod} />
      ))}
    </div>
  );
};

export default Home;
