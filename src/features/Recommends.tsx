import { ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import { movies } from "@/constants.tsx";
import MovieCard from "@/components/MovieCard.tsx";
import { useEffect, useRef } from "react";
import { NavigationOptions } from "swiper/types";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

export const Recommends = () => {
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
    <div className="mt-[30px] max-w-[926px] min-h-[349px]">
      <div className="flex items-center mb-[16px]">
        <h2 className=" text-[22px] font-bold leading-[28px] ">Рекомендации</h2>
        <div className="flex items-center -mb-[3px]">
          <ChevronRight className="w-[28px] h-[28px] leading-[28px]" />
        </div>
      </div>

      <div className="relative">
        <Swiper
          loop={false}
          freeMode={true}
          modules={[Navigation, FreeMode]}
          // slidesPerView={6}
          // spaceBetween={15}
          onSlideChange={() => console.log("slide change")}
          onSwiper={handleSwiperInit}
          className="w-full"
          navigation={{
            prevEl: swiperPrevRef.current,
            nextEl: swiperNextRef.current,
          }}
          breakpoints={{
            // when window width is >= 320px
            0: {
              slidesPerView: "auto",
              spaceBetween: 8,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 6,
              spaceBetween: 28,
            },
          }}
        >
          {movies.map((item) => (
            <SwiperSlide
              key={item.id}
              className="max-w-[128px] lg:w-[150px] lg:h-[289px]"
            >
              <MovieCard img={item.img} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div ref={swiperPrevRef} className="hidden lg:flex swiper-button-prev">
          <div className="w-[16px] h-[16px]">
            <HiChevronLeft className="w-full h-full object-contain" />
          </div>
        </div>
        <div ref={swiperNextRef} className="hidden lg:flex swiper-button-next">
          <div className="w-[16px] h-[16px]">
            <HiChevronRight className="w-full h-full object-contain" />
          </div>
        </div>
        {/*<div*/}
        {/*  ref={swiperPrevRef}*/}
        {/*  className="hidden lg:block swiper-button-prev top-[42%] transform -translate-y-1/2"*/}
        {/*></div>*/}
        {/*<div*/}
        {/*  ref={swiperNextRef}*/}
        {/*  className="hidden lg:block swiper-button-next top-[42%] transform -translate-y-1/2"*/}
        {/*></div>*/}
      </div>
    </div>
  );
};
