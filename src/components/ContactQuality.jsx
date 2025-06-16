const ContactQuality = ({ content, icon }) => {
  return (
    <figure className="grid grid-cols-[auto_1fr] gap-x-[24px] text-left lg:items-center">
      <img src={icon} alt="icon quality" height={72} width={72} />
      <p className="text-[18px] leading-[28px] font-bold">{content}</p>
    </figure>
  );
};

export default ContactQuality;
