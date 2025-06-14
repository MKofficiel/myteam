const FeatureCard = ({ heading, paragraph, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center md:flex-row md:items-start md:gap-[23px]">
      <img src={icon} width={72} height={72} alt="" className="mb-[16px]" />
      <div className="md:flex md:flex-col md:text-left">
        <h2 className="text-light-coral mb-[6px] text-[18px] font-bold">
          {heading}
        </h2>
        <p className="text-[15px] leading-[25px] font-semibold">{paragraph}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
