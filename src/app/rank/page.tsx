"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import Navigator from "@components/common/navigator";
import RankItem from "@components/rank/rank-item";
import { readRank } from "@api/rank-api";
import { IRank } from "@interface/props";

import trophy from "@assets/svg/trophy.svg";
import info from "@assets/svg/info.svg";

const Rank = () => {
  const myRankRef = useRef<HTMLDivElement | null>(null);
  const [ranks, setRanks] = useState<IRank[]>();
  const [myData, setMyData] = useState({
    myUserId: 0,
    myRank: 0,
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getRank();
  }, []);

  useEffect(() => {
    if (myRankRef.current) {
      myRankRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [ranks]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(
        "overflow-hidden",
        "overscroll-none",
        "fixed",
        "inset-0"
      );
    } else {
      document.body.classList.remove(
        "overflow-hidden",
        "overscroll-none",
        "fixed",
        "inset-0"
      );
    }

    return () =>
      document.body.classList.remove(
        "overflow-hidden",
        "overscroll-none",
        "fixed",
        "inset-0"
      );
  }, [isOpen]);

  const getRank = async () => {
    const response = await readRank();
    setRanks(response.data.ranking);
    setMyData({
      myUserId: response.data.myUserId,
      myRank: response.data.myRank,
    });
  };

  return (
    <>
      <main className="relative">
        {/* 타이틀 구역 */}
        <section className="fixed top-0 w-full max-w-[480px] h-[72px] bg-gradient-to-l from-[#7258EE] to-[#413288] flex justify-between px-5">
          <div className="flex items-center gap-1">
            <p className="font-semibold text-xl text-white">
              뉴퀴즈 학습왕에 도전하세요!
            </p>
            <Image src={trophy} alt="트로피" />
          </div>
        </section>
        <Image
          src={info}
          alt="안내"
          className="absolute -top-[72px] right-5 z-50 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />

        {/* 랭킹 구역 - 임시 */}
        <section className="mx-5 mt-24 mb-[92px]">
          {ranks && ranks.length > 0 ? (
            ranks.map((rank, index) => (
              <div
                key={index}
                ref={rank.userId === myData.myUserId ? myRankRef : null}
              >
                <RankItem
                  myUserId={myData.myUserId}
                  userId={rank.userId}
                  rank={rank.rank}
                  nickname={rank.nickname}
                  score={rank.score}
                  profileImageUrl={rank.profileImageUrl}
                />
              </div>
            ))
          ) : (
            <div></div>
          )}
        </section>

        {isOpen && (
          <article>
            <div className="px-5 py-4 rounded-2xl bg-[#F4F3F6] absolute -top-10 right-5 z-50">
              <div className="flex items-center gap-1 mb-1">
                <Image src={info} width={18} height={18} alt="물음표" />
                <p className="text-sm font-semibold text-[#6958AF]">
                  뉴퀴즈 학습왕이란?
                </p>
              </div>
              <ul className="text-xs text-[#5A5A5A] leading-5 pl-2 list-inside list-disc">
                <li>총 합산 점수가 가장 높은 뉴퀴저 순이에요</li>
                <li>
                  총 합산 점수: 맞춘 문제 수 + 사설 요약 Ai 채점 점수
                </li>
                <li>문단 요약까지 모두 완료해야 순위가 올라가요</li>
              </ul>
            </div>

            <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[480px] h-full bg-black bg-opacity-60 z-40 pointer-events-auto" />
          </article>
        )}
      </main>

      <Navigator />
    </>
  );
};

export default Rank;
