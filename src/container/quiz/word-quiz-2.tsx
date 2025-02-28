import QuizSelect from "@components/quiz/quiz-select";

const WordQuiz2 = () => {
  return (
    <>
      {/* 문제 영역 */}
      <section className="mt-6 mx-5">
        <div className="text-center font-semibold text-lg mb-5">
          다음 문장에서
          <br />
          <span className="underline">'출산 장려금'</span>의 의미와
          <br />
          <span className="text-point-lavender">가장 잘 설명한</span>
          단어는?
        </div>

        <div className="px-4 py-8 bg-mist-lavender text-sm shadow-default leading-6">
          “부영그룹이 자녀 1명당 1억원의{" "}
          <span className="underline font-bold">출산 장려금</span>을
          지급해 화제가 된 데 이어 게임업체 1위인 크래프톤도 자녀를
          출산한 직원에게 최대 1억원을 주기로 했다.”
        </div>
      </section>

      <hr className="mx-5 my-10 border-t-[1px] border-[#D9D9D9]" />

      {/* 보기 영역 - 데이터 받아오면 배열로 해야 함 */}
      <section className="flex flex-col gap-2">
        <QuizSelect
          text="아이가 태어난 후 정부가 지원하는 양육비"
          type="unclick"
        />
        <QuizSelect
          text="부모가 육아휴직을 사용할 때 받을 수 있는 보조금"
          type="unclick"
        />
        <QuizSelect
          text="출산을 장려하기 위해 정부나 기업이 제공하는 금전적 지원"
          type="click"
        />
        <QuizSelect
          text="임신한 부모가 병원 진료 시 사용할 수 있는 의료비 지원"
          type="unclick"
        />
      </section>
    </>
  );
};

export default WordQuiz2;
