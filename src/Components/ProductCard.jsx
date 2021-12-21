/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import Button from "./Atoms/Button";
import Card from "./Atoms/Card";
import {
  BottomContainer,
  CardImage,
  ImageTitle,
  TimerZone,
} from "./Styles/ProdcutCard.styles";

const ProductCard = ({
  product = { id: "", title: "", image: "" },
  counter = 0,
}) => {
  const [timer, setTimer] = useState(counter);

  useEffect(() => {
    const counterstop = setTimeout(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);
    return () => {
      clearTimeout(counterstop);
    };
  }, [timer]);

  return (
    <Card>
      <CardImage src={product.image} alt={product.image} />
      <ImageTitle>{`Ofertazo: ${product.id} - ${product.title}`}</ImageTitle>
      <BottomContainer>
        <TimerZone>{`0${(timer - (timer % 60)) / 60} : ${
          timer % 60 < 10 ? "0" : ""
        }${timer % 60}`}</TimerZone>
        <Button
          textColor={timer === 0 ? "grey" : "white"}
          backgroundColor={timer === 0 ? "var(--color3)" : "var(--color4)"}
          to={timer === 0 ? "" : `/detalle/${product.id}`}
          widthLevel={3}
        >
          Ir a detalles
        </Button>
      </BottomContainer>
    </Card>
  );
};

export default ProductCard;
