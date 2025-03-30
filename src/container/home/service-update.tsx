import LottieImage from "@components/common/lottie-image";
import Image from "next/image";

import background from "@assets/img/background.png";
import lottie from "@assets/lottie/service-update.json";

const ServiceUpdate = () => {
  return (
    <main className="h-screen flex flex-col justify-center items-center bg-radial-gradient">
      <div className="font-bold text-2xl mb-5">
        서비스 리뉴얼 중입니다
      </div>
      <div className="font-medium text-lavender leading-6 text-center mb-16">
        <p>더 나은 퀴즈 경험을 위해 준비중이에요.</p>
        <p>학습에 즐거움을 더한 뉴퀴즈로 곧 돌아올게요!</p>
      </div>
      <div className="relative">
        <div className="absolute left-4">
          <LottieImage image={lottie} />
        </div>
        <Image src={background} width={300} alt="로티 배경이미지" />
      </div>
    </main>
  );
};

export default ServiceUpdate;
