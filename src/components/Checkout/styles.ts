import styled from "styled-components";

import { ButtonContainer } from "../Button/styles";
import { colors } from "../../styles";

type InputGroupWidth = {
  maxWidth?: string;
};
type RowGap = {
  gap?: string;
};

export const CheckoutContainer = styled.div`
  color: ${colors.lightWhite};
  font-weight: 700;
`;

export const Title = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
`;

export const ButtonGroup = styled.div`
  ${ButtonContainer} {
    margin-bottom: 8px;
    &:first-child {
      margin-top: 24px;
    }
  }
`;

export const InputGroup = styled.div<InputGroupWidth>`
  margin-bottom: 8px;
  input {
    color: ${colors.gray};
    background-color: ${colors.lightWhite};
    border: none;
    height: 32px;
    margin: 8px 0;
    font-weight: 700;
    padding: 8px 0 8px 8px;
  }
  .error {
    border: 2px solid red;
  }

  input,
  label {
    display: block;
    width: ${(props) => props.maxWidth || "100%"};
    font-size: 14px;
  }
`;

export const Row = styled.div<RowGap>`
  display: flex;
  gap: ${(props) => props.gap || "34px"};
`;
