import { useForm } from "react-hook-form";
import Button from "./Button";
import { data } from "react-router";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("form ", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onerror)}
      className="flex h-full flex-col items-start gap-[24px] text-[15px] font-semibold text-white"
    >
      <div className="group flex w-full flex-col gap-[8px]">
        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: "This field is required" })}
          className="group-hover:border-b-rapture-blue focus:border-b-rapture-blue w-full border-b border-white pb-[16px] pl-[14px] transition-colors duration-500 outline-none placeholder:text-[#99b8bb] focus:outline-none"
        />
        {errors.name && (
          <p className="text-light-coral text-[10px] font-bold italic">
            {errors.name.message}
          </p>
        )}
      </div>
      <div className="group flex w-full flex-col gap-[8px]">
        <input
          type="text"
          placeholder="Email Adress"
          {...register("email", { required: "This field is required" })}
          className="group-hover:border-b-rapture-blue focus:border-b-rapture-blue w-full border-b border-white pb-[16px] pl-[14px] transition-colors duration-500 outline-none placeholder:text-[#99b8bb] focus:outline-none"
        />
        {errors.name && (
          <p className="text-light-coral text-[10px] font-bold italic">
            {errors.name.message}
          </p>
        )}
      </div>
      <div className="group flex w-full flex-col gap-[8px]">
        <input
          type="text"
          {...register("title", { required: "This field is required" })}
          placeholder="Title"
          className="group-hover:border-b-rapture-blue focus:border-b-rapture-blue w-full border-b border-white pb-[16px] pl-[14px] transition-colors duration-500 outline-none placeholder:text-[#99b8bb] focus:outline-none"
        />
        {errors.name && (
          <p className="text-light-coral text-[10px] font-bold italic">
            {errors.name.message}
          </p>
        )}
      </div>
      <div className="group flex w-full flex-col gap-[8px]">
        <input
          type="text"
          placeholder="Company Name"
          {...register("companyName", {
            required: "This field is required",
          })}
          className="group-hover:border-b-rapture-blue focus:border-b-rapture-blue w-full border-b border-white pb-[16px] pl-[14px] transition-colors duration-500 outline-none placeholder:text-[#99b8bb] focus:outline-none"
        />
        {errors.name && (
          <p className="text-light-coral text-[10px] font-bold italic">
            {errors.name.message}
          </p>
        )}
      </div>
      <div className="group flex w-full flex-col gap-[8px]">
        <input
          type="textarea"
          placeholder="Message"
          {...register("message", { required: "This field is required" })}
          className="group-hover:border-b-rapture-blue focus:border-b-rapture-blue w-full border-b border-white pb-[16px] pl-[14px] transition-colors duration-500 outline-none placeholder:text-[#99b8bb] focus:outline-none"
        />
        {errors.name && (
          <p className="text-light-coral text-[10px] font-bold italic">
            {errors.name.message}
          </p>
        )}
      </div>
      <div className="">
        <Button>submit</Button>
      </div>
    </form>
  );
};

export default Form;
