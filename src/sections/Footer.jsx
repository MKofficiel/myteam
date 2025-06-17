import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-dark-green px-[24px] py-[66px] md:px-[40px] md:py-[56px] lg:px-[165px] lg:py-[48px]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-[20px] md:grid-cols-2 xl:grid-cols-3 xl:items-start">
        <nav className="flex flex-col items-center gap-[24px] md:items-start md:gap-[53px]">
          <Link to="/">
            <img src="/src/assets/logo.svg" alt="" width={96} height={24} />
          </Link>

          <ul className="flex gap-[24px] text-[15px] leading-[25px] font-bold text-white">
            <li>
              <Link
                to="/"
                className="hover:text-light-coral cursor-pointer transition-all duration-500"
              >
                home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                replace
                className="hover:text-light-coral cursor-pointer transition-all duration-500"
              >
                about
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex flex-col items-center text-[15px] leading-[25px] font-semibold text-[#99a8a9] md:items-end xl:items-start">
          <p>987 Hillcrest Lane</p>
          <p>Irvine, CA</p>
          <p>California 92714</p>
          <p>Call Us : 949-833-7432</p>
        </div>

        <div className="mt-[16px] flex flex-col items-center gap-[16px] md:col-span-2 md:flex-row md:justify-between xl:col-start-3 xl:mt-[0] xl:h-full xl:flex-col">
          <div className="flex gap-[16px]">
            <img src="/src/assets/icon-facebook.svg" alt="" />
            <img src="/src/assets/icon-pinterest.svg" alt="" />
            <img src="/src/assets/icon-twitter.svg" alt="" />
          </div>
          <p className="text-[15px] leading-[25px] font-semibold text-[#99a8a9]">
            Copyright 2020. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
