import QuizSelect from "@components/quiz/quiz-select";
import { IMeaningQuiz } from "@interface/props";

const WordQuiz2 = ({
  type,
  quizId,
  paragraphId,
  sourceSentence,
  word,
  option1,
  option2,
  option3,
  option4,
  answer,
  explanation,
}: IMeaningQuiz) => {
  const highlight = sourceSentence.replace(
    new RegExp(`(${word})`, "g"),
    `<span class="underline font-bold">$1</span>`
  );

  return (
    <>
      {/* 문제 영역 */}
      <section className="mt-6 mx-5">
        <div className="text-center font-semibold text-lg mb-5">
          다음 문장에서
          <br />
          <span className="underline">{word}</span>의 의미와
          <br />
          <span className="text-point-lavender">가장 잘 설명한</span>
          단어는?
        </div>

        <div
          className="px-4 py-8 bg-mist-lavender text-sm shadow-default leading-6"
          dangerouslySetInnerHTML={{ __html: highlight }}
        ></div>
      </section>

      <hr className="mx-5 my-10 border-t-[1px] border-[#D9D9D9]" />

      {/* 보기 영역 - 데이터 받아오면 배열로 해야 함 */}
      <section className="flex flex-col gap-2">
        <QuizSelect text={option1} type="unclick" />
        <QuizSelect text={option2} type="unclick" />
        <QuizSelect text={option3} type="click" />
        <QuizSelect text={option4} type="unclick" />
      </section>
    </>
  );
};

export default WordQuiz2;
