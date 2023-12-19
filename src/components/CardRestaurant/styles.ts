import styled from "styled-components";
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

export const InfosContainer = styled.div`
  border: solid 1.5px #e66767;
  display: block;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 8px 16px;

  span {
    font-size: 18px;
    font-weight: bold;
    display: flex;
    text-align: center;

    img {
      margin: 0 6px;
    }
  }
`;

export const CardRestaurant = styled.div`
  background-color: #fff;
  color: #e66767;
  position: relative;

  ${Title} {
  }

  ${Description} {
    margin: 0 8px;
  }

  > img {
    display: block;
    height: 250px;
    object-fit: cover;
    width: 100%;
  }

  ${TagContainer} {
    color: #ffebd9;
    &:last-child {
      margin-right: 16px;
      margin-left: 8px;
    }

    text-transform: capitalize;
  }
`;

export const Infos = styled.div`
  margin-top: 16px;

  position: absolute;
  top: 0;
  right: 0;
`;
