import Image from "next/image";

import quizLoading from "@assets/img/quiz-loading.svg";

const ArticleLoading = () => {
  return (
    <main className="h-screen flex flex-col justify-center items-center bg-mist-lavender">
      {/* 이미지 구역 */}
      <section className="text-center mb-8">
        <Image
          src={quizLoading}
          width={208}
          height={208}
          alt="퀴즈 시작 이미지"
        />
        <p className="mt-3 text-xl font-semibold">
          퀴즈가 곧 시작해요!
        </p>
      </section>

      {/* 안내문 구역 */}
      <section className="mx-w-[420px] bg-white shadow-default rounded-[10px] mx-[30px]">
        <ul className="ml-3 p-6 text-sm font-medium list-disc list-outside leading-6">
          <li>원하는 분야의 사설을 선택해주세요</li>
          <li>
            기사 선택 후 하단의 버튼을 누르면 퀴즈가 바로 시작됩니다
          </li>
        </ul>
      </section>
    </main>
  );
};

export default ArticleLoading;
