import Image from "next/image";

import { IRank } from "@interface/props";

import first from "@assets/img/1st.svg";
import second from "@assets/img/2nd.svg";
import third from "@assets/img/3rd.svg";

const RankItem = ({
  myUserId,
  userId,
  rank,
  nickname,
  score,
  profileImageUrl,
}: { myUserId: number } & IRank) => {
  return (
    <div
      className={`${
        rank <= 3
          ? "bg-[#ECE7FF]"
          : userId === myUserId
          ? "bg-lavender"
          : "bg-[#F8F8F8]"
      } rounded-2xl px-3 py-4 flex items-center justify-between mb-5`}
    >
      <div className="flex items-center gap-2">
        {rank === 1 ? (
          <Image src={first} width={40} height={40} alt="1등" />
        ) : rank === 2 ? (
          <Image src={second} width={40} height={40} alt="2등" />
        ) : rank === 3 ? (
          <Image src={third} width={40} height={40} alt="3등" />
        ) : (
          <p
            className={`${
              rank > 3 && userId === myUserId ? "text-white" : ""
            } font-semibold w-8 text-center`}
          >
            {rank}
          </p>
        )}
        <div className="flex items-center gap-2">
          <div className="rounded-full overflow-hidden">
            <Image
              src={profileImageUrl}
              width={42}
              height={42}
              alt="프로필"
              className="aspect-square"
            />
          </div>
          <p
            className={`${
              rank > 3 && userId === myUserId ? "text-white" : ""
            } text-lg font-semibold`}
          >
            {nickname}
          </p>
        </div>
      </div>
      <p
        className={`${
          rank <= 3
            ? "text-point-lavender"
            : userId === myUserId
            ? "text-white"
            : ""
        } font-medium w-10 text-center`}
      >
        {score}
      </p>
    </div>
  );
};

export default RankItem;
