import { styled } from "styled-components";
import { breakpoints, colors } from "../../styles";

export const Title = styled.h3`
  font-size: 18px;
  display: block;
`;

export const Description = styled.p`
  font-size: 14px;
  display: block;
  line-height: 22px;
`;

export const CardItem = styled.div`
  background-color: ${colors.pink};
  color: ${colors.white};
  display: block;
  padding: 8px;
  height: 100%;
  @media (max-width: ${breakpoints.tablet}) {
  }

  img {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 167px;
  }
  ${Description} {
    line-height: 22px;
    font-size: 14px;
    color: ${colors.lightWhite};
    font-weight: 400;
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 12px;
      line-height: 18px;
    }
  }
  Button {
    background-color: ${colors.lightWhite};
    display: block;
    font-weight: bold;
    margin-top: 8px;
  }
  ${Title} {
    margin: 8px 0;
    font-size: 16px;
    white-space: nowrap;
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 14px;
      line-height: 16px;
    }
  }
`;
