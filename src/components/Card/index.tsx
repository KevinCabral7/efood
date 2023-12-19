import * as S from "./styles";

import { ButtonContainer } from "../Button/styles";

type Props = {
  descricao: string;
  nome?: string;
  foto?: string;
};

const Card = ({ descricao, foto, nome }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length >= 200) {
      return descricao.slice(0, 160) + "...";
    }
    return descricao;
  };
  return (
    <S.CardItem>
      <img src={foto} alt="" />
      <S.Title>{nome}</S.Title>
      <S.Description>{getDescricao(descricao)}</S.Description>
      <ButtonContainer>Adicione ao carrinho</ButtonContainer>
    </S.CardItem>
  );
};

export default Card;
