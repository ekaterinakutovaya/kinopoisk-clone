import poster from "../../public/images/poster001.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useEffect, useRef } from "react";
import { NavigationOptions } from "swiper/types";
import { chunkArray } from "@/lib/utils.ts";

export const CreatorList = () => {
  const list = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const chunkedList = chunkArray(list, 2);

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
    <div className="w-full text-start">
      <h3 className="font-bold mt-2 mb-6">Создатели</h3>

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
          {chunkedList.map((chunk, chunkIndex) => (
            <SwiperSlide
              key={chunkIndex}
              className="max-w-[229px] lg:w-auto lg:h-[294px]"
            >
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
                {chunk.map((item, index) => (
                  <div key={index} className="inline-block">
                    <div className="flex items-center gap-4">
                      <div className="w-[40px] h-[60px] overflow-hidden">
                        <img
                          src={poster}
                          alt={`Actor ${item}`}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div>
                        <div className="font-bold">Actor {item}</div>
                        <div className="text-sm text-gray-500">Role {item}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
  );
};
