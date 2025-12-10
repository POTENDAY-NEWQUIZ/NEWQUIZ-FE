"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

import Navigator from "@components/common/navigator";
import Chart from "@components/home/chart";
import ServiceUpdate from "@components/home/service-update";
import { readStudy } from "@api/study-api";
import { IUserStudy } from "@interface/props";

import logo from "@assets/logo-transparent.svg";
import fire from "@assets/svg/fire.svg";
import politics from "@assets/img/politics.svg";
import economy from "@assets/img/economy.svg";
import society from "@assets/img/society.svg";
import global from "@assets/img/global.svg";
import book from "@assets/img/books.svg";
import into from "@assets/svg/into.svg";

const Home = () => {
  // const router = useRouter();
  // const [study, setStudy] = useState<IUserStudy>();

  // useEffect(() => {
  //   getStudy();
  // }, []);

  // const getStudy = async () => {
  //   const response = await readStudy();
  //   setStudy(response.data);
  // };

  return (
    <>
      <ServiceUpdate />
      {/* <main className="bg-lavender pb-[72px]">
        // 헤더 구역
        <section className="max-w-[480px] px-5 mb-6">
          <div className="flex justify-between items-center py-4">
            <Image src={logo} height={20} alt="로고" />
            <div
              className="flex cursor-pointer"
              onClick={() => router.push("/fire")}
            >
              <Image src={fire} height={24} alt="불꽃" />
              <span className="text-lg font-semibold text-[#FFE96C]">
                {study?.learningDays}
              </span>
            </div>
          </div>

          <div className="font-semibold text-xl text-white leading-7 mb-2">
            {study?.nickName}님
            <br />
            관심있는 주제로 퀴즈를 풀어보세요!
          </div>
          <p className="font-medium text-xs text-[#BFB5E0]">
            주제를 선택하면 해당 분야의 기사를 볼 수 있어요
          </p>
        </section>

        // 콘텐츠 구역
        <section className="px-5 pt-5 bg-[#F4F3F6] rounded-t-3xl">
          // 카테고리 구역
          <section className="flex flex-wrap gap-4 mb-8">
            <div
              className="w-[calc(50%-8px)] bg-white rounded-xl py-4 flex flex-col items-center shadow-light cursor-pointer"
              onClick={() => router.push("/article?category=정치")}
            >
              <Image src={politics} width={96} height={96} alt="정치" />
              <p className="text-sm font-semibold">정치</p>
            </div>
            <div
              className="w-[calc(50%-8px)] bg-white rounded-xl py-4 flex flex-col items-center shadow-light cursor-pointer"
              onClick={() => router.push("/article?category=경제")}
            >
              <Image src={economy} width={96} height={96} alt="경제" />
              <p className="text-sm font-semibold">경제</p>
            </div>
            <div
              className="w-[calc(50%-8px)] bg-white rounded-xl py-4 flex flex-col items-center shadow-light cursor-pointer"
              onClick={() => router.push("/article?category=사회")}
            >
              <Image src={society} width={96} height={96} alt="사회" />
              <p className="text-sm font-semibold">사회</p>
            </div>
            <div
              className="w-[calc(50%-8px)] bg-white rounded-xl py-4 flex flex-col items-center shadow-light cursor-pointer"
              onClick={() => router.push("/article?category=글로벌")}
            >
              <Image src={global} width={96} height={96} alt="글로벌" />
              <p className="text-sm font-semibold">글로벌</p>
            </div>
          </section>

          // 오답노트 구역
          <section className="mb-8">
            <p className="font-semibold text-lg mb-4">
              헷갈렸던 문제, 다시 풀어볼까요? 🧐
            </p>
            <div
              className="bg-white shadow-light rounded-lg py-6 px-4 cursor-pointer"
              onClick={() => router.push("/review")}
            >
              <div className="flex gap-2 items-start">
                <Image
                  src={book}
                  width={24}
                  height={24}
                  alt="나의 오답 노트"
                />
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <span className="font-semibold">
                      나의 오답 노트
                    </span>
                    <Image
                      src={into}
                      width={20}
                      height={20}
                      alt="들어가기"
                    />
                  </div>
                  <p className="text-xs font-medium text-[#888888]">
                    틀린 문제를 확인하고 복습해보세요.
                  </p>
                </div>
              </div>
            </div>
          </section>

          // 그래프 구역
          <section className="pb-5">
            <p className="font-semibold text-lg mb-4">
              일주일 동안 이만큼 풀었어요! 📊
            </p>
            <div className="bg-white px-4 py-5 rounded-lg shadow-light">
              <div className="font-semibold text-[13px] flex justify-between px-1 mb-4">
                <p className="text-[#707070]">
                  지난 6일 간 푼 누적 퀴즈 수
                </p>
                <p>총 {study?.totalCount}개</p>
              </div>
              <Chart graph={study?.graph} />
            </div>
          </section>
        </section>
      </main>

      <Navigator /> */}
    </>
  );
};

export default Home;
