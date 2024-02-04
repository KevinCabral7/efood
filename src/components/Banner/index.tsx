import { Item } from "../../Pages/Home";

import { Hero } from "./styles";

type Props = {
  item?: Item;
};

const Banner = ({ item }: Props) => {
  if (!item) {
    return <h3>Carregando...</h3>;
  }

  return (
    <>
      <Hero style={{ backgroundImage: `url(${item.capa})` }}>
        <div className="container">
          <h4>{item.tipo}</h4>
          <h3>{item.titulo}</h3>
        </div>
      </Hero>
    </>
  );
};

export default Banner;
