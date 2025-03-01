import Image from "next/image";

import Button from "@components/button/button";
import LottieImage from "@components/common/lottie-image";
import { ISummaryLoading } from "@interface/props";

import lottie from "@assets/lottie/quiz-summary.json";

const SummaryLoading = ({ onStartQuiz }: ISummaryLoading) => {
  return (
    <main className="h-screen flex flex-col justify-center items-center">
      {/* 문구 영역 */}
      <section className="font-semibold text-xl">
        다음은 문단 요약 퀴즈예요!
      </section>

      {/* 이미지 영역 */}
      <section>
        <LottieImage image={lottie} />
      </section>

      {/* 텍스트 영역 */}
      <section className="flex flex-col gap-5 bg-mist-lavender mx-5 rounded-[10px] p-8">
        <div className="flex gap-4 xs:gap-3">
          <span className="min-w-[26px] h-[26px] xs:min-w-5 xs:h-5 xs:text-sm flex justify-center items-center rounded-full bg-[#927CFF] text-white font-medium">
            1
          </span>
          <p className="font-medium leading-6 xs:text-sm">
            사설 속 핵심 내용을 파악해요
          </p>
        </div>
        <div className="flex gap-4 xs:gap-3">
          <span className="min-w-[26px] h-[26px] xs:min-w-5 xs:h-5 xs:text-sm flex justify-center items-center rounded-full bg-[#927CFF] text-white font-medium">
            2
          </span>
          <div>
            <p className="font-medium leading-6 xs:text-sm mb-1">
              퀴즈를 통해 학습한 어휘를 활용해
              <br />
              문단별 요약을 진행해요
            </p>
            <p className="text-xs leading-4 xs:text-[11px]">
              논리적인 요약을 통해 독해력과 문해력을 성장시킬 수 있어요
            </p>
          </div>
        </div>
        <div className="flex gap-4 xs:gap-3">
          <span className="min-w-[26px] h-[26px] xs:min-w-5 xs:h-5 xs:text-sm flex justify-center items-center rounded-full bg-[#927CFF] text-white font-medium">
            3
          </span>
          <p className="font-medium leading-6 xs:text-sm">
            AI 봇의 피드백을 확인해요!
          </p>
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
