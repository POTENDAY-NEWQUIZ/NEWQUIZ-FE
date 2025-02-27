import Image from "next/image";

import { IOXSelect } from "@interface/props";

const OXSelect = ({
  text,
  iconSelect,
  iconUnselect,
  isActive,
  onSelect,
}: IOXSelect) => {
  const imageSize = text
    ? { width: 36, height: 36 }
    : { width: 48, height: 48 };

  const selectClass = isActive
    ? "bg-[#DFD8FF] text-lavender"
    : "bg-[#F8F8F8]";

  return (
    <div className="w-full">
      <button
        className={`w-full h-24 flex justify-center rounded-[20px] ${selectClass}`}
        onClick={onSelect}
      >
        <Image
          src={isActive ? iconSelect : iconUnselect}
          width={imageSize.width}
          height={imageSize.height}
          alt="OX버튼"
          priority
        />
      </button>
    </div>
  );
};

export default OXSelect;
