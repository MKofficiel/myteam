import ClientCard from "../components/ClientCard";
import { ClientsLogo } from "../constants";

const Clients = () => {
  return (
    <section className="bg-sacramento-state px-[24px] py-[88px] text-white md:px-[39px] md:py-[100px] lg:px-[165px] lg:py-[140px]">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="mb-[64px] text-center text-[32px] leading-[32px] font-bold lg:text-[48px] lg:leading-[48px]">
          Some of our clients
        </h2>
        <div>
          <ul className="flex flex-col items-center justify-center gap-[64px] md:flex-row lg:justify-between">
            {ClientsLogo.map((client) => (
              <li key={client.image}>
                <ClientCard {...client} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Clients;
