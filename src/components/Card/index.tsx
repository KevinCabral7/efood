import Tag from "../Tag";
import * as S from "./styles";
import icone from "../../assets/estrela.png";
import { ButtonLink, ButtonContainer } from "../Button/styles";

export type Props = {
  descricao: string;
  nome?: string;
  foto?: string;
  id?: number;
  type: "restaurant" | "item";
  capa?: string;
  tipo?: string;
  avaliacao?: number;
  titulo?: string;
  destacado?: boolean;
};

const Card = ({
  descricao,
  foto,
  nome,
  type,
  avaliacao,
  capa,
  tipo,
  id,
  destacado,
  titulo,
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 250) {
      return descricao.slice(0, 247) + "...";
    }
    return descricao;
  };

  if (type === "item") {
    return (
      <S.CardItem>
        <img src={foto} alt="" />
        <S.Title>{nome}</S.Title>
        <S.Description>{getDescricao(descricao)}</S.Description>
        <ButtonContainer>Adicione ao carrinho</ButtonContainer>
      </S.CardItem>
    );
  }
  return (
    <S.CardRestaurant>
      <img src={capa} alt="" />
      <S.Infos>
        {tipo && <Tag>{tipo}</Tag>}
        {destacado === true && <Tag>Destaque</Tag>}
      </S.Infos>
      <div>
        <S.Title>{titulo}</S.Title>
        <span>
          {avaliacao}
          <img src={icone} alt="" />
        </span>
      </div>
      <S.Description>{getDescricao(descricao)}</S.Description>
      <ButtonLink to={`/list/${id}`}>Saiba mais</ButtonLink>
    </S.CardRestaurant>
  );
};

export default Card;
