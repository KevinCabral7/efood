import styled from "styled-components";
import { TagContainer } from "../Tag/styles";

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 280px;
  position: relative;
  padding-top: 16px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  &::after {
    content: "";
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.56;
  }
  h4,
  h3 {
    color: #fff;
    margin-left: 170px;
    z-index: 1;
    font-size: 32px;
    line-height: 37.5px;
  }
  h4 {
    margin-bottom: 156px;
    font-weight: 100;
  }
  h3 {
    font-weight: bold;
  }
`;
