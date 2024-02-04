import { useDispatch, useSelector } from "react-redux";

import Button from "../Button";
import Checkout from "../Checkout";

import { parsePrice } from "../../Utils/index";
import { RootReducer } from "../../store";
import { close, remove, toCheckout } from "../../store/reducers/cart";

import * as S from "./styles";
const Cart = () => {
  const dispatch = useDispatch();
  const { items, isOpen, isPaying } = useSelector(
    (state: RootReducer) => state.cart
  );
  const goToCheckout = () => {
    dispatch(toCheckout());
  };
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
  const totalPrice = () => {
    return parsePrice(getTotalPrices());
  };
  return (
    <>
      <S.CartContainer className={isOpen ? "is-open" : ""}>
        <S.SideBar>
          {isPaying ? (
            <Checkout totalPrice={totalPrice()} />
          ) : items.length > 0 ? (
            <>
              <ul>
                {items.map((item) => (
                  <S.CartItem key={item.id}>
                    <img src={item.foto} alt="" />
                    <div>
                      <h3>{item.nome}</h3>
                      <span>{parsePrice(item.preco)}</span>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                      ></button>
                    </div>
                  </S.CartItem>
                ))}
              </ul>
              <S.TotalPrice>
                Total a pagar <span>{totalPrice()}</span>
              </S.TotalPrice>
              <Button type={"button"} onClick={() => goToCheckout()}>
                Continuar com a entrega
              </Button>
            </>
          ) : (
            <p className="empty-text">
              O carrinho está vazio. Adicione ao menos um item para continuar
              com a compra
            </p>
          )}
        </S.SideBar>
        <S.Overlay onClick={closeCart} />
      </S.CartContainer>
    </>
  );
};

export default Cart;
