import Image from "next/image";

import { IHeader } from "@interface/props";

import logo from "@assets/logo.svg";

const Header = ({ title, leftChild, rightChild }: IHeader) => {
  return (
    <header
      className={`max-w-[480px] w-full h-[50px] fixed top-0 flex justify-between items-center px-5 z-10 ${
        title === "내 학습 데이터" ? "bg-[#F4F3F6]" : "bg-white"
      }`}
    >
      <div className="flex items-center">{leftChild}</div>
      <div>
        {title === "logo" ? (
          <Image src={logo} width={100} height={23.35} alt="로고" />
        ) : (
          <span>{title}</span>
        )}
      </div>
      <div className="flex items-center">{rightChild}</div>
    </header>
  );
};

export default Header;
