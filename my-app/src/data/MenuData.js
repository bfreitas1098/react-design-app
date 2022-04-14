import { default as courses } from "../images/icons/courses.svg";
import { default as tutorials } from "../images/icons/tutorials.svg";
import { default as pricing } from "../images/icons/pricing.svg";
import { default as search } from "../images/icons/search.svg";
import { default as account } from "../images/icons/account.svg";
import { default as profile } from "../images/icons/profile.svg";
import { default as settings } from "../images/icons/settings.svg";
import { default as signout } from "../images/icons/signout.svg";

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

export const tooltipData = [
  { title: "Profile", icon: profile, link: "/profile" },
  { title: "Settings", icon: settings, link: "/settings" },
  { title: "Sign out", icon: signout, link: "/logout" },
];
