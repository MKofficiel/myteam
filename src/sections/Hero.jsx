const Hero = () => {
  return (
    <section className="bg-midnight-green relative px-[9px]">
      <div className="mx-auto max-w-[1200px] py-[129px] text-white max-2xl:text-left max-xl:text-center max-md:px-[24px] max-md:py-[80px]">
        <div className="relative flex flex-row gap-[100px] max-xl:flex-col max-xl:gap-[24px] max-lg:text-center">
          <div className="flex-1">
            <h1 className="text-[100px] leading-[100px] font-bold tracking-normal max-lg:text-[64px] max-lg:leading-[56px] max-md:text-[40px] max-md:leading-[40px]">
              <span className="block">Find the</span>

              <span className="block">
                best <span className="text-light-coral">talent</span>
              </span>
            </h1>
          </div>

          <div className="flex w-full flex-1 items-end justify-center pb-[12px]">
            <p className="text-[15px] leading-[28px] font-semibold max-xl:w-lg max-md:w-full lg:text-[18px]">
              Finding the right people and building high performing teams can be
              hard. Most companies aren’t tapping into the abundance of global
              talent. We’re about to change that.
            </p>
          </div>
          <div className="absolute top-1/2 left-0 hidden -translate-x-[165px] -translate-y-1/2 xl:block">
            <img
              src="/src/assets/bg-pattern-home-1.svg"
              alt=""
              className="-translate-x-1/2"
            />
          </div>
        </div>
      </div>
      {/* <div className="lg:rigth-0 w-full md:flex md:justify-center">
        <img
          src="/src/assets/bg-pattern-home-2.svg"
          alt=""
          className="lg:absolute lg:right-0 lg:bottom-0 lg:mr-[165px]"
        />
      </div> */}
      <div className="flex w-full justify-end max-2xl:justify-center max-lg:justify-center max-md:justify-center max-sm:justify-center">
        <img
          src="/src/assets/bg-pattern-home-2.svg"
          alt=""
          className="mr-[165px] max-2xl:m-0"
        />
      </div>
    </section>
  );
};

export default Hero;
