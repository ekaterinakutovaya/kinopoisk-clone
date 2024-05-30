import { ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";

import { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import axios from "axios";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import { TicketCardTrailer } from "@/components/TicketCardTrailer.tsx";
import { TicketCard } from "@/components/TicketCard.tsx";

export const Tickets = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_URL}/v1.4/movie?page=1&limit=50&notNullFields=poster.url&rating.kp=6-10&ticketsOnSale=true`,
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

  if (!results || results.length === 0) {
    return null;
  }

  return (
    <div className="mt-[30px] max-w-[926px] min-h-[349px]">
      <div className="flex items-center mb-[16px]">
        <h2 className=" text-[22px] font-bold leading-[28px]">Билеты в кино</h2>
        <div className="flex items-center -mb-[3px]">
          <ChevronRight className="w-[28px] h-[28px] leading-[28px]" />
        </div>
      </div>

      <div className="relative">
        <Swiper
          loop={false}
          freeMode={true}
          modules={[Navigation, FreeMode]}
          onSlideChange={() => console.log("slideChange")}
          className="w-full"
          navigation={{
            prevEl: ".swiper-button-prev-tickets",
            nextEl: ".swiper-button-next-tickets",
          }}
          breakpoints={{
            0: {
              slidesPerView: "auto",
              spaceBetween: 8,
            },
            768: {
              slidesPerView: "auto",
              spaceBetween: 28,
            },
          }}
        >
          <SwiperSlide className="min-w-[465px] max-w-[465px] w-[465px] -mr-2">
            <TicketCardTrailer />
          </SwiperSlide>
          {results &&
            results.map((item, i) => (
              <SwiperSlide
                key={i}
                className="min-w-[128px] max-w-[128px] lg:w-[150px] lg:min-h-[289px]"
              >
                <TicketCard item={item} />
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="hidden lg:flex swiper-button-prev-tickets top-[36%] transform -translate-y-1/2">
          <div className="w-[16px] h-[16px]">
            <HiChevronLeft className="w-full h-full object-contain" />
          </div>
        </div>
        <div className="hidden lg:flex swiper-button-next-tickets top-[36%] transform -translate-y-1/2">
          <div className="w-[16px] h-[16px]">
            <HiChevronRight className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};
