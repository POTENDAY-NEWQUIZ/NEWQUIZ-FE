import { ICheckButton } from "@interface/props";

const CheckButton = ({ text, type, onClick }: ICheckButton) => {
  const buttonClass = {
    uncheck: "bg-lavender text-white",
    check:
      "bg-[#FBFAFF] text-lavender border-[1px] border-lavender cursor-default",
  };

  return (
    <button
      className={`${buttonClass[type]} w-[60px] h-[26px] text-[11px] font-semibold rounded-[20px]`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CheckButton;
