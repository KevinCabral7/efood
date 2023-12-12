import styled from "styled-components";
import { Props } from ".";
import { Link } from "react-router-dom";

export const ButtonContainer = styled.button<Props>`
  display: block;
  width: 100%;
  color: #e66767;
  background-color: #fff;
  border: none;
  line-height: 16.41px;
  font-size: 14px;
  padding: 4px;
`;

export const ButtonLink = styled(Link)`
  color: #fff;
  background-color: #e66767;
  border: none;
  line-height: 16.41px;
  font-size: 14px;
  padding: 4px;
  margin: 16px 0 8px 8px;
  display: block;
  width: auto;
  max-width: max-content;
`;
