import { useTranslation } from "@hooks/useTranslation";
import { StyledButton } from "./Buttons.styles";

export const Button = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <StyledButton>
      <a href="mailto:hello@tom-lamb.com">{t({ id: "jumbotron.btn" })}</a>
    </StyledButton>
  );
};
