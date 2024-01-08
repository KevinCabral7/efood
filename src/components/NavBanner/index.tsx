import Banner from "../Banner";
import icone from "../../assets/logo.png";
import { NavBannerContainer, ItemsBannerContainer } from "./styles";
import { Item } from "../../Pages/Home";
import { open } from "../../store/reducers/cart";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
type Props = {
  item: Item;
};

const NavBanner = ({ item }: Props) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootReducer) => state.cart);
  const openCart = () => {
    dispatch(open());
  };

  return (
    <>
      <NavBannerContainer>
        <ItemsBannerContainer>
          <div className="container">
            <p>Restaurantes</p>
            <img src={icone} alt="" />
            <p onClick={openCart}>{items.length} Produto(s) no carrinho</p>
          </div>
        </ItemsBannerContainer>
        <Banner item={item} />
      </NavBannerContainer>
    </>
  );
};

export default NavBanner;
