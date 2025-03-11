"use client";

import { useRouter } from "next/navigation";

import { IButton } from "@interface/props";
import Image from "next/image";

const Button = ({
  icon,
  text,
  type,
  link,
  onClick,
  className,
}: IButton) => {
  const router = useRouter();

  const buttonClass = {
    kakao: "bg-[#FEE500] text-black",
    correct: "bg-[#64C324] text-white font-semibold text-sm",
    incorrect: "bg-[#EC5A5A] text-white font-semibold text-sm",
    active: "bg-lavender text-white font-semibold text-sm",
    inactive: "bg-[#E2E2E2] text-[#888888] font-semibold text-sm",
    prev: "bg-white border-[1px] border-[#DCDCDC] text-[#444444] font-semibold text-sm",
    next: "bg-black text-white font-semibold text-sm",
  };

  const onClickButton = () => {
    if (link) {
      router.push(link);
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <>
      {text === "이전 문단" ||
      text === "다음 문단" ||
      text === "요약 완료" ? (
        <>
          <button
            className={`flex justify-center items-center w-full h-14 rounded-[10px] ${buttonClass[type]} ${className}`}
            onClick={onClickButton}
          >
            <div className="flex justify-center gap-2">{text}</div>
          </button>
        </>
      ) : (
        <div className="px-5">
          <button
            className={`flex justify-center items-center w-full h-14 rounded-[10px] ${buttonClass[type]}`}
            onClick={onClickButton}
          >
            <div className="flex justify-center gap-2">
              {icon ? (
                <Image
                  src={icon}
                  width={21}
                  height={21}
                  alt="카카오 로고"
                />
              ) : null}
              {text}
            </div>
          </button>
        </div>
      )}
    </>
  );
};

export default Button;
