import React, { useState, useEffect } from "react";
import Container from "../Components/Container";
import ProductCard from "../Components/ProductCard";
import HomeWrapper from "../Components/Styles/Home.styles";

const generateRandomList = (n = 1) => {
  const arrayHandle = [];
  for (let i = 0; i < n; i += 1) {
    arrayHandle.push(Math.floor(Math.abs(Math.random() * 180) + 1));
  }
  return arrayHandle;
};

const Home = () => {
  const [products, setProducts] = useState([]);
  const timers = generateRandomList(20);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Container>
      <HomeWrapper>
        {products.map((item, key) => (
          <ProductCard key={item.id} product={item} counter={timers[key]} />
        ))}
      </HomeWrapper>
    </Container>
  );
};

export default Home;
