import { ISmallButton } from "@interface/props";

const SmallButton = ({ text, type, link, onClick }: ISmallButton) => {
  // type 속성에 맞는 스타일이 변경되는 클래스 생성 필요
  // const buttonClass = {};
  // buttonClass[type]
  // 네, 아니오 버튼 & 취소, 탈퇴 버튼
  // 상, 중, 하 버튼
  // 기사 카테고리 선택 버튼

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
