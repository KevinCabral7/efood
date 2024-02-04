import { useState } from "react";
import InputMask from "react-input-mask";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../Button";
import OrderConfirm from "../OrderConfirm";

import { clearState, toCart, close } from "../../store/reducers/cart";
import { usePurchaseMutation } from "../../services/api";

import * as S from "./styles";

type Props = {
  totalPrice: string;
};
type InitialNumber = {
  number: number;
};

const Checkout = ({ totalPrice }: Props, { number }: InitialNumber) => {
  const [purchaseState, setPurchaseState] = useState("adressInfo");
  const dispatch = useDispatch();
  const goToCart = () => {
    dispatch(toCart());
  };
  const clearCartState = () => {
    dispatch(clearState());
    dispatch(close());
  };
  const [purchase, { data }] = usePurchaseMutation();
  const form = useFormik({
    initialValues: {
      orderOwner: "",
      adress: "",
      city: "",
      cep: "",
      houseNumber: number,
      complement: "",

      cardOwner: "",
      cardNumber: "",
      cardCVV: number,
      expiresMonth: number,
      expiresYear: number,
    },
    validationSchema: Yup.object({
      orderOwner: Yup.string()
        .min(5, "O nome deve conter no mínimo 5 caracteres")
        .required("O campo é obrigatório"),
      adress: Yup.string().required("O campo é obrigatório"),
      city: Yup.string()
        .min(5, "O campo deve conter 5 caracteres")
        .required("O campo é obrigatório"),
      cep: Yup.string()
        .min(8, "O campo deve conter 8 caracteres")
        .required("O campo é obrigatório"),
      houseNumber: Yup.number().required("O campo é obrigatório"),
      complement: Yup.string().optional(),
      cardOwner: Yup.string()
        .min(5, "O nome deve conter no mínimo 5 caracteres")
        .required("O campo é obrigatório"),
      cardNumber: Yup.string()
        .min(19, "Número do cartão inválido")
        .required("O campo é obrigatório"),
      cardCVV: Yup.string()
        .length(3, "O campo deve conter 3 caracteres")
        .required("O campo é obrigatório"),
      expiresMonth: Yup.string()
        .length(2, "O campo deve conter 2 caracteres")
        .required("O campo é obrigatório"),
      expiresYear: Yup.string()
        .length(2, "O campo deve conter 2 caracteres")
        .required("O campo é obrigatório"),
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.orderOwner,
          adress: {
            city: values.city,
            description: values.adress,
            number: values.houseNumber,
            zipCode: values.cep,
            complement: values.complement,
          },
        },
        payment: {
          card: {
            code: values.cardCVV,
            name: values.cardOwner,
            number: values.cardNumber,
            expires: {
              month: values.expiresMonth,
              year: values.expiresYear,
            },
          },
        },
        products: [
          {
            id: 1,
            price: 10,
          },
        ],
      });
    },
  });

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched;
    const isInvalid = fieldName in form.errors;
    const hasError = isTouched && isInvalid;

    return hasError;
  };

  return (
    <S.CheckoutContainer>
      <form onSubmit={form.handleSubmit}>
        {purchaseState === "adressInfo" ? (
          <div>
            <S.Title>Entrega</S.Title>
            <S.InputGroup>
              <label htmlFor="orderOwner">Quem irá receber</label>
              <input
                type="text"
                id="orderOwner"
                name="orderOwner"
                value={form.values.orderOwner}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError("orderOwner") ? "error" : ""}
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="adress">Endereço</label>
              <input
                type="text"
                id="adress"
                name="adress"
                value={form.values.adress}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError("adress") ? "error" : ""}
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="city">Cidade</label>
              <input
                type="text"
                id="city"
                name="city"
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError("city") ? "error" : ""}
              />
            </S.InputGroup>
            <S.Row>
              <S.InputGroup maxWidth="155px">
                <label htmlFor="cep">CEP</label>
                <InputMask
                  type="text"
                  id="cep"
                  name="cep"
                  value={form.values.cep}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError("cep") ? "error" : ""}
                  mask="99999-999"
                />
              </S.InputGroup>
              <S.InputGroup maxWidth="155px">
                <label htmlFor="houseNumber">Número</label>
                <input
                  type="text"
                  id="houseNumber"
                  name="houseNumber"
                  value={form.values.houseNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError("houseNumber") ? "error" : ""}
                />
              </S.InputGroup>
            </S.Row>
            <S.InputGroup>
              <label htmlFor="complement">Complemento (opcional)</label>
              <input
                type="text"
                id="complement"
                name="complement"
                value={form.values.complement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError("complement") ? "error" : ""}
              />
            </S.InputGroup>
            <S.ButtonGroup>
              <Button
                type="button"
                onClick={() => setPurchaseState("paymentInfo")}
              >
                Continuar com o pagamento
              </Button>
              <Button type="button" onClick={() => goToCart()}>
                Voltar para o carrinho
              </Button>
            </S.ButtonGroup>
          </div>
        ) : purchaseState === "concluded" && data ? (
          <OrderConfirm orderId={data.orderId}>
            <Button
              type="button"
              onClick={() => {
                setPurchaseState("adressInfo");
                clearCartState();
              }}
            >
              Concluir
            </Button>
          </OrderConfirm>
        ) : (
          <div>
            <S.Title>Pagamento - Valor a pagar: {totalPrice}</S.Title>
            <S.InputGroup>
              <label htmlFor="cardOwner">Nome no cartão</label>
              <input
                type="text"
                id="cardOwner"
                name="cardOwner"
                value={form.values.cardOwner}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError("cardOwner") ? "error" : ""}
              />
            </S.InputGroup>
            <S.Row gap="30px">
              <S.InputGroup maxWidth="228px">
                <label htmlFor="cardNumber">Número do cartão</label>
                <InputMask
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={form.values.cardNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError("cardNumber") ? "error" : ""}
                  mask="9999 9999 9999 9999"
                />
              </S.InputGroup>
              <S.InputGroup maxWidth="86px">
                <label htmlFor="cardCVV">CVV</label>
                <InputMask
                  type="text"
                  id="cardCVV"
                  name="cardCVV"
                  value={form.values.cardCVV}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError("cardCVV") ? "error" : ""}
                  mask="999"
                />
              </S.InputGroup>
            </S.Row>
            <S.Row>
              <S.InputGroup>
                <label htmlFor="expiresMonth">Mês de vencimento</label>
                <InputMask
                  type="text"
                  id="expiresMonth"
                  name="expiresMonth"
                  value={form.values.expiresMonth}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError("expiresMonth") ? "error" : ""}
                  mask="99"
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="expiresYear">Ano de vencimento</label>
                <InputMask
                  type="text"
                  id="expiresYear"
                  name="expiresYear"
                  value={form.values.expiresYear}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError("expiresYear") ? "error" : ""}
                  mask="99"
                />
              </S.InputGroup>
            </S.Row>

            <S.ButtonGroup>
              <Button
                type="submit"
                onClick={() => {
                  form.submitForm();
                  setPurchaseState("concluded");
                }}
              >
                Finalizar pagamento
              </Button>
              <Button
                type="button"
                onClick={() => setPurchaseState("adressInfo")}
              >
                Voltar para a edição de endereço
              </Button>
            </S.ButtonGroup>
          </div>
        )}
      </form>
    </S.CheckoutContainer>
  );
};

export default Checkout;
