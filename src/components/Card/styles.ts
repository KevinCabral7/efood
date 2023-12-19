import { styled } from "styled-components";

export const Title = styled.h3`
  font-size: 18px;
  display: block;
`;

export const Description = styled.p`
  font-size: 14px;
  display: block;
  line-height: 22px;
`;

export const CardItem = styled.div`
  background-color: #e66767;
  color: #fff;
  display: block;
  padding: 8px;
  > img {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 167px;
  }
  ${Description} {
    line-height: 22px;
    font-size: 14px;
    color: #ffebd9;
    margin-bottom: 8px;
    font-weight: 400;
  }
  Button {
    background-color: #ffebd9;
    display: block;
    font-weight: bold;
  }
  ${Title} {
    margin: 8px 0;
    font-size: 16px;
  }
`;
