import RestaurantList from "../../components/RestaurantList";
import Nav from "../../components/Nav";
import Loader from "../../components/Loader";

import { useGetRestaurantQuery } from "../../services/api";

export interface CardapioItem {
  foto: string;
  preco: number;
  nome: string;
  descricao: string;
  porcao: string;
  id: number;
}

export type Item = {
  id: number;
  tipo: string;
  descricao: string;
  titulo: string;
  avaliacao: number;
  capa: string;
  destacado: boolean;
  cardapio: CardapioItem[];
};

const Home = () => {
  const { data: item } = useGetRestaurantQuery();
  if (item) {
    return (
      <>
        <Nav />
        <div className="container">
          <RestaurantList Items={item} />
        </div>
      </>
    );
  }
  return <Loader />;
};

export default Home;
