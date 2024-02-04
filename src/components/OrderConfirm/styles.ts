import styled from "styled-components";
import { colors } from "../../styles";

export const OrderContainer = styled.div`
  color: ${colors.lightWhite};
  .margin-top {
    margin-top: 24px;
  }
  .margin-bottom {
    margin-bottom: 24px;
  }
  p {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const Title = styled.h3`
  font-size: 16px;
  margin-bottom: 16px;
  font-weight: 700;
`;
