"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { IEventButton } from "@interface/props";

const EventButton = ({ icon, command }: IEventButton) => {
  const router = useRouter();

  const onClick = () => {
    switch (command) {
      case "register": {
        router.back();
        break;
      }
      default:
        break;
    }
  };

  return (
    <button onClick={onClick}>
      <Image src={icon} width={24} height={24} alt="이벤트버튼" />
    </button>
  );
};

export default EventButton;
