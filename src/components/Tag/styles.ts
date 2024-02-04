import { styled } from "styled-components";

import { Props } from ".";
import { colors } from "../../styles";

export const TagContainer = styled.span<Props>`
  background-color: ${colors.pink};
  color: ${colors.white};
  font-size: 12px;
  font-weight: bold;
  padding: 6px;
`;
