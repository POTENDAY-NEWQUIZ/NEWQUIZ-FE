import { IModal } from "@interface/props";
import Image from "next/image";

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
      <div className="max-w-[340px] w-[calc(100%-60px)] h-[240px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-[14px] z-50 shadow-modal text-center px-4 py-10">
        <section className="flex justify-center mt-2 mb-4">
          <Image src={icon} width={24} height={24} alt="모달 아이콘" />
        </section>
        <section className="mb-4">
          <div className="text-xl font-bold">{text}</div>
          <div className="text-sm text-[#727272]">{description}</div>
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
