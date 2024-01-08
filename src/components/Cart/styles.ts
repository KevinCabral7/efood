import styled from "styled-components";
import lixeira from "../../assets/lixeira.png";
import { ButtonContainer } from "../Button/styles";

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
  background-color: #e66767;
  padding: 32px 8px 0;
  max-width: 360px;
  width: 100%;
  ${ButtonContainer} {
    font-weight: bold;
    font-size: 14px;
  }
`;

export const CartItem = styled.li`
  background-color: #ffebd9;
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
    color: #e66767;
  }
  span {
    display: block;
    font-size: 14px;
    color: #e66767;
    margin-top: 16px;
  }
`;

export const TotalPrice = styled.p`
  font-size: 14px;
  color: #ffebd9;
  display: flex;
  justify-content: space-between;
  margin: 40px 0 16px;
`;
