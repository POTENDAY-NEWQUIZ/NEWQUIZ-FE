import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import onboard1 from "@assets/onboarding/onboard-1.png";
import onboard2 from "@assets/onboarding/onboard-2.png";
import onboard3 from "@assets/onboarding/onboard-3.png";

const slides = [
  {
    image: onboard1,
    text: (
      <p id="banner-text" className="font-semibold text-lg">
        정치, 경제, 사회, 글로벌 사설 중<br />
        내가{" "}
        <span className="text-lavender">관심 있는 주제로 퀴즈</span>를
        시작해요
      </p>
    ),
  },
  {
    image: onboard2,
    text: (
      <p id="banner-text" className="font-semibold text-lg">
        <span className="text-lavender">Ai 종합 피드백</span>으로
        <br />
        문해력을 한 단계 더 높일 수 있어요
      </p>
    ),
  },
  {
    image: onboard3,
    text: (
      <p id="banner-text" className="font-semibold text-lg">
        <span className="text-lavender">나만의 오답노트</span>로<br />
        틀린 문제를 확인하고 복습해요
      </p>
    ),
  },
];

const Banner = () => {
  return (
    <div>
      <Swiper
        modules={[Pagination, EffectCoverflow]}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        id="custom-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {slide.text}
            <Image
              src={slide.image}
              width={340}
              alt="onboarding"
              className="mx-auto"
            />
            <div className="w-full h-5"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
