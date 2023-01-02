import { Button } from "@components/Button";
import { Container } from "@components/Container";
import { useTranslation } from "@hooks/useTranslation"
import { JumbotronContainer, JumbotronSubtitle, JumbotronTitle } from "./Jumbotron.styles"

export const Jumbotron = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <JumbotronContainer>
      <Container size="tablet" alignment="center">
        <JumbotronTitle>
          {t({ id: "jumbotron.title" })}
        </JumbotronTitle>
        <JumbotronSubtitle>
          {t({ id: "jumbotron.subtitle" })}
        </JumbotronSubtitle>
        <Button />
      </Container>
    </JumbotronContainer>
  )
}