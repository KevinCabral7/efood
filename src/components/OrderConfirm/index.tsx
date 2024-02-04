import { OrderContainer, Title } from "./styles";

type Props = {
  orderId: string;
  children: JSX.Element;
};

const OrderConfirm = ({ orderId, children }: Props) => {
  return (
    <OrderContainer>
      <Title>Pedido realizado - {orderId}</Title>
      <p>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
      </p>
      <p className="margin-top">
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.{" "}
      </p>
      <p className="margin-top">
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </p>
      <p className="margin-top margin-bottom">
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </p>
      {children}
    </OrderContainer>
  );
};

export default OrderConfirm;
