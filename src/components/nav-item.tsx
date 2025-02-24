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
      className="w-12 flex flex-col items-center gap-1 cursor-pointer"
      onClick={() => router.push(link)}
    >
      {isActive ? (
        <Image
          src={activeIcon}
          width={30}
          height={30}
          alt="내비게이션 아이콘"
        />
      ) : (
        <Image
          src={icon}
          width={30}
          height={30}
          alt="내비게이션 아이콘"
        />
      )}

      <div
        className={`text-[10px] font-semibold ${
          isActive ? "font-semibold" : "font-normal"
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default NavItem;
