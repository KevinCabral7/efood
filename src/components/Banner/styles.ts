import styled from "styled-components";

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
  position: relative;
  padding-top: 16px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  .container {
    z-index: 1;
  }

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
    font-size: 32px;
    line-height: 37.5px;
  }
  h4 {
    margin-bottom: 156px;
    margin-top: 24px;
    font-weight: 100;
    text-transform: capitalize;
  }
  h3 {
    font-weight: bold;
    margin-bottom: 32px;
  }
`;
