import DirectorsCard from "../components/DirectorsCard";
import { directors } from "../constants";

const MeetTheTeam = () => {
  return (
    <section className="bg-deep-jungle-green relative px-[24px] pt-[88px] pb-[116px] md:pt-[128px] md:pb-[128px] lg:px-[165px] lg:pt-[140px] lg:pb-[168px]">
      <div className="mx-auto max-w-[1200px] text-white">
        <h2 className="mb-[48px] text-center text-[32px] leading-[32px] font-bold lg:text-[48px] lg:leading-[48px]">
          Meet the directors
        </h2>
        <div>
          <ul className="grid grid-cols-1 gap-y-[52px] md:grid-cols-2 md:gap-x-[11px] lg:grid-cols-3 lg:gap-x-[30px]">
            {directors.map((director) => (
              <li key={director.id}>
                <DirectorsCard {...director} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <img
        src="/src/assets/bg-pattern-home-4-about-3.svg"
        width={147}
        height={100}
        alt="icon home pattern"
        className="absolute right-0 bottom-0"
      />
    </section>
  );
};

export default MeetTheTeam;
