import NavItem from "@components/nav-item";

import rank from "@assets/svg/rank.svg";
import study from "@assets/svg/study.svg";
import mypage from "@assets/svg/mypage.svg";
import rank_active from "@assets/svg/rank_fill.svg";
import study_active from "@assets/svg/study_fill.svg";
import mypage_active from "@assets/svg/mypage_fill.svg";

const Navigator = () => {
  return (
    <nav className="w-full h-[72px] fixed bottom-0 flex justify-around items-center bg-white border-t-[1px] border-t-[#F2F2F2]">
      <NavItem
        icon={rank}
        activeIcon={rank_active}
        text="랭킹"
        link="/rank"
      />
      <NavItem
        icon={study}
        activeIcon={study_active}
        text="학습"
        link="/"
      />
      <NavItem
        icon={mypage}
        activeIcon={mypage_active}
        text="마이페이지"
        link="/mypage"
      />
    </nav>
  );
};

export default Navigator;
