import Image from "next/image";

import Header from "@components/header";
import Blank from "@components/button/blank";
import EventButton from "@components/button/event-button";

import cancel from "@assets/svg/cancel.svg";
import robot from "@assets/img/robot-1.svg";
import star from "@assets/svg/star.svg";
import pin1 from "@assets/svg/pin.svg";
import pin2 from "@assets/svg/seciton_pin.svg";
import user from "@assets/svg/summary-user.svg";
import ai from "@assets/svg/summary-ai.svg";
import Button from "@components/button/button";

const AIFeedback = () => {
  return (
    <main>
      {/* 헤더 영역 - 수정 가능성 있음 */}
      <section className="max-w-[480px] h-[50px] px-5 bg-white flex justify-between items-center">
        <Blank />
        <EventButton icon={cancel} command="close" />
      </section>

      {/*  점수 영역 */}
      <section className="flex flex-col items-center mb-7">
        <div>
          <Image src={robot} width={70} height={70} alt="AI" />
        </div>
        <p className="font-semibold text-xl">AI 피드백 결과</p>
        <div className="flex text-sm font-medium">
          총점 <Image src={star} width={18} height={18} alt="별" /> 4 /
          5점
        </div>
      </section>

      {/* 최종 평가 영역 */}
      <section className="mx-5 rounded-md bg-mist-lavender border-[1px] border-[#D5CCF8] p-5 mb-7">
        <div className="text-sm font-semibold flex items-center gap-1 mb-2">
          <Image src={pin1} width={20} height={20} alt="핀" />
          Ai 최종 평가
        </div>
        <div className="text-xs leading-6">
          전반적으로 핵심 내용을 충실히 전달하면서도 정책 효과와 사회적
          변화를 균형 있게 설명한 좋은 요약이었어! 하지만 출산율 증가의
          지속 가능성과 중소기업 지원 문제를 보완하면 더 완성도가 높아질
          거야. 추가적인 보완이 이루어진다면 5점 만점도 가능할 듯!
        </div>
      </section>

      {/* 문단별 요약 영역 - API 연결 주의 필요 */}
      <section className="mx-5">
        <article>
          {/* 문단 내용 */}
          <div className="mb-6">
            <div className="font-semibold flex items-center gap-1 mb-4">
              <Image src={pin2} width={20} height={20} alt="핀" />
              1번째 문단
            </div>
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
          {/* 사용자 요약 내용 */}
          <div className="rounded-md border-[#D9D9D9] border-[1px] p-4 mb-6">
            <div className="flex gap-1 items-center text-sm font-semibold mb-2">
              <Image
                src={user}
                width={20}
                height={20}
                alt="사용자 요약"
              />
              사용자 요약
            </div>
            <div className="text-xs leading-6">
              둘째 아이 출산 증가 : 지난해 출생아 수가 늘어나면서 둘째
              아이 출산 비율도 높아졌다. 2018년 이후 줄어들던 둘째
              출산이 다시 증가한 것은 희망적인 변화다.
            </div>
          </div>

          {/* Ai 피드백 */}
          <div className="rounded-md border-[#D9D9D9] border-[1px] p-4 mb-6">
            <div className="flex gap-1 items-center text-sm font-semibold mb-2">
              <Image src={ai} width={20} height={20} alt="Ai 피드백" />
              Ai 피드백
            </div>
            <div className="text-xs leading-6">
              <p className="font-semibold">✅ 잘된 점</p>
              <ul>
                <li>
                  핵심 내용을 명확하게 정리함. 둘째 아이 출산 증가가
                  긍정적인 변화임을 강조함.
                </li>
              </ul>
            </div>
            <div className="text-xs leading-6">
              <p className="font-semibold">❗ 보완할 점</p>
              <ul>
                <li>
                  전년 대비 증가율(0.6%p 상승) 같은 구체적인 수치를
                  포함하면 더 명확해짐. 출산율 감소 추세 속에서
                  반등했다는 점을 강조할 필요 있음.
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-10">
            <details>
              <summary className="text-sm font-medium mb-2">
                AI 요약
              </summary>
              <div className="border-[1px] rounded-md p-4">
                <p className="text-sm font-semibold mb-2">
                  Ai가 요약한 내용이에요.
                </p>
                <p className="text-xs leading-6">
                  최근 출생아 수가 증가하는 가운데, 둘째 아이 출산
                  비율도 반등하는 모습을 보였다. 통계청에 따르면 지난해
                  3분기 전체 출생아 중 둘째 아이의 비중이 32.5%를
                  기록하며, 전년 동기 대비 0.6%포인트 증가했다. 2018년
                  이후 지속적으로 감소하던 둘째 출산율이 소폭 반등한
                  것은 저출산 시대에서 중요한 변화로 평가된다. 이는
                  청년층이 둘째 아이 출산을 고려할 수 있는 환경이
                  조성되고 있음을 의미한다.
                </p>
              </div>
            </details>
          </div>
        </article>
      </section>

      {/* 버튼 영역 */}
      <section className="w-full mb-5">
        <Button text="나의 랭킹은? 순위 확인하러 가기!" type="active" />
      </section>
    </main>
  );
};

export default AIFeedback;
