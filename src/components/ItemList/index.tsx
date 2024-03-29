import { useState } from "react";
import { useDispatch } from "react-redux";

import Card from "../../components/Card";

import { add, open } from "../../store/reducers/cart";
import { CardapioItem } from "../../Pages/Home";
import { parsePrice } from "../../Utils";

import close from "../../assets/close.png";

import * as S from "./styles";
import { ButtonContainer } from "../../components/Button/styles";

type Props = {
  item: CardapioItem[];
  item2?: CardapioItem;
};

const ItemList = ({ item, item2 }: Props) => {
  const dispatch = useDispatch();
  const closeModal = () => {
    setModal({
      isVisible: false,
      foto: "",
      nome: "",
      descricao: "",
      porcao: "",
      preco: 0,
      id: 0,
    });
  };
  const addToCart = () => {
    dispatch(
      add({
        descricao: modal.descricao,
        foto: modal.foto,
        id: modal.id,
        nome: modal.nome,
        porcao: modal.porcao,
        preco: modal.preco,
      })
    );
    closeModal();
    dispatch(open());
  };
  const [modal, setModal] = useState({
    isVisible: false,
    foto: "",
    nome: "",
    descricao: "",
    porcao: "",
    preco: 0,
    id: 0,
  });

  if (item.length === 0) {
    return <h3>a </h3>;
  }

  return (
    <>
      <S.ContainerItems>
        {item.map((item) => (
          <li key={item.id}>
            <Card foto={item.foto} nome={item.nome} descricao={item.descricao}>
              <ButtonContainer
                onClick={() =>
                  setModal({
                    isVisible: true,
                    foto: item.foto,
                    nome: item.nome,
                    descricao: item.descricao,
                    porcao: item.porcao,
                    preco: item.preco,
                    id: item.id,
                  })
                }
              >
                Mais detalhes
              </ButtonContainer>
            </Card>
          </li>
        ))}
        <S.Modal className={modal.isVisible === true ? "visible" : ""}>
          <S.ModalContent>
            <img src={modal.foto} alt="" />
            <S.ModalClose>
              <img
                src={close}
                onClick={() => closeModal()}
                alt="Ícone de fechar"
              />
            </S.ModalClose>
            <div>
              <h4>{modal.nome}</h4>
              <p>
                {modal.descricao}
                <br />
                <br />
                Serve: de{modal.porcao}
              </p>

              <ButtonContainer onClick={addToCart}>
                {"Adicione ao carrinho  " + parsePrice(modal.preco)}
              </ButtonContainer>
            </div>
          </S.ModalContent>
          <div className="overlay" onClick={() => closeModal()}></div>
        </S.Modal>
      </S.ContainerItems>
    </>
  );
};
export default ItemList;
