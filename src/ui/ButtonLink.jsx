import React from "react";
import { Link } from "react-router";

const ButtonLink = ({ to, children, variant = "default", onClick }) => {
  const base =
    " text-[18px] leading-[28px] font-semibold tracking-normal  transition-colors duration-500 ";
  const variants = {
    onWhite:
      base +
      " text-white hover:text-dark-green hover:bg-white focus:text-dark-green px-[32px] py-[9px] border-2 border-white rounded-[24px]",
    onDark:
      base +
      " focus:text-white hover:text-white px-[32px] py-[9px] border-2 border-sacramento-state rounded-full hover:bg-sacramento-state",

    onDeep:
      base +
      " text-deep-jungle-green px-[32px] py-[9px]  bg-white  rounded-full ",

    default: base + " text-white hover:text-light-coral",
  };
  return (
    <Link to={to} className={variants[variant]}>
      {children}
    </Link>
  );
};

export default ButtonLink;
