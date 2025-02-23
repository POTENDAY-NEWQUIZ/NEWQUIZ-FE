import { IButton } from "@interface/props";

const SmallButton = ({ text, type, onClick }: IButton) => {
  // type 속성에 맞는 스타일이 변경되는 클래스 생성 필요
  // const buttonClass = {};
  // buttonClass[type]
  // 네, 아니오 버튼 & 취소, 탈퇴 버튼
  // 상, 중, 하 버튼
  // 기사 카테고리 선택 버튼

  return <button onClick={onClick}>{text}</button>;
};

export default SmallButton;
