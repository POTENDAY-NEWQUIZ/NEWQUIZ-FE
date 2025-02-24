import { IQuizModal } from "@interface/props";

const QuizModal = ({
  text,
  answer,
  description,
  button,
}: IQuizModal) => {
  return (
    <div>
      <div>{text}</div>
      <div>{answer}</div>
      <div>{description}</div>
      {button}
    </div>
  );
};

export default QuizModal;
