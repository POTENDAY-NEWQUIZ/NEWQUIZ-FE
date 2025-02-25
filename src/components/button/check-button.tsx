import { ICheckButton } from "@interface/props";

const CheckButton = ({ text, onClick }: ICheckButton) => {
  return (
    <button
      className="w-[60px] h-[26px] bg-lavender text-[11px] text-white font-semibold rounded-[20px]"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CheckButton;
