import ContactQuality from "../components/ContactQuality";
import { Qualities } from "../constants";
import Form from "../ui/Form";

const ContactHeader = () => {
  return (
    <section className="bg-midnight-green relative overflow-hidden px-[24px] pt-[80px] pb-[85px] md:px-[127px]">
      <div className="mx-auto grid h-full max-w-[1200px] items-center gap-y-[56px] md:gap-y-[64px] lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-x-[100px]">
        <div className="flex h-full flex-1 flex-col justify-center gap-[40px] text-center text-white lg:items-start lg:text-left">
          <div>
            <h1 className="mb-[16px] text-center text-[40px] leading-[40px] font-bold md:text-[64px] md:leading-[56px] lg:leading-[100px]">
              Contact
            </h1>
            <span className="text-light-coral text-[32px] leading-[48px] font-bold">
              Ask us about
            </span>
          </div>
          <div className="">
            <ul className="flex flex-col gap-[8px]">
              {Qualities.map((quality) => (
                <li key={quality.content}>
                  <ContactQuality {...quality} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <Form />
        </div>
      </div>
      <img
        src="/src/assets/bg-pattern-contact-2.svg"
        alt="icon conatct"
        className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 md:translate-y-0"
      />
    </section>
  );
};

export default ContactHeader;
