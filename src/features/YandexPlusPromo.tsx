import banner from "/images/yandex-banner.jpg";
import { Button } from "@/components/ui/button.tsx";
import { ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { NowWatchingCard } from "@/components/NowWatchingCard.tsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { useEffect, useState } from "react";
import axios from "axios";

export const YandexPlusPromo = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_URL}/v1.4/movie?page=1&limit=30&notNullFields=poster.url&type=movie&votes.kp=500-666666&lists=top250`,
        {
          headers: {
            "X-API-KEY": import.meta.env.VITE_X_API_KEY,
          },
        },
      )
      .then((response) => {
        console.log(response.data.docs);
        setResults(response.data.docs);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div className="w-full mt-[30px] mb-[40px]">
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
            loop={true}
            freeMode={true}
            modules={[Navigation, FreeMode]}
            onSlideChange={() => console.log("slideChange")}
            className="w-full"
            navigation={{
              prevEl: ".swiper-button-prev-yandex",
              nextEl: ".swiper-button-next-yandex",
            }}
            breakpoints={{
              0: {
                slidesPerView: "auto",
                spaceBetween: 8,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 8,
              },
            }}
          >
            {results.map((item, i) => (
              <SwiperSlide
                key={i}
                className="min-w-[229px] max-w-[229px] w-[229px] lg:w-auto lg:h-[343px]"
              >
                <NowWatchingCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="hidden lg:flex swiper-button-prev-yandex top-[50%] transform -translate-y-1/2">
            <div className="w-[16px] h-[16px]">
              <HiChevronLeft className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="hidden lg:flex swiper-button-next-yandex top-[50%] transform -translate-y-1/2">
            <div className="w-[16px] h-[16px]">
              <HiChevronRight className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
