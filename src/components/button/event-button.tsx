import { IEventButton } from "@interface/props";

const EventButton = ({ text, onClick }: IEventButton) => {
  return <button onClick={onClick}>{text}</button>;
};

export default EventButton;
