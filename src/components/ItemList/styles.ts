import styled from "styled-components";

import { ButtonContainer } from "../Button/styles";
import { breakpoints, colors } from "../../styles";

export const ContainerItems = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin: 56px 0 120px;
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  li {
    list-style: none;
  }
`;

export const Modal = styled.div`
  position: fixed;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }

  &.visible {
    display: flex;
  }
`;

export const ModalContent = styled.div`
  max-width: 1024px;
  position: relative;
  display: flex;
  z-index: 1;
  background-color: ${colors.pink};
  padding: 32px;
  font-family: sans-serif;
  line-height: 24px;
  @media (max-width: ${breakpoints.tablet}) {
    width: 90%;
    flex-direction: column;
    align-items: center;
    padding: 32px;
    div {
      text-align: center;
    }
  }
  h4 {
    font-size: 18px;
    font-weight: bold;
    color: ${colors.white};
    margin-bottom: 16px;
    @media (max-width: ${breakpoints.tablet}) {
      margin-top: 16px;
    }
  }

  p {
    color: ${colors.white};
    font-size: 14px;
    line-height: 22px;
    @media (max-width: ${breakpoints.tablet}) {
      margin-bottom: 16px;
    }
  }

  > img {
    width: 280px;
    height: 280px;
    display: block;
    margin-right: 24px;
    object-fit: cover;
    @media (max-width: ${breakpoints.tablet}) {
      margin: 0;
      width: 100%;
    }
  }
  ${ButtonContainer} {
    width: auto;
    font-weight: bold;
    margin-top: 16px;
    @media (max-width: ${breakpoints.tablet}) {
      margin: 0 auto;
    }
  }
`;
export const ModalClose = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 8px 8px 0 0;
  cursor: pointer;
`;
