import { useTranslation } from "@hooks/useTranslation";
import { FooterContainer, FooterText } from "./Footer.styles";

export const Footer = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <FooterContainer>
      <FooterText>
        {t({ id: "footer.copyright" }, { date: new Date().getFullYear() })}
      </FooterText>
    </FooterContainer>
  );
};
