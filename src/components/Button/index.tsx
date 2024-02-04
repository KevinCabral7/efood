import { ButtonContainer, ButtonLink } from "./styles";

export type Props = {
  to?: string;
  type?: "button" | "link" | "submit";
  onClick?: () => void;
  children: string;
};

const Button = ({ to, type, children, onClick }: Props) => {
  if (type === "button" || type === "submit") {
    return (
      <ButtonContainer type={type} onClick={onClick}>
        {children}
      </ButtonContainer>
    );
  }
  return (
    <ButtonLink type="link" to={to as string}>
      {children}
    </ButtonLink>
  );
};

export default Button;
