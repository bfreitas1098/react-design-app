import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { default as logo } from "../../images/logos/logo.svg";
import { default as hamburger } from "../../images/icons/hamburger.svg";
import { menuData } from "../../data/MenuData";
import MenuButton from "../buttons/MenuButton";
import MenuTooltip from "../../tooltips/MenuToolTip";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  function handleClick(event) {
    setIsOpen(!isOpen);
    event.preventDefault();
  }

  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      console.log("Document is clicked");
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <Wrapper>
      <Link href="/">
        <img src={logo} alt="logo" />
      </Link>
      <MenuWrapper count={menuData.length} ref={ref}>
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
        <HamburgerMenu>
          <MenuButton item={{ title: "", icon: hamburger, link: "/" }} />
        </HamburgerMenu>
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

  @media (max-width: 450px) {
    top: 20px;
    padding: 0 20px;
  }
  @media (max-width: 768px) {
    top: 30px;
  }
`;

const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.count}, auto);
  gap: 30px;

  @media (max-width: 768px) {
    > a {
      display: none;
    }
    grid-template-columns: auto;
  }
`;

const Link = styled.a``;

const HamburgerMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;
