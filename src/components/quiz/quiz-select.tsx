import { IQuizSelect } from "@interface/props";

const QuizSelect = ({ text, type }: IQuizSelect) => {
  const selectClass = {
    click: "bg-[#DFD8FF] color-lavender",
    unclick: "bg-[#F8F8F8]",
  };

  return (
    <div className="mx-5">
      <button
        className={`w-full h-[54px] rounded-[10px] font-medium text-sm ${selectClass[type]}`}
      >
        {text}
      </button>
    </div>
  );
};

export default QuizSelect;
