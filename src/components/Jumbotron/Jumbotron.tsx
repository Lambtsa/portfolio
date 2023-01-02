import { Button } from "@components/Button";
import { SocialIcons } from "@components/SocialIcons";
import { useTranslation } from "@hooks/useTranslation";
import {
  JumbotronContainer,
  JumbotronInnerContainer,
  JumbotronSubtitle,
  JumbotronTitle,
} from "./Jumbotron.styles";

export const Jumbotron = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <JumbotronContainer>
      <JumbotronInnerContainer>
        <JumbotronTitle>{t({ id: "jumbotron.title" })}</JumbotronTitle>
        <JumbotronSubtitle>{t({ id: "jumbotron.subtitle" })}</JumbotronSubtitle>
        <Button />
        <SocialIcons />
      </JumbotronInnerContainer>
    </JumbotronContainer>
  );
};
