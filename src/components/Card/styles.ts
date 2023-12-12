import { styled } from "styled-components";
import { TagContainer } from "../Tag/styles";

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
  }
  Button {
    background-color: #ffebd9;
    display: block;
    margin: 8px 0;
    font-weight: bold;
  }
  ${Title} {
    margin: 8px;
  }
`;

export const CardRestaurant = styled.div`
  background-color: #fff;
  color: #e66767;
  display: block;
  border: solid 1.5px #e66767;
  position: relative;

  ${Title} {
    margin: 8px 8px 16px;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 18px;
      font-weight: bold;
      display: flex;
      text-align: center;
      img {
        margin: 0 6px;
      }
    }
  }
  ${Description} {
    margin: 8px;
  }
  > img {
    display: block;
    height: 250px;
    object-fit: cover;
    width: 100%;
  }
  ${TagContainer} {
    margin-right: 8px;
    text-transform: capitalize;
  }
`;

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;
