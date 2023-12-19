import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Item } from "../Home";
import ItemList from "../../components/ItemList";
import NavBanner from "../../components/NavBanner";

const List = () => {
  const [item, setItem] = useState<Item>();
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`).then(
      (res) => res.json().then((res) => setItem(res))
    );
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`).then(
      (res) => console.log(res.json())
    );
  }, [id]);
  if (!item) {
    return <h3>Carregando...</h3>;
  }

  return (
    <>
      <NavBanner item={item} />
      <div className="container">
        <ItemList item={item.cardapio} />
      </div>
    </>
  );
};
export default List;
