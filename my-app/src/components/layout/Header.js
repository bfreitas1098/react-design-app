import React from "react";
import styled from "styled-components";
import { default as courses } from "../../images/icons/courses.svg";
import { default as tutorials } from "../../images/icons/tutorials.svg";
import { default as pricing } from "../../images/icons/pricing.svg";

const menuData = [
  {
    title: "Courses",
    icon: courses,
    link: "/courses",
  },
  {
    title: "Tutorials",
    icon: tutorials,
    link: "/tutorials",
  },
  {
    title: "Pricing",
    icon: pricing,
    link: "/pricing",
  },
];

export default function Header() {
  return (
    <>
      {menuData.map((item, index) => (
        <Link href={item.link} key={index}>
          <img src={item.icon} alt={item.title} />
          {item.title}
        </Link>
      ))}
    </>
  );
}

const Link = styled.a``;
