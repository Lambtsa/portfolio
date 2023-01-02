import { AboutContainer, AboutText, AboutTitle, Img, TextContainer } from "./About.styles";
import TomImg from "@assets/IMG_3377.webp";
import { Container } from "@components/Container";

export const About = (): JSX.Element => {
  return (
    <Container size="pc" alignment="center">
      <AboutContainer>
        <Img src={TomImg} alt="Tom Lamb in a dark t shirt and a flat cap" />
        <TextContainer>
          <AboutTitle>About Me</AboutTitle>
          <AboutText>I am full stack Javascript developer and product manager who has worked in both LegalTech and Fintech within the Stockholm ecosystem.</AboutText>
          <AboutText>Driven by process with a keen eye on the big picture, I strive to constantly optimise my work and the work of the teams I manage to fulfil product objectives.</AboutText>
          <AboutText>I have launched multiple products by ensuring productive cross-functional team collaboration and encouraging communication within an agile framework.</AboutText>
          <AboutText>I am also a passionate skier, a skateboarder and when I am not outside in the wilderness, I spend my time developing websites and apps.</AboutText>
        </TextContainer>
      </AboutContainer>
    </Container>
  )
}