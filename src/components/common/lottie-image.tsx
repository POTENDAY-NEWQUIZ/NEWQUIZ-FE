"use client";

import Lottie from "lottie-react";

import { ILottie } from "@interface/props";

const LottieImage = ({ image }: ILottie) => {
  return <Lottie animationData={image} loop={true} />;
};

export default LottieImage;
