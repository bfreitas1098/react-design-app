import React from "react";
import styled from "styled-components";
import { tooltipData } from "../data/MenuData";
import MenuButton from "../components/buttons/MenuButton";

export default function MenuTooltip(props) {
  const { isOpen } = props;

  return (
    <Wrapper isOpen={isOpen}>
      {tooltipData.map((item, index) => (
        <MenuButton key={index} item={item} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  right: 30px;
  background: rgba(15, 14, 71, 0.3);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  border-radius: 20px;
  padding: 20px;
  opacity: ${(props) => (props.isOpen ? 1 : 0.5)};
  display: grid;
  grid-template-columns: 150px;
  gap: 10px;
  z-index: 1;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;
