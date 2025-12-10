"use client";

import Button from "@components/button/button";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <p className="text-4xl font-bold">400 ERROR</p>
      </div>
      <section className="max-w-[480px] w-full fixed bottom-5">
        <Button
          text="홈으로 이동하기"
          type="active"
          onClick={() => router.push("/")}
        />
      </section>
    </>
  );
};

export default NotFound;
