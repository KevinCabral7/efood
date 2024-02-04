import styled from "styled-components";
import { breakpoints, colors } from "../../styles";
import { ButtonLink } from "../Button/styles";

export const NavBannerContainer = styled.nav`
  background-color: ${colors.lightYellow};
  font-weight: bold;

  img {
    @media (max-width: ${breakpoints.tablet}) {
      width: 30%;
    }
    @media (max-width: ${breakpoints.desktop}) {
      width: auto;
    }
  }
  p,
  ${ButtonLink} {
    color: ${colors.pink};
    background-color: transparent;
    font-size: 18px;
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 16px;
      text-align: center;
    }
  }
`;

export const ItemsBannerContainer = styled.div`
  padding: 64px 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;

    @media (max-width: ${breakpoints.tablet}) {
      gap: 24px;
    }
    @media (max-width: ${breakpoints.desktop}) {
      gap: 0;
      justify-content: space-around;
    }
  }
`;
