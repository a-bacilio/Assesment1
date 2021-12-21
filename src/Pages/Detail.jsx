import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "../Components/Container";
import ProductDetailedCard from "../Components/ProductDetailedCard";
import HomeWrapper from "../Components/Styles/Home.styles";

const Detail = () => {
  // eslint-disable-next-line no-unused-vars
  const [product, setProduct] = useState({});
  const params = useParams();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) =>
        setProduct(
          data.filter(
            (item) => parseInt(item.id, 10) === parseInt(params.id, 10)
          )[0]
        )
      );
  }, [params]);

  return (
    <Container>
      <HomeWrapper>
        <ProductDetailedCard product={product} />
      </HomeWrapper>
    </Container>
  );
};

export default Detail;
