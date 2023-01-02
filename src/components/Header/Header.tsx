import { HeaderContainer, InnerContainer } from "./Header.styles";
import { ReactComponent as Logo } from "@assets/logo.svg";
import { Button } from "@components/Button";
import { useMemo } from "react";
import { useWindowScroll } from "react-use";

export const Header = (): JSX.Element => {
  const { y } = useWindowScroll();
  /* ######################################## */
  /* State */
  /* ######################################## */
  const isScrolled = useMemo(() => {
    return y !== 0;
  }, [y]);

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <InnerContainer size="pc">
        <Logo />
        <Button />
      </InnerContainer>
    </HeaderContainer>
  );
};
