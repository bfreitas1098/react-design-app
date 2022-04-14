import React, { useState } from "react";
import styled from "styled-components";
import { default as logo } from "../../images/logos/logo.svg";
import { menuData } from "../../data/MenuData";
import MenuButton from "../buttons/MenuButton";
import MenuTooltip from "../../tooltips/MenuToolTip";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick(event) {
    setIsOpen(!isOpen);
    event.preventDefault();
  }

  return (
    <Wrapper>
      <Link href="/">
        <img src={logo} alt="logo" />
      </Link>
      <MenuWrapper count={menuData.length}>
        {menuData.map((item, index) =>
          item.link === "/account" ? (
            <MenuButton
              key={index}
              item={item}
              onClick={(event) => handleClick(event)}
            />
          ) : (
            <MenuButton key={index} item={item} />
          )
        )}
      </MenuWrapper>
      <MenuTooltip isOpen={isOpen} />
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
