import { useEffect, useState } from "react";
import CardList from "../../components/CardList";

export type Item = {
  id: number;
  cardapio: [
    {
      descricao: string;
      nome: string;
      foto: string;
      porcao: string;
      preco: number;
    }
  ];
};
const List = () => {
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
      <h1>a</h1>
      <CardList Items={item} />
    </>
  );
};
export default List;
