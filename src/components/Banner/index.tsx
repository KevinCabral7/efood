import { Item } from "../../Pages/Home";
import { Hero } from "./styles";
type Props = {
  item: Item;
};

const Banner = ({ item }: Props) => {
  if (!item) {
    return <h3>Carregando...</h3>;
  }

  return (
    <>
      <Hero style={{ backgroundImage: `url(${item.capa})` }}>
        <h4>{item.tipo}</h4>
        <h3>{item.titulo}</h3>
      </Hero>
    </>
  );
};

export default Banner;
