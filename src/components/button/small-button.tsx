import { ISmallButton } from "@interface/props";

const SmallButton = ({ text, type, link, onClick }: ISmallButton) => {
  const buttonClass = {
    inactive: "w-20 h-11 bg-[#F2F2F2] text-[#484848]",
    active: "w-20 h-11 bg-black text-white",
    negative: "w-[112px] h-10 bg-[#F2F2F2] text-[#484848] text-[14px]",
    positive:
      "w-[112px] h-10 bg-black text-white text-[14px] text-medium",
  };

  return (
    <button
      className={`${buttonClass[type]} rounded-[30px]`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default SmallButton;
