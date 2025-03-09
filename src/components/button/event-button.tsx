"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext } from "react";

import { ModalContext } from "@context/modal-context";
import { IEventButton } from "@interface/props";

const EventButton = ({ icon, command }: IEventButton) => {
  const router = useRouter();
  const { openModal, closeModal } = useContext(ModalContext);

  const onClick = () => {
    switch (command) {
      case "back": {
        router.back();
        break;
      }
      case "back-modal": {
        openModal("back-modal");
        break;
      }
      case "hint": {
        openModal("hint-modal");
        break;
      }
      case "hint-close": {
        closeModal("hint-modal");
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
