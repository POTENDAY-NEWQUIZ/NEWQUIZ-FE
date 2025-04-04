import Image from "next/image";
import { useContext, useEffect, useRef } from "react";

import EventButton from "@components/button/event-button";
import { ModalContext } from "@context/modal-context";
import { useNewsStore } from "@store/news-store";

import cancel from "@assets/svg/cancel.svg";
import hintPin from "@assets/svg/hint-pin.svg";

const HintModal = ({ paragraphId }: { paragraphId: number }) => {
  const hintRef = useRef<HTMLDivElement | null>(null);
  const { activeModal } = useContext(ModalContext);
  const { news } = useNewsStore();

  useEffect(() => {
    if (activeModal === "hint-modal" && hintRef.current) {
      hintRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activeModal]);

  if (activeModal !== "hint-modal") return null;

  return (
    <>
      {/* 흐린 배경 */}
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[480px] h-full bg-black bg-opacity-40 z-40" />

      {/* 모달 */}
      <div className="max-w-[480px] w-full bg-mist-lavender fixed left-1/2 bottom-0 transform -translate-x-1/2 pt-8 z-50 rounded-tl-2xl">
        {/* 모달 닫기 버튼 */}
        <section className="mx-5 relative mb-10">
          <div className="absolute top-0 right-0">
            <EventButton icon={cancel} command="hint-close" />
          </div>
        </section>

        {/* 기사 제목 영역 */}
        <section className="mx-5 mb-8">
          <p className="font-semibold text-xl text-center break-keep leading-7 mb-2">
            {news!.title}
          </p>
          <p className="text-xs text-[#484848] text-center">
            {news!.date} | {news!.source}
          </p>
        </section>

        {/* 기사 본문 영역 - 스크롤 적용 */}
        <section className="mx-5">
          <div className="text-[#282828] leading-[30px] mb-16 max-h-[360px] overflow-y-auto scrollbar-hide">
            {news!.paragraphs.map((paragraph, index) =>
              paragraphId === paragraph.paragraphId ? (
                <article key={index}>
                  <div
                    className="bg-[#5E28E0] text-white flex justify-center gap-1 rounded-[10px] py-2 mb-4 font-medium text-[13px]"
                    ref={hintRef}
                  >
                    <Image
                      src={hintPin}
                      width={16}
                      height={16}
                      alt="핀"
                    />
                    <p>HINT! 아래 문단에서 정답을 찾을 수 있어요.</p>
                  </div>
                  <div key={paragraph.order}>
                    <p>{paragraph.content}</p>
                    <br />
                  </div>
                </article>
              ) : (
                <article key={index}>
                  <div key={paragraph.order}>
                    <p>{paragraph.content}</p>
                    <br />
                  </div>
                </article>
              )
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default HintModal;
