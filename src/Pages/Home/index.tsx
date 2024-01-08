import CardList from "../../components/CardList";
import Nav from "../../components/Nav";
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
          <CardList Items={item} />
        </div>
      </>
    );
  }
  return <h3>Carregando...</h3>;
};

export default Home;
