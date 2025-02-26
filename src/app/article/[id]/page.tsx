import Image from "next/image";

import Header from "@components/header";
import BackButton from "@components/button/back-button";
import Blank from "@components/button/blank";

import caution from "@assets/svg/caution.svg";
import Button from "@components/button/button";

const Article = () => {
  return (
    <main>
      {/* 헤더 영역 */}
      <Header
        title="오늘의 뉴퀴즈!"
        leftChild={<BackButton />}
        rightChild={<Blank />}
      />

      {/* 안내 문구 영역 */}
      <section className="pt-16 mx-5 mb-7">
        <div className="py-3 flex justify-center items-center gap-1 text-xs bg-home-lavender rounded-[10px]">
          <Image src={caution} width={18} height={18} alt="경고" />
          <p>해당 사설은 뉴퀴즈와는 무관합니다.</p>
        </div>
      </section>

      {/* 기사 내용 영역 */}
      <section className="mx-5">
        {/* 기사 제목 */}
        <div className="mb-[18px]">
          <p className="font-semibold text-lg text-center break-keep leading-6 mb-2">
            [사설] 러시아·북한 편에 선 미국, 안보 지각변동 대비하라
          </p>
          <p className="text-xs text-[#484848] text-center">
            2025-02-26 | 한국일보 | 정치
          </p>
        </div>

        {/* 기사 내용 - 배열로 문단 출력하면됨 */}
        <div className="text-sm leading-7 mb-16">
          <p>
            미국이 국제 무대에서 러시아와 북한 편에 서는 듯한 모습을
            보여 충격이다. 유엔은 우크라이나 전쟁 3년을 맞은 24일 긴급
            총회에서 러시아의 전면적 침공을 규탄하는 결의안을 찬성 93표,
            반대 18표로 채택했다. 그러나 미국은 한국은 물론 대부분
            국가가 찬성한 이 표결에 반대하며 ‘분쟁의 신속한 종결’만
            강조한 자체 결의안을 제안했다. 반대표를 던진 국가 중엔
            러시아와 그 동맹국인 벨라루스, 북한도 있었다. 미국과 러시아,
            북한이 같은 편이 된 셈이다. 미국의 유엔 역사에서 없던
            일이다. 더구나 단 4줄에 불과한 미국 결의안엔 북한의 러시아
            파병에 대한 우려도 담기지 않았다.
          </p>
          <br />
          <p>
            미국이 국제 무대에서 러시아와 북한 편에 서는 듯한 모습을
            보여 충격이다. 유엔은 우크라이나 전쟁 3년을 맞은 24일 긴급
            총회에서 러시아의 전면적 침공을 규탄하는 결의안을 찬성 93표,
            반대 18표로 채택했다. 그러나 미국은 한국은 물론 대부분
            국가가 찬성한 이 표결에 반대하며 ‘분쟁의 신속한 종결’만
            강조한 자체 결의안을 제안했다. 반대표를 던진 국가 중엔
            러시아와 그 동맹국인 벨라루스, 북한도 있었다. 미국과 러시아,
            북한이 같은 편이 된 셈이다. 미국의 유엔 역사에서 없던
            일이다. 더구나 단 4줄에 불과한 미국 결의안엔 북한의 러시아
            파병에 대한 우려도 담기지 않았다.
          </p>
          <br />
          <p>
            미국이 국제 무대에서 러시아와 북한 편에 서는 듯한 모습을
            보여 충격이다. 유엔은 우크라이나 전쟁 3년을 맞은 24일 긴급
            총회에서 러시아의 전면적 침공을 규탄하는 결의안을 찬성 93표,
            반대 18표로 채택했다. 그러나 미국은 한국은 물론 대부분
            국가가 찬성한 이 표결에 반대하며 ‘분쟁의 신속한 종결’만
            강조한 자체 결의안을 제안했다. 반대표를 던진 국가 중엔
            러시아와 그 동맹국인 벨라루스, 북한도 있었다. 미국과 러시아,
            북한이 같은 편이 된 셈이다. 미국의 유엔 역사에서 없던
            일이다. 더구나 단 4줄에 불과한 미국 결의안엔 북한의 러시아
            파병에 대한 우려도 담기지 않았다.
          </p>
          <br />
        </div>
      </section>

      {/* 버튼 영역 */}
      <section className="max-w-[480px] w-full fixed bottom-4">
        <Button
          text="해당 사설로 퀴즈 시작할래요!"
          type="start"
          link="/quiz"
        />
      </section>
    </main>
  );
};

export default Article;
