import { useParams } from "react-router-dom";
import { useGetListQuery } from "../../services/api";
import ItemList from "../../components/ItemList";
import NavBanner from "../../components/NavBanner";

const List = () => {
  const { id } = useParams();
  const { data: item } = useGetListQuery(id!);
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
