import { styled } from "styled-components";

export const Card = styled.div`
  background-color: #e66767;
  font-family: sans-serif;
  color: #fff;
  display: block;
  padding: 8px;
  img {
    display: block;
    height: 250px;
    object-fit: cover;
    width: 100%;
  }
`;
export const Title = styled.h3`
  font-size: 16px;
  display: block;
`;
export const Description = styled.p`
  font-size: 14px;
  display: block;
  line-height: 22px;
`;
export const Button = styled.button`
  display: block;
  width: 100%;
  color: #e66767;
  background-color: #fff;
  border: none;
  line-height: 16.41px;
  font-size: 14px;
  padding: 4px;
`;
