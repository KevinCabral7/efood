import { useEffect, useState } from "react";
import CardList from "../../components/CardList";

export interface CardapioItem {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
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
  const [item, setItem] = useState<Item[]>([]);

  const verificaLog = () => {
    console.log(item);
  };

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes").then(
      (res) => res.json().then((res) => setItem(res))
    );
    fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes").then(
      (res) => console.log(res.json())
    );
  }, []);

  if (item) {
    verificaLog();
  }

  return (
    <>
      <div className="container">
        <CardList Items={item} type={"restaurant"} />
      </div>
    </>
  );
};

export default Home;
