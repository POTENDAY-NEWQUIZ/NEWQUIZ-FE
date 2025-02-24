import Image from "next/image";

import { IEventButton } from "@interface/props";

const EventButton = ({ icon, onClick }: IEventButton) => {
  return (
    <button onClick={onClick}>
      <Image src={icon} width={24} height={24} alt="이벤트버튼" />
    </button>
  );
};

export default EventButton;
