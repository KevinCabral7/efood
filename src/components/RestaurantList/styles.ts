import styled from "styled-components";
import { breakpoints } from "../../styles";

export const ContainerRestaurant = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 48px 80px;
  margin-top: 80px;
  margin-bottom: 120px;
  li {
    list-style: none;
  }
  @media (max-width: ${breakpoints.desktop}) and (min-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;
