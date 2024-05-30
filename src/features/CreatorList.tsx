import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { MutableRefObject, useEffect, useRef } from "react";
import { NavigationOptions, Swiper as SwiperType } from "swiper/types";
import { chunkArray } from "@/lib/utils.ts";
import { Person } from "@/types.ts";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

type Props = {
  creators: Person[] | null;
};

export const CreatorList = ({ creators }: Props) => {
  const creatorsSwiperRef: MutableRefObject<SwiperType | null> = useRef(null);
  const creatorsSwiperPrevRef: MutableRefObject<HTMLDivElement | null> =
    useRef(null);
  const creatorsSwiperNextRef: MutableRefObject<HTMLDivElement | null> =
    useRef(null);

  useEffect(() => {
    if (creatorsSwiperRef.current && creatorsSwiperRef.current.navigation) {
      creatorsSwiperRef.current.navigation.update();
    }
  }, []);

  if (!creators) {
    return null;
  }
  const chunkedList = chunkArray(creators, 2);

  const handleSwiperInitCreators = (swiper: SwiperType) => {
    creatorsSwiperRef.current = swiper;
    if (swiper.params.navigation) {
      const navigation = swiper.params.navigation as NavigationOptions;
      navigation.prevEl = creatorsSwiperPrevRef.current;
      navigation.nextEl = creatorsSwiperNextRef.current;
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
          onSwiper={handleSwiperInitCreators}
          onSlideChange={() => console.log("slideChange")}
          className="w-full"
          navigation={{
            prevEl: creatorsSwiperPrevRef.current,
            nextEl: creatorsSwiperNextRef.current,
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
                          src={item.photo}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div>
                        <div className="font-bold">{item.name}</div>
                        <div className="text-sm text-gray-500">
                          {item.enProfession}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          ref={creatorsSwiperPrevRef}
          className="hidden lg:flex swiper-button-prev top-[50%] transform -translate-y-1/2"
        >
          <div className="w-[16px] h-[16px]">
            <HiChevronLeft className="w-full h-full object-contain" />
          </div>
        </div>
        <div
          ref={creatorsSwiperNextRef}
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
