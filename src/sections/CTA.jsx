import { Link } from "react-router";
import ButtonLink from "../ui/ButtonLink";

export const CTA = () => {
  return (
    <section className="bg-light-coral relative px-[24px] py-[100px] md:px-[97px] lg:px-[263px] lg:py-[76px]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-[24px] text-center sm:mb-[40px] md:flex-row md:justify-between">
        <h2 className="text-[32px] leading-[32px] font-bold lg:text-[48px]">
          <span className="block md:inline">Ready to get</span> started?
        </h2>

        <ButtonLink to="contact" variant="onDark" className="md:mb-[0px]">
          contact us
        </ButtonLink>
      </div>
      <img
        src="/src/assets/bg-pattern-home-6-about-5.svg"
        className="absolute bottom-0 left-0"
        alt=""
      />
    </section>
  );
};
