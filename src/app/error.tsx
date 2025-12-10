"use client";

import Button from "@components/button/button";
import localFont from "next/font/local";
import { useRouter } from "next/navigation";

const pretendard = localFont({
  src: "/fonts/pretendard-variable.woff2",
  display: "swap",
  weight: "100 900",
});

const Error = () => {
  const router = useRouter();

  return (
    <main className={`${pretendard.className} antialiased tracking-tighter`}>
      <div className="max-w-[480px] min-h-screen mx-auto border-x-[1px] border-[#F2F2F2] box-content">
        <div className="flex justify-center items-center h-screen">
          <p className="text-4xl font-bold">500 ERROR</p>
        </div>
        <section className="max-w-[480px] w-full fixed bottom-5">
          <Button
            text="홈으로 이동하기"
            type="active"
            onClick={() => router.push("/")}
          />
        </section>
      </div>
    </main>
  );
};

export default Error;
