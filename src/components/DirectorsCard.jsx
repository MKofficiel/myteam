import clsx from "clsx";

const DirectorsCard = ({ author, job, image, comment }) => {
  return (
    <figure className="bg-sacramento-state relative flex h-full flex-col items-center gap-[16px] px-[24px] pt-[32px] pb-[56px] text-center">
      {image && (
        <img src={image} alt={author} className="size-[96px] rounded-full" />
      )}
      <div className="">
        <h3 className="text-rapture-blue text-[18px] leading-[28px] font-bold">
          {author}
        </h3>
        <p
          className={clsx("text-[15px] leading-[25px]", {
            "font-semibold": comment,
            "font-medium": !comment,
          })}
        >
          {job ? job : comment}
        </p>
        {comment && (
          <div className="mt-[24px] flex justify-center gap-[16px]">
            <img src="/src/assets/icon-twitter.svg" alt="twitter logo" />
            <img src="/src/assets/icon-linkedin.svg" alt="" />
          </div>
        )}
      </div>
      <div className="bg-light-coral hover:bg-rapture-blue absolute bottom-0 flex size-[56px] translate-y-1/2 cursor-pointer items-center justify-center rounded-full transition-colors duration-500">
        <img
          src={`/src/assets/${job ? "icon-cross" : "close-icon"}.svg`}
          className="size-[16px]"
          alt="icon cross"
        />
      </div>
    </figure>
  );
};

export default DirectorsCard;
