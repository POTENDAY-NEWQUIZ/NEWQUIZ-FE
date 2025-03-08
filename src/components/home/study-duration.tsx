import Image from "next/image";

import { IStudyDuration } from "@interface/props";

const StudyDuration = ({ icon, duration, text }: IStudyDuration) => {
  return (
    <div className="w-[calc((100%-8px)/2)] bg-white border-[1px] border-[#D3C7FC] shadow-light flex gap-2 p-4 rounded-lg">
      {/* 아이콘 구역 */}
      <section>
        <Image src={icon} width={24} height={24} alt="아이콘" />
      </section>

      {/* 텍스트 구역 */}
      <section>
        <div className="font-semibold">{duration}일</div>
        <div className="font-medium text-[13px] xs:text-[10px]">
          {text}
        </div>
      </section>
    </div>
  );
};

export default StudyDuration;
