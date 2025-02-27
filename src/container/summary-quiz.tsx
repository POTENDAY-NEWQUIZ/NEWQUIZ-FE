import Image from "next/image";

import Header from "@components/header";
import EventButton from "@components/button/event-button";
import Blank from "@components/button/blank";

import cancel from "@assets/svg/cancel.svg";
import pen from "@assets/svg/pen.svg";
import pin from "@assets/svg/seciton_pin.svg";
import Button from "@components/button/button";

const SummaryQuiz = () => {
  return (
    <main>
      {/* 헤더 영역 */}
      <Header
        title="내용 요약 퀴즈"
        leftChild={<EventButton icon={cancel} command="close" />}
        rightChild={<Blank />}
      />

      {/* 설명 영역 */}
      <section className="pt-16 mx-5 mb-7">
        <div className="p-3 flex justify-start items-center gap-1 font-semibold bg-home-lavender rounded-[10px]">
          <Image src={pen} width={24} height={24} alt="요약" />
          <p>아래 사설을 문단별로 요약해주세요!</p>
        </div>
      </section>

      {/* 기사 제목 영역 */}
      <section className="mx-5 mb-10">
        <div className="pb-[18px] border-b-[1px] border-[#D9D9D9]">
          <p className="font-semibold text-lg break-keep leading-7 mb-2">
            [사설] 러시아·북한 편에 선 미국, 안보 지각변동 대비하라
          </p>
          <p className="text-xs text-[#484848] text-right pr-2">
            2025-02-26 | 한국일보
          </p>
        </div>
      </section>

      {/* 기사 내용 - 요약 영역 */}
      <section>
        <article className="mx-5 mb-8">
          <div className="flex gap-2 mb-4">
            <Image src={pin} width={20} height={20} alt="핀" />
            <p className="font-semibold">1번째 문단을 요약하세요.</p>
          </div>
          <div>
            <p className="text-sm leading-7">
              미국이 국제 무대에서 러시아와 북한 편에 서는 듯한 모습을
              보여 충격이다. 유엔은 우크라이나 전쟁 3년을 맞은 24일 긴급
              총회에서 러시아의 전면적 침공을 규탄하는 결의안을 찬성
              93표, 반대 18표로 채택했다. 그러나 미국은 한국은 물론
              대부분 국가가 찬성한 이 표결에 반대하며 ‘분쟁의 신속한
              종결’만 강조한 자체 결의안을 제안했다. 반대표를 던진 국가
              중엔 러시아와 그 동맹국인 벨라루스, 북한도 있었다. 미국과
              러시아, 북한이 같은 편이 된 셈이다. 미국의 유엔 역사에서
              없던 일이다. 더구나 단 4줄에 불과한 미국 결의안엔 북한의
              러시아 파병에 대한 우려도 담기지 않았다.
            </p>
          </div>
          <div className="mt-5">
            <textarea
              placeholder="내용을 입력해 주세요. (최대 300자)"
              className="w-full p-2 border-2 border-[#D9D9D9]] text-sm rounded-md outline-none resize-none"
              maxLength={300}
            ></textarea>
          </div>
        </article>
        <article className="mx-5 mb-8">
          <div className="flex gap-2 mb-4">
            <Image src={pin} width={20} height={20} alt="핀" />
            <p className="font-semibold">1번째 문단을 요약하세요.</p>
          </div>
          <div>
            <p className="text-sm leading-7">
              미국이 국제 무대에서 러시아와 북한 편에 서는 듯한 모습을
              보여 충격이다. 유엔은 우크라이나 전쟁 3년을 맞은 24일 긴급
              총회에서 러시아의 전면적 침공을 규탄하는 결의안을 찬성
              93표, 반대 18표로 채택했다. 그러나 미국은 한국은 물론
              대부분 국가가 찬성한 이 표결에 반대하며 ‘분쟁의 신속한
              종결’만 강조한 자체 결의안을 제안했다. 반대표를 던진 국가
              중엔 러시아와 그 동맹국인 벨라루스, 북한도 있었다. 미국과
              러시아, 북한이 같은 편이 된 셈이다. 미국의 유엔 역사에서
              없던 일이다. 더구나 단 4줄에 불과한 미국 결의안엔 북한의
              러시아 파병에 대한 우려도 담기지 않았다.
            </p>
          </div>
          <div className="mt-5">
            <textarea
              placeholder="내용을 입력해 주세요. (최대 300자)"
              className="w-full p-2 border-2 border-[#D9D9D9]] text-sm rounded-md outline-none resize-none"
              maxLength={300}
            ></textarea>
          </div>
        </article>
      </section>

      {/* 버튼 영역 */}
      <section className="mb-5">
        <Button text="답안 제출하기" type="inactive" />
      </section>
    </main>
  );
};

export default SummaryQuiz;
