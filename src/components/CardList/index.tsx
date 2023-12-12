import Card from "../Card";
import * as S from "./styles";
import { Item } from "../../Pages/Home";
import Banner from "../Banner";
export type Props = {
  Items: Item[];
  type: "restaurant" | "item";
};

const CardList = ({ Items, type }: Props) => {
  if (!CardList) {
    return (
      <div>
        <h3>Aguarde</h3>
      </div>
    );
  }
  return (
    <>
      <S.ContainerRestaurant>
        {Items.map((item) => (
          <li>
            <Card
              id={item.id}
              avaliacao={item.avaliacao}
              type={type}
              destacado={item.destacado}
              tipo={item.tipo}
              capa={item.capa}
              titulo={item.titulo}
              descricao={item.descricao}
            />
          </li>
        ))}
      </S.ContainerRestaurant>
    </>
  );
};

export default CardList;
