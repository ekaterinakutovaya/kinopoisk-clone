import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FestivalCard } from "@/components/FestivalCard.tsx";
import { festivals } from "@/constants.tsx";

import "swiper/css/navigation";

import { FreeMode, Navigation } from "swiper/modules";
import { useEffect, useRef } from "react";
import { NavigationOptions } from "swiper/types";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

export const Festivals = () => {
  const swiperPrevRef = useRef(null);
  const swiperNextRef = useRef(null);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.navigation) {
      swiperRef.current.navigation.update();
    }
  }, []);

  const handleSwiperInit = (swiper: any) => {
    swiperRef.current = swiper;
    if (swiper.params.navigation) {
      const navigation = swiper.params.navigation as NavigationOptions;
      navigation.prevEl = swiperPrevRef.current;
      navigation.nextEl = swiperNextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  };

  return (
    <div>
      <div className="lg:mt-[30px] max-w-[926px] min-h-[349px]">
        <h2 className="mb-[16px] text-[18px] leading-[24px] lg:text-[22px] font-bold lg:leading-[28px]">
          Каннский кинофестиваль кончился, но мы его продлеваем!
        </h2>
        <div className="relative">
          <Swiper
            loop={false}
            freeMode={true}
            modules={[Navigation, FreeMode]}
            slidesPerView={4}
            spaceBetween={15}
            onSlideChange={() => console.log("slide change")}
            onSwiper={handleSwiperInit}
            className="w-full"
            navigation={{
              prevEl: swiperPrevRef.current,
              nextEl: swiperNextRef.current,
            }}
            breakpoints={{
              0: {
                slidesPerView: "auto",
                spaceBetween: 8,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 28,
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
          <div
            ref={swiperPrevRef}
            className="hidden lg:flex swiper-button-prev top-[50%] transform -translate-y-1/2"
          >
            <div className="w-[16px] h-[16px]">
              <HiChevronLeft className="w-full h-full object-contain" />
            </div>
          </div>
          <div
            ref={swiperNextRef}
            className="hidden lg:flex swiper-button-next top-[50%] transform -translate-y-1/2"
          >
            <div className="w-[16px] h-[16px]">
              <HiChevronRight className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
