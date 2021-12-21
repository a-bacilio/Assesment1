/* eslint-disable react/prop-types */
import React from "react";
import Card from "./Atoms/Card";
import {
  Description,
  HorizontalWrapper,
  LittleIcon,
  MegaTitle,
  ProductImage,
  Rating,
  SubTitle,
  Title,
  Wrapper,
} from "./Styles/ProductDetailedCard.styles";
import StarIcon from "../Images/svg/star.svg";
import LikeIcon from "../Images/svg/like.svg";

const ProductDetailedCard = ({
  product = {
    id: "",
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating: {
      rate: "",
      count: "",
    },
  },
}) =>
  product !== undefined ? (
    <Card size={6} level={4}>
      <Wrapper>
        <MegaTitle>{product.category}</MegaTitle>
        <Title>
          {product.id} {product.title}
        </Title>
        <SubTitle>Only at ${product.price}!!</SubTitle>
        <HorizontalWrapper>
          <Wrapper>
            <ProductImage src={product.image} />
          </Wrapper>
          <Wrapper>
            <Description>{product.description}</Description>
            <Rating>
              <span>
                <LittleIcon src={StarIcon} />{" "}
                {product.rating ? product.rating.rate : ""}
              </span>
              <span>
                <LittleIcon src={LikeIcon} />{" "}
                {product.rating ? product.rating.count : ""}
              </span>
            </Rating>
          </Wrapper>
        </HorizontalWrapper>
      </Wrapper>
    </Card>
  ) : (
    <span>`No se ha encontrado el producto`</span>
  );

export default ProductDetailedCard;
