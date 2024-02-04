import { useParams } from "react-router-dom";

import ItemList from "../../components/ItemList";
import NavBanner from "../../components/NavBanner";
import Loader from "../../components/Loader";

import { useGetListQuery } from "../../services/api";

const List = () => {
  const { id } = useParams();
  const { data: item } = useGetListQuery(id!);
  if (!item) {
    return (
      <h3>
        <Loader />
      </h3>
    );
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
