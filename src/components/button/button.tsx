import { IButton } from "@interface/props";

const Button = ({ text, type, onClick }: IButton) => {
  // type 속성에 맞는 스타일이 변경되는 클래스 생성 필요
  // const buttonClass = {};
  // buttonClass[type]

  return <button onClick={onClick}>{text}</button>;
};

export default Button;
