import { ButtonContainer, ButtonLink } from "./styles";

export type Props = {
  to?: string;
  type?: "button" | "link";
  onClick?: () => void;
  variant?: "purchase" | "info";
  children: string;
};

const Button = ({ to, type, variant = "purchase", children }: Props) => {
  if (type === "button") {
    <ButtonContainer type="button" variant={variant}>
      {children}
    </ButtonContainer>;
  }
  return (
    <ButtonLink type="link" to={to as string}>
      Saiba mais
    </ButtonLink>
  );
};

export default Button;
