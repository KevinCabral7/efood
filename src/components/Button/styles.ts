import styled from "styled-components";
import { Link } from "react-router-dom";

import { Props } from ".";
import { colors } from "../../styles";

export const ButtonContainer = styled.button<Props>`
  display: block;
  width: 100%;
  color: ${colors.pink};
  background-color: ${colors.lightWhite};
  border: none;
  line-height: 16.41px;
  font-size: 14px;
  padding: 4px 8px;
  cursor: pointer;
`;

export const ButtonLink = styled(Link)`
  color: ${colors.white};
  background-color: ${colors.pink};
  border: none;
  line-height: 16.41px;
  font-size: 14px;
  padding: 6px 4px;
  margin: 16px 0 8px 8px;
  display: block;
  width: auto;
  max-width: max-content;
  cursor: pointer;
`;
