import { Link } from "react-router";
import { NavLinks } from "../constants";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import ButtonLink from "../ui/ButtonLink";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-midnight-green relative flex h-[90px] items-center justify-center px-[24px] py-[73px] max-md:py-[48px] lg:px-[165px] lg:py-[67px]">
      <div className="mx-auto flex w-[1200px] items-center justify-between md:gap-[48px] lg:gap-[80px]">
        <Link to="/">
          <img
            src="/src/assets/logo.svg"
            alt="logo"
            height={160}
            width={140}
            className="cursor-pointer"
          />
        </Link>
        {/* MOBILE MENU  */}
        <nav
          className={clsx(
            "bg-police-blue fixed top-0 right-0 z-30 flex h-screen w-[70%] justify-center transition-all duration-300 ease-in-out md:hidden",
            {
              "translate-x-0 opacity-[100%]": isOpen,
              "pointer-events-none translate-x-full opacity-0": !isOpen,
            },
          )}
        >
          <ul className="mt-[112px] flex flex-col gap-[36px] px-[48px]">
            <li className="flex flex-col gap-[24px]">
              <ButtonLink to="/">home</ButtonLink>

              <ButtonLink to="/about" replace>
                about
              </ButtonLink>
            </li>
            <li className="w-full self-center">
              <ButtonLink
                variant="onWhite"
                to="/contact"
                className="text-center"
                replace
              >
                contact us
              </ButtonLink>
            </li>
          </ul>
        </nav>

        {/* DESKTOP  */}
        <nav className="flex-1 max-md:hidden">
          <ul className="flex items-center gap-[40px]">
            <li key="home">
              <ButtonLink to="/">home</ButtonLink>
            </li>
            <li key="about">
              <ButtonLink to="/about">about</ButtonLink>
            </li>
            <li key="contact" className="ml-auto">
              <ButtonLink to="/contact" variant="onWhite">
                contact
              </ButtonLink>
            </li>
          </ul>
        </nav>
        {/* <nav className="flex-1 max-md:hidden">
          <ul className="flex items-center gap-[40px]">
            {NavLinks.map(({ label, path }) => (
              <li
                key={label}
                className="cursor-pointer text-[18px] font-semibold text-white last:ml-auto last:rounded-full last:border-[2px] last:px-[32px] last:py-[9px]"
              >
                <Link
                  to={path}
                  replace
                  className="hover:text-light-coral cursor-pointer transition-all duration-500"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav> */}

        {/* <nav className="flex-1 max-md:hidden">
          <ul className="flex items-center gap-[40px]">
            {NavLinks.map(({ label, path }) => (
              <li
                key={label}
                className="cursor-pointer text-[18px] font-semibold text-white last:ml-auto last:rounded-full last:border-[2px] last:px-[32px] last:py-[9px]"
              >
                <Link
                  to={path}
                  replace
                  className="hover:text-light-coral cursor-pointer transition-all duration-500"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>{" "} */}
        <button
          className="z-40 hidden cursor-pointer max-md:block"
          onClick={(e) => {
            e.stopPropagation();
            if (isOpen) {
              setIsOpen(false);
            } else {
              setIsOpen(true);
            }
          }}
        >
          {isOpen ? (
            <img src="/src/assets/Combined Shape.svg" alt="" />
          ) : (
            <img src="/src/assets/icon-hamburger.svg" alt="" />
          )}
        </button>
      </div>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={clsx(
          "absolute inset-x-0 top-0 h-screen transition-opacity duration-500",
          {
            "pointer-events-auto z-10 bg-black/50": isOpen,
            "pointer-events-none z-0 opacity-0": !isOpen,
          },
        )}
      />
    </header>
  );
};

export default Header;
