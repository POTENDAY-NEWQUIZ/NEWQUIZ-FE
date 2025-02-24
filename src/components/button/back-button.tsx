"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <button onClick={() => router.back()}>
      <Image
        src={"assets/svg/back.svg"}
        width={24}
        height={24}
        alt="뒤로가기"
      />
    </button>
  );
};

export default BackButton;
