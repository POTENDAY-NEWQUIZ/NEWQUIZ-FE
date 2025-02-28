"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import { INavItem } from "@interface/props";

const NavItem = ({ icon, activeIcon, text, link }: INavItem) => {
  const router = useRouter();
  const currentPath = usePathname();

  const isActive = currentPath === link;

  return (
    <div
      className="w-12 flex flex-col items-center cursor-pointer"
      onClick={() => router.push(link)}
    >
      {isActive ? (
        <Image
          src={activeIcon}
          width={40}
          height={40}
          alt="내비게이션 아이콘"
        />
      ) : (
        <Image
          src={icon}
          width={40}
          height={40}
          alt="내비게이션 아이콘"
        />
      )}

      <div
        className={`text-[10px] font-semibold ${
          isActive
            ? "font-bold text-lavender"
            : "font-normal text-[#909090]"
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default NavItem;
