import banner from "../../public/images/yandex-banner.jpg";
import { Button } from "@/components/ui/button.tsx";
import { ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import { festivals } from "@/constants.tsx";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { MutableRefObject, useEffect, useRef } from "react";
import { NavigationOptions, Swiper as SwiperType } from "swiper/types";
import { NowWatchingCard } from "@/components/NowWatchingCard.tsx";

export const YandexPlusPromo = () => {
  const swiperRef: MutableRefObject<SwiperType | null> = useRef(null);
  const swiperPrevRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const swiperNextRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

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
    <div className="w-full mt-[30px] ">
      <div className="yandex-wrapper">
        <div className="yandex-content-wrapper">
          <div>
            <span className="text-white text-[22px] md:text-[36px]">
              Яндекс плюс
            </span>

            <div className="text-[16px] mt-[18px] mb-[32px]">
              <div className="text-[26px] md:text-[44px] font-bold text-white">
                Фильмы и сериалы по подписке
              </div>
              <div className="text-[26px] md:text-[44px] font-bold text-[#868eff]">
                90 дней бесплатно
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="yandex-range">
              <div className="yandex-column w-[60%] flex flex-col justify-end">
                <div className="yandex-offerText">90 дней бесплатно</div>
                <div className="yandex-rangeLine trial bg-white w-full h-[12px]"></div>
              </div>
              <div className="yandex-column w-[40%] flex flex-col justify-end">
                <div className="yandex-rangeLine payment w-full h-[12px]"></div>
              </div>
              <div className="mailText">Напишем на почту за 3 дня</div>
            </div>

            <div className="btn-wrapper">
              <Button className="yandex-btn font-bold" size="lg">
                Попробовать 90 дней бесплатно
              </Button>
              <div className="mt-[12px] text-[13px] text-[hsla(0,0%,100%,.6)]">
                далее 9999 сумов в месяц
              </div>
            </div>
          </div>
        </div>
        <img src={banner} alt="" className="yandex-cover" />
      </div>

      <div className="w-full max-w-[930px] bg-[#000] pt-0 pl-[16px] md:pr-12 pb-12 md:pl-12">
        <div className="flex items-center mb-[16px]">
          <h2 className="text-white font-bold mb-[16px] text-[22px] pt-[30px]">
            Смотрят сейчас
          </h2>
          <div className="flex items-center -mb-[18px]">
            <ChevronRight className="text-white w-[28px] h-[28px] leading-[28px]" />
          </div>
        </div>

        <div className="relative">
          <Swiper
            loop={false}
            freeMode={true}
            modules={[Navigation, FreeMode]}
            slidesPerView={4}
            spaceBetween={15}
            onSwiper={handleSwiperInit}
            onSlideChange={() => console.log("slideChange")}
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
                spaceBetween: 8,
              },
            }}
          >
            {festivals.map((item) => (
              <SwiperSlide
                key={item.id}
                className="min-w-[229px] max-w-[229px] lg:w-auto lg:h-[343px]"
              >
                <NowWatchingCard />
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
