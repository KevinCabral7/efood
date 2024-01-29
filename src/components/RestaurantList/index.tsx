import CardRestaurant from "../CardRestaurant";
import * as S from "./styles";
import { Item } from "../../Pages/Home";
export type Props = {
  Items: Item[];
};

const RestaurantList = ({ Items }: Props) => {
  if (!RestaurantList) {
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
          <li key={item.id}>
            <CardRestaurant
              id={item.id}
              avaliacao={item.avaliacao}
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

export default RestaurantList;
