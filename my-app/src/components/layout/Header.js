import React from "react";
import styled from "styled-components";
import { default as logo } from "../../images/logos/logo.svg";
import { menuData } from "../../data/MenuData";
import MenuButton from "../buttons/MenuButton";

export default function Header() {
  return (
    <Wrapper>
      <Link href="/">
        <img src={logo} alt="logo" />
      </Link>
      <MenuWrapper count={menuData.length}>
        {menuData.map((item, index) => (
          <MenuButton key={index} item={item} />
        ))}
      </MenuWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  display: grid;
  grid-template-columns: 44px auto;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 30px;
`;

const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.count}, auto);
  gap: 30px;
`;

const Link = styled.a``;
