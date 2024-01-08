import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";
import * as S from "./styles";
import { RootReducer } from "../../store";
import { close, remove } from "../../store/reducers/cart";
import { formataPreco } from "../ItemList/index";
const Cart = () => {
  const dispatch = useDispatch();
  const { items, isOpen } = useSelector((state: RootReducer) => state.cart);
  const closeCart = () => {
    dispatch(close());
  };
  const getTotalPrices = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco);
    }, 0);
  };
  const removeItem = (id: number) => {
    dispatch(remove(id));
  };
  return (
    <>
      <S.CartContainer className={isOpen ? "is-open" : ""}>
        <S.SideBar>
          <ul>
            {items.map((item) => (
              <S.CartItem key={item.id}>
                <img src={item.foto} alt="" />
                <div>
                  <h3>{item.nome}</h3>
                  <span>{formataPreco(item.preco)}</span>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                  ></button>
                </div>
              </S.CartItem>
            ))}
          </ul>
          <S.TotalPrice>
            Total a pagar <span>{formataPreco(getTotalPrices())}</span>
          </S.TotalPrice>
          <Button type={"button"}>Continuar com a entrega</Button>
        </S.SideBar>
        <S.Overlay onClick={closeCart} />
      </S.CartContainer>
    </>
  );
};

export default Cart;
