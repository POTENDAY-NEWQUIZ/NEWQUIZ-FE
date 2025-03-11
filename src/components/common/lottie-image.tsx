"use client";

import dynamic from "next/dynamic";

import { ILottie } from "@interface/props";

const LottieImageDynamic = dynamic(() => import("lottie-react"), {
  ssr: false,
});

const LottieImage = ({ text, image }: ILottie) => {
  return (
    <LottieImageDynamic
      animationData={image}
      loop={text === "fanfare" ? false : true}
    />
  );
};

export default LottieImage;
