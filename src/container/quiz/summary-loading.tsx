import Button from "@components/button/button";
import LottieImage from "@components/common/lottie-image";
import { ISummaryLoading } from "@interface/props";

import lottie from "@assets/lottie/quiz-summary.json";

const SummaryLoading = ({ onStartQuiz }: ISummaryLoading) => {
  return (
    <main className="h-screen flex flex-col justify-center items-center bg-mist-lavender">
      {/* 이미지 구역 */}
      <section>
        <p className="text-center mt-3 mx-5 text-xl font-semibold">
          다음은 문단 요약 퀴즈예요!
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
              사설 속 핵심 내용을 파악해요
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <span className="bg-light-lavender rounded-full flex justify-center items-center min-w-6 h-6 text-white font-medium text-[15px]">
            2
          </span>
          <div>
            <p className="font-medium leading-6">
              퀴즈를 통해 학습한 어휘를 활용해
              <br />
              문단별 요약을 진행해요
            </p>
            <p className="text-[#686868] text-xs">
              논리적인 요약을 통해 독해력과 문해력을
              <br />
              성장시킬 수 있어요
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <span className="bg-light-lavender rounded-full flex justify-center items-center min-w-6 h-6 text-white font-medium text-[15px]">
            3
          </span>
          <div>
            <p className="font-medium leading-6">
              Ai 봇의 피드백을 확인해요!
            </p>
          </div>
        </div>
      </section>

      {/* 버튼 영역 */}
      <section className="w-full mt-12">
        <Button
          text="준비됐어요!"
          type="active"
          onClick={onStartQuiz}
        />
      </section>
    </main>
  );
};

export default SummaryLoading;
