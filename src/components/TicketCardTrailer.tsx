import video from "../../public/media/manyunya.webm";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";
import { IoTicketSharp } from "react-icons/io5";

export const TicketCardTrailer = () => {
  return (
    <Link to={`/movie/5278433`}>
      <div className="w-full max-w-[465px] lg:min-h-[289px] lg:h-auto transition-all duration-300">
        <div className="ticket-poster-wrapper w-full h-[192px] lg:h-[225px] relative">
          <div className="poster-image flex justify-center items-center w-full h-full bg-[#f4f4f4] overflow-hidden border border-solid border-custom-gray">
            <video autoPlay loop muted className="w-full h-full object-cover">
              <source src={video} type="video/mp4" />
            </video>
          </div>
          <div className="promo-content">
            <img src="https://avatars.mds.yandex.net/get-bunker/50064/f4d9dc3283cae3470699dc5127237d131cd3e93c/349x110" />

            <div className="mt-[12px] text-[11px] text-[hsla(0,0%,100%,.6)]">
              Екатерина Темнова, Карина Каграманян, Карина Мнацаканян
            </div>

            <div className="mt-[14px]">
              <div className="flex items-center gap-3">
                <Button variant="secondary" size="sm" className="!h-[40px]">
                  <IoTicketSharp className="min-w-[20px] min-h-[20px] " />
                  <div className="pl-[4px]">Билеты</div>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-[8px]">
          <span className="movie-title text-[13px] lg:text-[15px] font-semibold leading-[18px] text-black">
            Манюня: Приключения в Москве
          </span>
          <span className="text-[13px] text-[#00000099]">2024, комедия</span>
        </div>
      </div>
    </Link>
  );
};
