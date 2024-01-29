import { ButtonContainer, ButtonLink } from "./styles";

export type Props = {
  to?: string;
  type?: "button" | "link";
  onClick?: () => void;
  variant?: "purchase" | "info";
  children: string;
};

const Button = ({
  to,
  type,
  variant = "purchase",
  children,
  onClick,
}: Props) => {
  if (type === "button") {
    return (
      <ButtonContainer type="button" variant={variant} onClick={onClick}>
        {children}
      </ButtonContainer>
    );
  }
  return (
    <ButtonLink type="link" to={to as string}>
      Saiba mais
    </ButtonLink>
  );
};

export default Button;
