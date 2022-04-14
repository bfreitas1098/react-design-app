import React from "react";
import styled from "styled-components";
import { default as logo } from "../../images/logos/logo.svg";
import { menuData } from "../../data/MenuData";

export default function Header() {
  return (
    <Wrapper>
      <img src={logo} alt="logo" />
      <MenuWrapper>
        {menuData.map((item, index) => (
          <Link href={item.link} key={index}>
            <MenuItem>
              <img src={item.icon} alt={item.title} />
              {item.title}
            </MenuItem>
          </Link>
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
  grid-template-columns: repeat(5, auto);
  gap: 30px;
`;

const MenuItem = styled.div`
  color: rgba(255, 255, 255, 0.7);
  display: grid;
  grid-template-columns: 24px auto;
  gap: 10px;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  transition: 0.5s ease-out;

  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  }
`;

const Link = styled.a``;
