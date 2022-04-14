import { default as courses } from "../images/icons/courses.svg";
import { default as tutorials } from "../images/icons/tutorials.svg";
import { default as pricing } from "../images/icons/pricing.svg";
import { default as search } from "../images/icons/search.svg";
import { default as account } from "../images/icons/account.svg";

export const menuData = [
  { title: "Courses", icon: courses, link: "/courses" },
  {
    title: "Tutorials",
    icon: tutorials,
    link: "/tutorials",
  },
  { title: "Pricing", icon: pricing, link: "/pricing" },
  { title: "", icon: search, link: "/search" },
  { title: "", icon: account, link: "/account" },
];
