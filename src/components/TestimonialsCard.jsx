const TestimonialsCard = ({ comment, author, job, image }) => {
  return (
    <li className="relative flex-1">
      <figure className="relative z-30 text-center">
        <figcaption className="mb-[16px]">
          <p className="mb-[16px] text-[15px] leading-[25px] font-semibold">
            {comment}
          </p>
          <h4 className="text-rapture-blue text-[18px] font-bold capitalize">
            {author}
          </h4>
          <span className="text-[13px] leading-[18px] font-medium italic">
            {job}
          </span>
        </figcaption>
        <div className="flex justify-center">
          <img
            src={image}
            width={62}
            height={62}
            className="outline-rapture-blue rounded-full outline-2"
            alt=""
          />
        </div>
      </figure>

      <img
        src="src/assets/icon-quotes.svg"
        alt=""
        width={67}
        height={56}
        className="absolute top-0 left-1/2 z-20 -translate-x-1/2 -translate-y-[35px]"
      />
    </li>
  );
};

export default TestimonialsCard;
