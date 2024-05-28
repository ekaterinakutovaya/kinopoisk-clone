type Props = {
  img: string;
};
const MovieCard = ({ img }: Props) => {
  return (
    <div className="w-[128px] lg:w-[150px] max-w-[150px] lg:h-[289px]">
      <div className="poster-wrapper w-full h-[192px] lg:h-[225px] relative">
        <div className="flex justify-center items-center w-full h-full  bg-[#f4f4f4] overflow-hidden">
          <img src={img} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="overlay absolute top-0 left-0 block w-full h-full pointer-events-none">
          <span className="w-[32px] text-[13px] font-bold text-white absolute z-10 top-[6px] left-[6px] bg-[#3bb33b] flex items-center justify-center">
            8.5
          </span>
        </div>
      </div>

      <div className="flex flex-col mt-[8px]">
        <span className="text-[15px] font-semibold leading-[18px] text-black">
          Голяк
        </span>
        <span className="text-[13px] text-[#00000099]">2019, комедия</span>
      </div>
    </div>
  );
};

export default MovieCard;
