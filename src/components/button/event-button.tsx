"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { IEventButton } from "@interface/props";

const EventButton = ({ icon, command }: IEventButton) => {
  const router = useRouter();

  const onClick = () => {
    switch (command) {
      case "back": {
        router.back();
        break;
      }
      case "hint": {
        // 원문 컴포넌트 올라와야 함
        break;
      }
      case "close": {
        router.replace("/");
        break;
      }
      default:
        break;
    }
  };

  return (
    <button onClick={onClick}>
      <Image src={icon} width={24} height={24} alt="이벤트 버튼" />
    </button>
  );
};

export default EventButton;
