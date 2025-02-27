import { IProgressiveBar } from "@interface/props";

const ProgressiveBar = ({ total, current }: IProgressiveBar) => {
  const percent = (current / total) * 100;

  return (
    <div className="w-full h-[10px] bg-[#F2F2F2] rounded-full">
      <div
        className="h-[10px] bg-point-lavender rounded-full"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
};

export default ProgressiveBar;
