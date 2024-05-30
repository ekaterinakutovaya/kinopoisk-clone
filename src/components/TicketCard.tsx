import { Link } from "react-router-dom";
import { Movie } from "@/types.ts";
import { IoTicketSharp } from "react-icons/io5";

type Props = {
  item: Movie;
};
export const TicketCard = ({ item }: Props) => {
  return (
    <Link to={`/movie/${item.id}`}>
      <div className="movie-wrapper w-[128px] lg:w-[150px] max-w-[150px] lg:min-h-[289px] lg:h-auto transition-all duration-300 ">
        <div className="poster-wrapper w-full h-[192px] lg:h-[225px] relative">
          <div className="poster-image flex justify-center items-center w-full h-full bg-[#f4f4f4] overflow-hidden border border-solid border-custom-gray relative">
            <img
              src={item?.poster?.previewUrl}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="overlay absolute top-0 left-0 block w-full h-full pointer-events-none"></div>
          {item.rating.kp >= 9 ? (
            <span className="w-[50px] text-[13px] font-bold text-white absolute z-10 top-[6px] left-[6px] gold-badge flex gap-0.5 items-center justify-center">
              <span className="icon-left-black"></span>
              <span aria-hidden="true">{item.rating?.kp.toFixed(2)}</span>
              <span className="icon-right-black"></span>
            </span>
          ) : item.rating.kp < 7 ? (
            <span className="w-[32px] text-[13px] font-bold text-white absolute z-10 top-[6px] left-[6px] bg-[#777777] flex items-center justify-center">
              {item.rating?.kp.toFixed(2)}
            </span>
          ) : (
            <span className="w-[32px] text-[13px] font-bold text-white absolute z-10 top-[6px] left-[6px] bg-[#3bb33b] flex items-center justify-center">
              {item.rating?.kp.toFixed(2)}
            </span>
          )}

          <div className="absolute right-[6px] bottom-[8px] z-10 flex items-center gap-2">
            <div className="w-auto py-3 px-2 h-[20px] text-[13px] font-semibold leading-[13px] bg-[#f50] text-white flex items-center gap-1">
              <IoTicketSharp className="min-w-[8px] min-h-[8px] " />
              <span>Билеты</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-[8px]">
          <span className="movie-title text-[13px] lg:text-[15px] font-semibold leading-[18px] text-black">
            {item.name && item.name}
          </span>
          <span className="text-[13px] text-[#00000099]">
            {item.year && item.year}, {item.genres && item.genres[0].name}
          </span>
        </div>
      </div>
    </Link>
  );
};
