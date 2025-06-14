import TestimonialsCard from "../components/TestimonialsCard";
import { testimonials } from "../constants";

const Tesmonials = () => {
  return (
    <section className="bg-deep-jungle-green relative z-10 overflow-x-hidden max-xl:px-[97px] max-xl:py-[100px] max-md:px-[24px] max-md:py-[64px] xl:px-[165px] xl:py-[140px]">
      {/* <section className="bg-deep-jungle-green relative z-10 overflow-x-hidden"> */}
      <div className="mx-auto flex max-w-[1200px] flex-col gap-[84px] text-white">
        <div className="mx-auto max-md:mt-[40px]">
          <h1 className="text-center text-[32px] leading-[32px] font-bold tracking-normal lg:w-5xl lg:text-[48px] lg:leading-[48px]">
            <span className="lg:block">Delivering real results for top</span>{" "}
            companies. Some of our{" "}
            <span className="text-rapture-blue">success stories.</span>
          </h1>
        </div>
        <ul className="flex w-full flex-1 flex-col gap-[80px] lg:flex-row lg:gap-[30px]">
          {testimonials.map((testimonial) => (
            <TestimonialsCard {...testimonial} key={testimonial.id} />
          ))}
        </ul>
      </div>
      {/* <div className="bg-dark-green absolute top-0 left-0 size-[100px]"></div> */}
      <img
        src="/src/assets/bg-pattern-home-4-about-3.svg"
        alt=""
        className="absolute top-0 left-0"
      />
      <img
        src="/src/assets/bg-pattern-home-5.svg"
        className="absolute right-0 bottom-0"
        alt=""
      />
    </section>
  );
};

export default Tesmonials;
