import Image from "next/image";

import { IModal } from "@interface/props";

const Modal = ({
  icon,
  text,
  description,
  leftChild,
  centerChild,
  rightChild,
}: IModal) => {
  return (
    <>
      {/* 흐린 배경 */}
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[480px] h-full bg-black bg-opacity-40 z-40" />

      {/* 모달 컨텐츠 */}
      <div className="max-w-[340px] w-[calc(100%-60px)] h-[256px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-[14px] z-50 shadow-modal text-center px-4 py-10">
        <section className="flex justify-center mt-2 mb-2">
          <Image src={icon} width={32} height={32} alt="모달 아이콘" />
        </section>
        <section className="mb-8">
          <div className="text-xl font-bold xs:text-lg">{text}</div>
          <div className="text-sm text-[#727272] xs:text-[11px] xs:leading-4">
            {description}
          </div>
        </section>
        <section className="flex justify-evenly">
          {leftChild}
          {centerChild}
          {rightChild}
        </section>
      </div>
    </>
  );
};

export default Modal;
