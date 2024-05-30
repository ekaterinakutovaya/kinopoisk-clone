import { Swiper, SwiperSlide } from "swiper/react";

import { FestivalCard } from "@/components/FestivalCard.tsx";
import { festivals } from "@/constants.tsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import "swiper/css/navigation";

import { FreeMode, Navigation } from "swiper/modules";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

export const Festivals = () => {
  return (
    <div>
      <div className="mt-[15px] lg:mt-[30px] max-w-[926px] min-h-[349px]">
        <h2 className="mb-[16px] text-[18px] leading-[24px] lg:text-[22px] font-bold lg:leading-[28px]">
          Каннский кинофестиваль кончился, но мы его продлеваем!
        </h2>
        <div className="relative">
          <Swiper
            loop={false}
            freeMode={true}
            modules={[Navigation, FreeMode]}
            onSlideChange={() => console.log("slideChange")}
            className="w-full"
            navigation={{
              prevEl: ".swiper-button-prev-festival",
              nextEl: ".swiper-button-next-festival",
            }}
            breakpoints={{
              0: {
                slidesPerView: "auto",
                spaceBetween: 8,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
          >
            {festivals.map((item) => (
              <SwiperSlide
                key={item.id}
                className="max-w-[229px] lg:w-auto lg:h-[294px]"
              >
                <FestivalCard img={item.img} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="hidden lg:flex swiper-button-prev-festival top-[50%] transform -translate-y-1/2">
            <div className="w-[16px] h-[16px]">
              <HiChevronLeft className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="hidden lg:flex swiper-button-next-festival top-[50%] transform -translate-y-1/2">
            <div className="w-[16px] h-[16px]">
              <HiChevronRight className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
