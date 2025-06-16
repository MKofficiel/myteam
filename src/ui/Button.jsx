const Button = ({ children }) => {
  return (
    <button
      type="submit"
      className="text-deep-jungle-green cursor-pointer rounded-full bg-white px-[32px] py-[9px] text-[18px] leading-[28px] font-semibold"
    >
      {children}
    </button>
  );
};

export default Button;
