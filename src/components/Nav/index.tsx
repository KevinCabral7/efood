import icone from "../../assets/logo.png";

import { NavContainer, ItemsContainer } from "./styles";
const Nav = () => {
  return (
    <NavContainer>
      <ItemsContainer>
        <img src={icone} alt="" />
        <p>Viva experiências gastronômicas no conforto da sua casa</p>
      </ItemsContainer>
    </NavContainer>
  );
};

export default Nav;
