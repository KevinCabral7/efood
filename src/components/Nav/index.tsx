import { NavContainer } from "./styles";
import icone from "../../assets/logo.png";
const Nav = () => {
  return (
    <NavContainer>
      <img src={icone} alt="" />
      <p>Viva experiências gastronômicas no conforto da sua casa</p>
    </NavContainer>
  );
};

export default Nav;
