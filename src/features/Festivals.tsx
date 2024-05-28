import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FestivalCard } from "@/components/FestivalCard.tsx";
import { festivals } from "@/constants.tsx";

import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

export const Festivals = () => {
  return (
    <div>
      <div className="hidden lg:block mt-[30px] max-w-[926px] min-h-[349px]">
        <h2 className="mb-[16px] text-[22px] font-bold leading-[28px]">
          Каннский кинофестиваль кончился, но мы его продлеваем!
        </h2>
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            slidesPerView={4}
            spaceBetween={15}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="w-full"
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
          >
            {festivals.map((item) => (
              <SwiperSlide key={item.id}>
                <FestivalCard img={item.img} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </div>
  );
};
