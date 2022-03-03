import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Flex } from "../styles/Flex.style";
import { NavUnList, StyledLink } from "../styles/Header.style";

export const Humbuger = () => {
    var isMenuOpen = function(state: any ) {
        return state.isOpen;
      };
  return (
    <Menu  onStateChange={isMenuOpen}>
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
        <StyledLink to="/celebrity">celebrity</StyledLink>
      </li>
    </Menu>
  );
};
