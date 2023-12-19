import Banner from "../Banner";
import icone from "../../assets/logo.png";
import { NavBannerContainer, ItemsBannerContainer } from "./styles";
import { Item } from "../../Pages/Home";

type Props = {
  item: Item;
};

const NavBanner = ({ item }: Props) => {
  return (
    <>
      <NavBannerContainer>
        <ItemsBannerContainer>
          <div className="container">
            <p>Restaurantes</p>
            <img src={icone} alt="" />
            <p>0 Produto(s) no carrinho</p>
          </div>
        </ItemsBannerContainer>
        <Banner item={item} />
      </NavBannerContainer>
    </>
  );
};

export default NavBanner;
