import * as S from "./styles";

type Props = {
  descricao: string;
  nome: string;
  foto: string;
  id?: number;
};

const Card = ({ descricao, foto, nome }: Props) => (
  <S.Card>
    <img src={foto} alt="" />
    <S.Title>{nome}</S.Title>
    <S.Description>{descricao}</S.Description>
    <S.Button>Adicione ao carrinho</S.Button>
  </S.Card>
);

export default Card;
