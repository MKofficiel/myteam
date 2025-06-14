import React from "react";
import { features } from "../constants";
import FeatureCard from "../components/FeatureCard";

const Features = () => {
  return (
    <section className="bg-sacramento-state relative overflow-x-hidden max-xl:px-[97px] max-xl:py-[100px] max-md:px-[24px] max-md:py-[64px] xl:px-[165px] xl:py-[140px]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-[64px] text-white lg:flex-row">
        <div className="before:bg-light-coral relative pt-[32px] before:absolute before:top-0 before:h-[4px] before:w-[50px] before:content-[''] lg:flex-1">
          <h1 className="w-1/2 text-[32px] leading-[32px] font-bold md:w-md md:text-[32px] lg:text-[48px] lg:leading-[48px]">
            Build & manage distributed teams like no one else.
          </h1>
        </div>
        <div className="flex justify-center lg:flex-1">
          <ul className="grid grid-cols-1 gap-y-[48px]">
            {features.map((feature) => (
              <FeatureCard key={feature.heading} {...feature} />
            ))}
          </ul>
        </div>
      </div>
      {/* <div className="absolute top-0 right-0 translate-x-1/2 lg:bottom-0 lg:bg-amber-700">
        <img
          src="/src/assets/bg-pattern-home-3.svg"
          alt=""
          height={244}
          width={200}
        />
      </div> */}

      <img
        className="absolute top-0 right-0 translate-x-1/2 lg:top-auto lg:bottom-0"
        src="/src/assets/bg-pattern-home-3.svg"
        alt=""
        height={244}
        width={200}
      />
    </section>
  );
};

export default Features;
