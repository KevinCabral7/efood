import styled from "styled-components";

import { ButtonContainer } from "../Button/styles";
import { breakpoints, colors } from "../../styles";

import lixeira from "../../assets/lixeira.png";

export const CartContainer = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  display: none;
  justify-content: flex-end;
  &.is-open {
    display: flex;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
`;

export const SideBar = styled.aside`
  z-index: 1;
  background-color: ${colors.pink};
  padding: 32px 8px;
  max-width: 360px;
  width: 100%;
  @media (max-width: ${breakpoints.tablet}) {
    width: 80%;
  }

  ${ButtonContainer} {
    font-weight: bold;
    font-size: 14px;
  }
  .empty-text {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.lightWhite};
    text-align: center;
  }
`;

export const CartItem = styled.li`
  background-color: ${colors.lightWhite};
  padding: 8px 8px 12px 8px;
  margin-bottom: 16px;
  display: flex;
  position: relative;
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }
  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
  h3 {
    font-size: 18px;
    font-weight: bold;
    color: ${colors.pink};
  }
  span {
    display: block;
    font-size: 14px;
    color: ${colors.pink};
    margin-top: 16px;
  }
`;

export const TotalPrice = styled.p`
  font-size: 14px;
  color: ${colors.white};
  display: flex;
  justify-content: space-between;
  margin: 40px 0 16px;
`;
