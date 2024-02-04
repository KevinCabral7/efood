import styled from "styled-components";

import { breakpoints, colors } from "../../styles";

export const FooterContainer = styled.nav`
  background-color: ${colors.lightYellow};
  display: flex;
  font-weight: bold;
  flex-direction: column;
  align-items: center;
  > img {
    margin: 40px 0 32px;
  }
  img {
  }
  div {
    img {
      margin-bottom: 76px;
      margin-right: 8px;
      @media (max-width: ${breakpoints.tablet}) {
        margin-bottom: 24px;
      }
    }
  }
  p {
    margin-bottom: 40px;
    color: ${colors.pink};
    line-height: 11.72px;
    font-size: 10px;
    text-align: center;
    display: block;
    font-weight: 400;
    width: 40%;

    @media (max-width: ${breakpoints.tablet}) {
      width: 90%;
    }
  }
`;
