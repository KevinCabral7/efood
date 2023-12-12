import styled from "styled-components";

export const ContainerItems = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  margin-top: 40px;
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
  max-width: 960px;
  position: relative;
  display: flex;
  z-index: 1;
  background-color: #e66767;
  padding: 32px;
  font-family: sans-serif;
  line-height: 24px;
  h4 {
    font-size: 16px;
    font-weight: bold;
    color: #fff;
  }

  p {
    color: #fff;
  }

  img {
    width: 100%;
    display: block;
    height: 250px;
    margin-right: 24px;
  }
`;
