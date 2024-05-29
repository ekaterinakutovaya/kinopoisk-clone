import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { MutableRefObject, useEffect, useRef } from "react";
import { NavigationOptions, Swiper as SwiperType } from "swiper/types";
import { chunkArray } from "@/lib/utils.ts";
import { Person } from "@/types.ts";

type Props = {
  creators: Person[] | null;
};

export const CreatorList = ({ creators }: Props) => {
  if (!creators) {
    return null;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const swiperRef: MutableRefObject<SwiperType | null> = useRef(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const swiperPrevRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const swiperNextRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const chunkedList = chunkArray(creators, 2);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.navigation) {
      swiperRef.current.navigation.update();
    }
  }, []);

  const handleSwiperInit = (swiper: SwiperType) => {
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
