import { IModal } from "@interface/props";

const Modal = ({
  icon,
  text,
  description,
  leftChild,
  centerChild,
  rightChild,
}: IModal) => {
  return (
    <div>
      <div>{icon}</div>
      <div>{text}</div>
      <div>{description}</div>
      <div>
        {leftChild}
        {centerChild}
        {rightChild}
      </div>
    </div>
  );
};

export default Modal;
