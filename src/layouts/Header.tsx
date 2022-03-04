
import { FC } from "react";
import { Container } from "../components/styles/Container.style";
import { Flex } from "../components/styles/Flex.style";
import {
  HeaderStyled,
  Logo,
  NavUnList,
  StyledLink,
} from "../components/styles/Header.style";
import { Humbuger } from "../components/UI/Humbuger";
interface Props {}

const Header: FC<Props> = () => {
 
  return (
    <HeaderStyled>
      <Container>
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Logo>
            <StyledLink to="/">fortune</StyledLink>
          </Logo>
          <NavUnList>
            <Flex flexDirection="row">
              <li>
                <StyledLink to="/politic">politic</StyledLink>
              </li>
              <li>
                <StyledLink to="/tech">techonology</StyledLink>
              </li>
              <li>
                <StyledLink to="/health">health</StyledLink>
              </li>
              <li>
                <StyledLink to="/business">Business</StyledLink>
              </li>
              <li>
                <StyledLink to="/cryptocurrency">cryptocurrency</StyledLink>
              </li>
            </Flex>
          </NavUnList>
          {/* <Humbuger/> */}
        </Flex>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
