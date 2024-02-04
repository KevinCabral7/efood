import * as S from "./styles";

type Props = {
  descricao: string;
  nome?: string;
  foto?: string;
  children: JSX.Element;
};

const Card = ({ descricao, foto, nome, children }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length >= 200) {
      return descricao.slice(0, 153) + "...";
    }
    return descricao;
  };
  return (
    <S.CardItem>
      <img src={foto} alt="" />
      <S.Title>{nome}</S.Title>
      <S.Description>{getDescricao(descricao)}</S.Description>
      {children}
    </S.CardItem>
  );
};

export default Card;
