import { FooterContainer } from "./styles";
import icone from "../../assets/logo.png";
import facebookIcon from "../../assets/facebook-round-svgrepo-com.png";
import instagramIcon from "../../assets/instagram-round-svgrepo-com.png";
import twitterIcon from "../../assets/twitter-2-svgrepo-com.png";

const Footer = () => (
  <FooterContainer>
    <img src={icone} alt="" />
    <div>
      <img src={instagramIcon} alt="" />
      <img src={facebookIcon} alt="" />
      <img src={twitterIcon} alt="" />
    </div>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.{" "}
    </p>
  </FooterContainer>
);
export default Footer;
