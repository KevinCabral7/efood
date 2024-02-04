import styled from "styled-components";

import { breakpoints, colors } from "../../styles";

export const NavContainer = styled.nav`
  background-color: ${colors.lightWhite};
  display: flex;
  font-weight: bold;
  flex-direction: column;
  align-items: center;
  img {
    display: block;
    margin: 64px auto 140px;
    @media (max-width: ${breakpoints.tablet}) {
      margin-bottom: 90px;
    }
  }
  p {
    margin-bottom: 40px;
    color: ${colors.pink};
    line-height: 42px;
    font-size: 36px;
    text-align: center;
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 20px;
      line-height: 24px;
    }
  }
`;

export const ItemsContainer = styled.div`
  width: 50%;
  @media (max-width: ${breakpoints.tablet}) {
    width: 90%;
  }
  @media (max-width: ${breakpoints.desktop}) and (min-width: ${breakpoints.tablet}) {
    width: 80%;
  }
`;
