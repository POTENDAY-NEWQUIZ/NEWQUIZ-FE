import LottieImage from "@components/common/lottie-image";

import lottie from "@assets/lottie/quiz-word.json";

const ArticleLoading = () => {
  return (
    <main className="h-screen flex flex-col justify-center items-center bg-mist-lavender">
      {/* 이미지 구역 */}
      <section className="text-center mb-8">
        <p className="mt-3 mb-8 text-xl font-semibold">
          퀴즈가 곧 시작돼요!
        </p>
        <LottieImage image={lottie} />
      </section>

      {/* 안내문 구역 */}
      <section className="flex flex-col gap-5 bg-[#f6f4ffcc] mx-5 rounded-[10px] p-7 xs:p-6">
        <div className="flex gap-4 xs:gap-3">
          <span className="min-w-[26px] h-[26px] xs:min-w-5 xs:h-5 xs:text-sm flex justify-center items-center rounded-full bg-[#927CFF] text-white font-medium">
            1
          </span>
          <p className="font-medium leading-6 xs:text-sm">
            원하는 분야의 사설을 선택하고
          </p>
        </div>
        <div className="flex gap-4 xs:gap-3">
          <span className="min-w-[26px] h-[26px] xs:min-w-5 xs:h-5 xs:text-sm flex justify-center items-center rounded-full bg-[#927CFF] text-white font-medium">
            2
          </span>
          <div>
            <p className="font-medium leading-6 xs:text-sm">
              선택한 사설 속 어휘·독해 퀴즈를 풀어요
            </p>
            <p className="text-xs leading-4 xs:text-[10px]">
              유의어, 단어 뜻, 내용 일치 퀴즈가 랜덤으로 출제돼요
            </p>
          </div>
        </div>
        <div className="flex gap-4 xs:gap-3">
          <span className="min-w-[26px] h-[26px] xs:min-w-5 xs:h-5 xs:text-sm flex justify-center items-center rounded-full bg-[#927CFF] text-white font-medium">
            3
          </span>
          <div>
            <p className="font-medium leading-6 xs:text-sm">
              퀴즈를 푼 후 요약 퀴즈로 넘어가요
            </p>
            <p className="text-xs leading-4 xs:text-[10px]">
              어휘 퀴즈와 요약 퀴즈를 모두 완료해야
              <br />
              Ai봇의 피드백을 받을 수 있어요!
            </p>
            <p className="text-xs leading-4 text-[#FF6A6A] xs:text-[10px]">
              *요약까지 모두 완료해야 점수가 올라가요
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ArticleLoading;
