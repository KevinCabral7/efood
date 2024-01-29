import { useState } from "react";
import Button from "../Button";
import {
  InputGroup,
  Title,
  CheckoutContainer,
  ButtonGroup,
  Row,
} from "./styles";

type Props = {
  totalPrice: string;
};

const Checkout = ({ totalPrice }: Props) => {
  const [purchaseState, setPurchaseState] = useState("adressInfo");
  return (
    <CheckoutContainer>
      {purchaseState === "adressInfo" ? (
        <div>
          <Title>Entrega</Title>
          <InputGroup>
            <label htmlFor="orderOwner">Quem irá receber</label>
            <input type="text" id="orderOwner" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="adress">Endereço</label>
            <input type="text" id="adress" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="city">Cidade</label>
            <input type="text" id="city" />
          </InputGroup>
          <Row>
            <InputGroup maxWidth="155px">
              <label htmlFor="cep">CEP</label>
              <input type="text" id="cep" />
            </InputGroup>
            <InputGroup maxWidth="155px">
              <label htmlFor="houseNumber">Número</label>
              <input type="text" id="houseNumber" />
            </InputGroup>
          </Row>
          <InputGroup>
            <label htmlFor="complement">Complemento (opcional)</label>
            <input type="text" id="complement" />
          </InputGroup>
          <ButtonGroup>
            <Button
              type="button"
              onClick={() => setPurchaseState("paymentInfo")}
            >
              Continuar com o pagamento
            </Button>
            <Button
              type="button"
              onClick={() => setPurchaseState("adressInfo")}
            >
              Voltar para o carrinho
            </Button>
          </ButtonGroup>
        </div>
      ) : (
        <div>
          <Title>Pagamento - Valor a pagar: {totalPrice}</Title>
          <InputGroup>
            <label htmlFor="cardOwner">Nome no cartão</label>
            <input type="text" id="cardOwner" />
          </InputGroup>
          <Row gap="30px">
            <InputGroup maxWidth="228px">
              <label htmlFor="cardNumber">Número do cartão</label>
              <input type="text" id="cardNumber" />
            </InputGroup>
            <InputGroup maxWidth="86px">
              <label htmlFor="cardCVV">CVV</label>
              <input type="number" id="cardCVV" />
            </InputGroup>
          </Row>
          <Row>
            <InputGroup>
              <label htmlFor="expiresMonth">Mês de vencimento</label>
              <input type="text" id="expiresMonth" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="expiresYear">Ano de vencimento</label>
              <input type="text" id="expiresYear" />
            </InputGroup>
          </Row>

          <ButtonGroup>
            <Button type="button">Finalizar pagamento</Button>
            <Button
              type="button"
              onClick={() => setPurchaseState("adressInfo")}
            >
              Voltar para a edição de endereço
            </Button>
          </ButtonGroup>
        </div>
      )}
    </CheckoutContainer>
  );
};

export default Checkout;
