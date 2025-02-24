"use client";

import { useRouter } from "next/navigation";

import { IButton } from "@interface/props";
import Image from "next/image";

const Button = ({ icon, text, type, link }: IButton) => {
  const router = useRouter();

  const buttonClass = {
    kakao: "bg-[#FEE500] text-black",
    active: "bg-[#484848] text-white",
    inactive: "bg-[#E2E2E2] text-[#888888]",
  };

  return (
    <div className="px-5">
      <button
        className={`w-full h-14 rounded-[10px] ${buttonClass[type]}`}
        onClick={() => router.push(link)}
      >
        {icon ? (
          <Image src={icon} width={21} height={21} alt="카카오 로고" />
        ) : null}
        {text}
      </button>
    </div>
  );
};

export default Button;
