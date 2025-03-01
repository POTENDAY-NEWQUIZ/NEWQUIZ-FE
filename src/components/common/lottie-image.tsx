"use client";

import dynamic from "next/dynamic";

import { ILottie } from "@interface/props";

const LottieImageDynamic = dynamic(() => import("lottie-react"), {
  ssr: false,
});

const LottieImage = ({ image }: ILottie) => {
  return <LottieImageDynamic animationData={image} loop={true} />;
};

export default LottieImage;
