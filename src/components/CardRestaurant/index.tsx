import { ButtonLink } from "../Button/styles";
import icone from "../../assets/estrela.png";
import Tag from "../Tag";
import * as S from "./styles";

type Props = {
  id?: number;
  capa?: string;
  tipo?: string;
  avaliacao?: number;
  titulo?: string;
  destacado?: boolean;
  descricao: string;
};
const CardRestaurant = ({
  capa,
  tipo,
  destacado,
  titulo,
  avaliacao,
  descricao,
  id,
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length >= 200) {
      return descricao.slice(0, 247) + "...";
    }
    return descricao;
  };

  return (
    <S.CardRestaurant>
      <img src={capa} alt="" />
      <S.InfosContainer>
        <S.Infos>
          {tipo && <Tag>{tipo}</Tag>}
          {destacado === true && <Tag>Destaque da semana</Tag>}
        </S.Infos>
        <S.TitleContainer>
          <S.Title>{titulo}</S.Title>
          <span>
            {avaliacao}
            <img src={icone} alt="" />
          </span>
        </S.TitleContainer>
        <S.Description>{getDescricao(descricao)}</S.Description>
        <ButtonLink to={`/list/${id}`}>Saiba mais</ButtonLink>
      </S.InfosContainer>
    </S.CardRestaurant>
  );
};

export default CardRestaurant;
