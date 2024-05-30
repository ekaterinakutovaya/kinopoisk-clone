import { Link } from "react-router-dom";
import poster from "../../public/images/poster001.webp";
export const NowWatchingCard = () => {
  return (
    <Link to="/">
      <div className="movie-wrapper relative flex justify-center items-center  bg-[#141b1d] overflow-hidden">
        <div className="poster-wrapper w-full h-[343px]">
          <div className="poster-image flex justify-center items-center w-full h-full bg-[#141b1d] overflow-hidden ">
            <img src={poster} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="overlay absolute top-0 left-0 block w-full h-full pointer-events-none">
            {/*<span*/}
            {/*    className="w-[38px] h-[24px] text-[15px] font-bold text-white absolute z-10 top-[6px] left-[6px] bg-[#3bb33b] flex items-center justify-center">*/}
            {/*  8.2*/}
            {/*</span>*/}

            <div className="w-[50px] h-[24px] flex items-center justify-center gap-0.5 text-[15px] font-bold absolute z-10 top-[6px] left-[6px] gold-badge">
              <span className="icon-left-black"></span>
              <span aria-hidden="true">8.1</span>
              <span className="icon-right-black"></span>
            </div>
          </div>
        </div>
        {/*<img src={poster} alt="" className="w-full h-full object-cover"/>*/}
      </div>
    </Link>
  );
};
