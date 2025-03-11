import LottieImage from "@components/common/lottie-image";
import Button from "@components/button/button";

import lottie from "@assets/lottie/quiz-word.json";

const QuizLoading = ({ newsId }: { newsId: string }) => {
  return (
    <main className="h-screen pb-14 flex flex-col justify-center items-center bg-mist-lavender">
      {/* 이미지 구역 */}
      <section className="mb-8">
        <p className="mt-3 mb-8 mx-5 text-center text-xl font-semibold">
          퀴즈가 곧 시작돼요!
        </p>
        <LottieImage image={lottie} />
      </section>

      {/* 안내문 구역 */}
      <section className="flex flex-col gap-6">
        <div className="flex gap-3">
          <span className="bg-light-lavender rounded-full flex justify-center items-center min-w-6 h-6 text-white font-medium text-[15px]">
            1
          </span>
          <div>
            <p className="font-medium leading-6">
              선택한 사설 속 어휘·독해 퀴즈를 풀어요
            </p>
            <p className="text-[#686868] text-xs">
              유의어, 단어 뜻, 내용 일치 퀴즈가 랜덤으로 출제돼요
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <span className="bg-light-lavender rounded-full flex justify-center items-center min-w-6 h-6 text-white font-medium text-[15px]">
            2
          </span>
          <div>
            <p className="font-medium leading-6">
              '원문 HINT' 버튼을 누르면
              <br />
              출제 문단을 확인할 수 있어요
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <span className="bg-light-lavender rounded-full flex justify-center items-center min-w-6 h-6 text-white font-medium text-[15px]">
            3
          </span>
          <div>
            <p className="font-medium leading-6">
              퀴즈를 모두 풀면 요약 퀴즈로 넘어가요
            </p>
            <p className="text-[#686868] text-xs">
              요약까지 모두 완료해야 점수가 올라가요
            </p>
          </div>
        </div>
      </section>

      {/* 버튼 구역 */}
      <section className="max-w-[480px] w-full fixed bottom-5">
        <Button
          text="준비됐어요!"
          type="active"
          link={`/quiz/${newsId}`}
        />
      </section>
    </main>
  );
};

export default QuizLoading;
