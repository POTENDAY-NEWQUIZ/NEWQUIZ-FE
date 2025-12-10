import LottieImage from "@components/common/lottie-image";

import lottie from "@assets/lottie/ai-feedback.json";

const AILoading = () => {
  return (
    <main className="h-screen bg-[radial-gradient(circle,_#FBFAFFCC_0%,_#DCD4FF80_100%,_#876EFF4D_200%)] flex flex-col justify-center items-center">
      <section className="text-center font-semibold text-xl leading-8">
        <p>
          Ai가 열심히 <span className="text-lavender">분석</span>하고
          있어요
        </p>
        <p>조금만 기다려 주세요!</p>
      </section>
      <section>
        <LottieImage image={lottie} />
      </section>
    </main>
  );
};

export default AILoading;
