import { ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import MovieCard from "@/components/MovieCard.tsx";
import { useEffect, useRef, useState } from "react";
import { NavigationOptions } from "swiper/types";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import axios from "axios";

export const Recommends = () => {
  const swiperPrevRef = useRef(null);
  const swiperNextRef = useRef(null);
  const swiperRef = useRef<never>(null);

  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_URL}/v1.4/movie?page=1&limit=30&lists=top250`,
        {
          headers: {
            "X-API-KEY": import.meta.env.VITE_X_API_KEY,
          },
        },
      )
      .then((response) => {
        setResults(response.data.docs);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    if (swiperRef.current && swiperRef.current.navigation) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
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
        <h2 className=" text-[22px] font-bold leading-[28px]">Рекомендации</h2>
        <div className="flex items-center -mb-[3px]">
          <ChevronRight className="w-[28px] h-[28px] leading-[28px]" />
        </div>
      </div>

      <div className="relative">
        <Swiper
          loop={false}
          freeMode={true}
          modules={[Navigation, FreeMode]}
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
              slidesPerView: 6,
              spaceBetween: 28,
            },
          }}
        >
          {results &&
            results.map((item, i) => (
              <SwiperSlide
                key={i}
                className="max-w-[128px] lg:w-[150px] lg:min-h-[289px]"
              >
                <MovieCard item={item} />
              </SwiperSlide>
            ))}
        </Swiper>
        <div
          ref={swiperPrevRef}
          className="hidden lg:flex swiper-button-prev top-[42%] transform -translate-y-1/2"
        >
          <div className="w-[16px] h-[16px]">
            <HiChevronLeft className="w-full h-full object-contain" />
          </div>
        </div>
        <div
          ref={swiperNextRef}
          className="hidden lg:flex swiper-button-next top-[42%] transform -translate-y-1/2"
        >
          <div className="w-[16px] h-[16px]">
            <HiChevronRight className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};
