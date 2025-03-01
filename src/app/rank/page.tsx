import Image from "next/image";

import Navigator from "@components/common/navigator";

import trophy from "@assets/img/trophy.svg";
import RankItem from "@components/rank/rank-item";

const Rank = () => {
  return (
    <>
      <main>
        {/* 타이틀 구역 */}
        <section className="max-w-[480px] w-full fixed top-0 flex flex-col gap-1 items-center bg-mist-lavender py-8">
          <p className="text-[22px] font-bold ">뉴키즈 학습왕</p>
          <p className="text-sm mb-4">
            퀴즈를 풀어 학습 순위를 높여보세요!
          </p>
          <Image src={trophy} width={198} height={66.73} alt="트로피" />
        </section>

        {/* 랭킹 구역 - 임시 */}
        <section className="mx-5 mt-[230px] mb-[92px]">
          {Array.from({ length: 20 }, (_, index) => (
            <RankItem
              key={index}
              rank={index + 1}
              nickname="닉네임"
              count={0}
            />
          ))}
        </section>
      </main>

      <Navigator />
    </>
  );
};

export default Rank;
