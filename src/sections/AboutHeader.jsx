const AboutHeader = () => {
  return (
    <section className="bg-midnight-green relative overflow-hidden px-[24px] pt-[80px] pb-[108px] md:px-[45px] md:py-[112px] lg:px-[165px] lg:py-[120px]">
      <div className="mx-auto max-w-[1200px] text-center text-white sm:w-full md:w-md lg:flex lg:w-full lg:items-center lg:justify-between lg:gap-[30px] lg:text-left">
        <div className="">
          <h1 className="heading-primary">About</h1>
        </div>
        <div className="relative after:w-[5px] lg:w-3xl lg:pt-[44px] lg:before:absolute lg:before:top-[0] lg:before:h-[4px] lg:before:w-[50px] lg:before:bg-red-400 lg:before:content-['']">
          <p className="text-[15px] leading-[28px] font-semibold lg:text-[18px]">
            We help companies build dynamic teams made up of top global talent.
            Using our network of passionate professionals we drive innovation
            and deliver incredible outcomes. Talented, diverse teams shape the
            best products and experiences. We’ll bring those teams to you.
          </p>
        </div>
      </div>
      <img
        src="/src/assets/bg-pattern-about-1-mobile-nav-1.svg"
        className="absolute right-0 translate-x-1/2"
        alt=""
      />
    </section>
  );
};

export default AboutHeader;
