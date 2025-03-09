import unsolve from "@assets/svg/unsolve.svg";
import solve from "@assets/svg/solve.svg";
import Image from "next/image";

const ReviewItem = () => {
  const temp = false;

  return (
    <>
      {temp ? (
        <div className="p-4 rounded-xl bg-[#F3F0FF] border-[1px] border-[#CABBFF]">
          <div className="flex justify-between mb-1">
            <p className="font-medium w-[calc(100%-24px)] truncate">
              수출 구조 지각변동, 경제 패러다임 전환 지렛대
            </p>
            <Image src={unsolve} width={20} height={20} alt="unsolve" />
          </div>
          <p className="text-xs text-[#909090]">날짜 | 분야</p>
        </div>
      ) : (
        <div className="p-4 rounded-xl bg-[#EEEEEE]">
          <div className="flex justify-between mb-1">
            <p className="font-medium w-[calc(100%-24px)] text-[#575757] truncate">
              수출 구조 지각변동, 경제 패러다임 전환 지렛대
            </p>
            <Image src={solve} width={20} height={20} alt="solve" />
          </div>
          <p className="text-xs text-[#909090]">날짜 | 분야</p>
        </div>
      )}
    </>
  );
};

export default ReviewItem;
