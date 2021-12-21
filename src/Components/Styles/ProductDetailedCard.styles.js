import styled from "styled-components";

export const Wrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const HorizontalWrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
  justify-content: center;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: 90%;
  max-width: 300px;
`;

export const MegaTitle = styled.span`
  text-align: left;
  font-size: 40px;
  width: 100%;
  color: var(--color4);
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 32px;
`;
export const SubTitle = styled.span`
  text-align: center;
  font-size: 28px;
`;
export const SubTitleSecond = styled.span`
  text-align: center;
  font-size: 12px;
`;

export const Description = styled.p`
  padding: 15px;
  text-align: justify;
  font-size: 14px;
`;

export const Rating = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: justify;
  font-size: 14px;
`;

export const LittleIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const PriceZone = styled.span`
  font-size: 32px;
`;
