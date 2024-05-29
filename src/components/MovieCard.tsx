import { Link } from "react-router-dom";
import { Eye } from "lucide-react";
import { GoBlocked } from "react-icons/go";

type Props = {
  img: string;
};
const MovieCard = ({ img }: Props) => {
  return (
    <Link to="/">
      <div className="movie-wrapper w-[128px] lg:w-[150px] max-w-[150px] lg:h-[289px] transition-all duration-300">
        <div className="poster-wrapper w-full h-[192px] lg:h-[225px] relative">
          <div className="poster-image flex justify-center items-center w-full h-full bg-[#f4f4f4] overflow-hidden">
            <img src={img} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="overlay absolute top-0 left-0 block w-full h-full pointer-events-none">
            <span className="w-[32px] text-[13px] font-bold text-white absolute z-10 top-[6px] left-[6px] bg-[#3bb33b] flex items-center justify-center">
              8.5
            </span>

            <div className="action-icons opacity-0 absolute right-[6px] top-[6px] z-10 flex items-center gap-2">
              <Eye className="action-icon w-[22px] h-[22px] text-white opacity-80 hover:opacity-100 transition-all duration-300" />
              <GoBlocked className="action-icon w-[22px] h-[22px] text-white opacity-80 hover:opacity-100 transition-all duration-300" />
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-[8px]">
          <span className="movie-title text-[15px] font-semibold leading-[18px] text-black">
            Голяк
          </span>
          <span className="text-[13px] text-[#00000099]">2019, комедия</span>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
