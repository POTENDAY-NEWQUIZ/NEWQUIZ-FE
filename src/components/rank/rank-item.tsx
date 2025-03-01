import Image from "next/image";

import { IRank } from "@interface/props";

import user from "@assets/img/user.svg";
import first from "@assets/img/1st.svg";
import second from "@assets/img/2nd.svg";
import third from "@assets/img/3rd.svg";

const RankItem = ({ rank, type, nickname, count }: IRank) => {
  return (
    <div className="bg-[#F8F8F8] rounded-2xl px-3 py-4 flex items-center justify-between mb-5">
      <div className="flex items-center gap-2">
        {rank === 1 ? (
          <Image src={first} width={40} height={40} alt="1등" />
        ) : rank === 2 ? (
          <Image src={second} width={40} height={40} alt="2등" />
        ) : rank === 3 ? (
          <Image src={third} width={40} height={40} alt="3등" />
        ) : (
          <p className="font-semibold w-10 text-center">{rank}</p>
        )}
        <div className="flex items-center gap-3">
          <Image src={user} width={42} height={42} alt="프로필" />
          <p className="text-lg font-semibold">{nickname}</p>
        </div>
      </div>
      <p className="font-medium w-10 text-center">{count}</p>
    </div>
  );
};

export default RankItem;
