import { Link } from "react-router";

export const CTA = () => {
  return (
    <section className="bg-light-coral relative px-[24px] py-[83px] md:px-[97px] lg:px-[263px] lg:py-[76px]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-[24px] text-center md:flex-row md:justify-between">
        <h2 className="text-[32px] leading-[32px] font-bold lg:text-[48px]">
          <span className="block md:inline">Ready to get</span> started?
        </h2>

        <Link
          to="contact "
          className="mb-[20px] rounded-4xl border-2 px-[32px] py-[9px] text-[18px] leading-[28px] font-semibold md:mb-[0px]"
        >
          contact us
        </Link>
      </div>
      <img
        src="/src/assets/bg-pattern-home-6-about-5.svg"
        className="absolute bottom-0 left-0"
        alt=""
      />
    </section>
  );
};
