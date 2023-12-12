import { useState } from "react";

import { CardapioItem, Item } from "../../Pages/Home";
import { ButtonContainer } from "../../components/Button/styles";
import * as S from "./styles";
import Card from "../../components/Card";
import Banner from "../Banner";

type Props = {
  item: CardapioItem[];
};

const ItemList = ({ item }: Props) => {
  const [modal, setModal] = useState({
    isVisible: false,
    foto: "",
    nome: "",
    descricao: "",
    porcao: "",
    preco: 0,
  });

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(preco);
  };
  if (item.length === 0) {
    return <h3>a </h3>;
  }
  return (
    <>
      <S.ContainerItems>
        {item.map((item) => (
          <li
            key={item.id}
            onClick={() =>
              setModal({
                isVisible: true,
                foto: item.foto,
                nome: item.nome,
                descricao: item.descricao,
                porcao: item.porcao,
                preco: item.preco,
              })
            }
          >
            <Card
              type="item"
              foto={item.foto}
              nome={item.nome}
              descricao={item.descricao}
            />
          </li>
        ))}
        <S.Modal className={modal.isVisible === true ? "visible" : ""}>
          <S.ModalContent>
            <img src={modal.foto} alt="" />
            <div>
              <h4>{modal.nome}</h4>
              <p>
                {modal.descricao}
                <br />
                <br />
                {modal.porcao}
              </p>
              <ButtonContainer>
                {"Adicione ao carrinho - " + formataPreco(modal.preco)}
              </ButtonContainer>
            </div>
          </S.ModalContent>
          <div className="overlay"></div>
        </S.Modal>
      </S.ContainerItems>
    </>
  );
};
export default ItemList;
