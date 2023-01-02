import Link from "next/link";
import { StyledButton } from "./Buttons.styles";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  content: string;
  isAppearing?: boolean;
  href: string;
}

export const Button = ({
  content,
  href,
  isAppearing = false,
}: ButtonProps): JSX.Element => {
  return (
    <StyledButton isAppearing={isAppearing}>
      <Link href={href}>{content}</Link>
    </StyledButton>
  );
};
