import Card from "../Card";
import * as S from "./styles";
import { Button } from "../Card/styles";
import { Item } from "../../Pages/List";
import { useState } from "react";

type Props = {
  Items: Item[];
};

const CardList = ({ Items }: Props) => {
  const [modal, setModal] = useState({
    isVisible: false,
    url: "",
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
  return (
    <>
      <S.Container>
        {Items.map((item) => (
          <li
            key={item.id}
            onClick={() =>
              setModal({
                url: item.cardapio[0].foto,
                isVisible: true,
                foto: item.cardapio[0].foto,
                nome: item.cardapio[0].nome,
                descricao: item.cardapio[0].descricao,
                porcao: item.cardapio[0].porcao,
                preco: item.cardapio[0].preco,
              })
            }
          >
            <Card
              foto={item.cardapio[0].foto}
              nome={item.cardapio[0].nome}
              descricao={item.cardapio[0].descricao}
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
              <Button>
                Adicione ao carrinho - {formataPreco(modal.preco)}
              </Button>
            </div>
          </S.ModalContent>
          <div className="overlay"></div>
        </S.Modal>
      </S.Container>
    </>
  );
};

export default CardList;
