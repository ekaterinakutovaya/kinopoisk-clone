import { Button } from "@/components/ui/button.tsx";
import { MovieDetails } from "@/types.ts";
import {
  calculatePercent,
  formatNumberK,
  formatNumberWithSpaces,
} from "@/lib/utils.ts";

type Props = {
  data: MovieDetails;
};

export const MovieRaitingsBlockMobile = ({ data }: Props) => {
  if (!data) {
    return null;
  }

  console.log(data);
  return (
    <div className="w-full text-start">
      <h3 className="font-bold mt-2 mb-6">Рейтинг фильма</h3>

      <div className="w-full p-[25px] bg-[#f7f7f7] flex flex-col gap-2 items-center justify-center mb-[8px]">
        {data.rating.kp >= 9 ? (
          <div className="text-[66px] leading-[66px] font-bold clip-text">
            {data.rating.kp.toFixed(1)}
          </div>
        ) : data.rating.kp >= 6 && data.rating.kp < 7 ? (
          <div className="text-[66px] leading-[66px] font-bold text-[#777777]">
            {data.rating.kp.toFixed(1)}
          </div>
        ) : data.rating.kp < 5 ? (
          <div className="text-[66px] leading-[66px] font-bold text-[#777777]">
            {data.rating.kp.toFixed(1)}
          </div>
        ) : (
          <div className="text-[66px] leading-[66px] font-bold text-[#3bb33b]">
            {data.rating.kp.toFixed(1)}
          </div>
        )}
        {data.rating.kp >= 9 && (
          <div className="rating-badge pt-[4px]">
            <div className="flex items-center gap-1">
              <span className="icon-left"></span>
              <div className="flex gap-2">
                <span className="text-center block clip-text text-[15px] font-bold leading-[18px]">
                  ТОП 250
                </span>
                <span className="block clip-text text-[15px] font-bold leading-[18px]">
                  24 место
                </span>
              </div>
              <span className="icon-right"></span>
            </div>
          </div>
        )}
        <span className="text-[15px] text-[#00000099]">
          {data.votes.kp && formatNumberWithSpaces(data.votes.kp)} оценок
        </span>
        <Button variant="play" size="lg">
          <span className="font-bold">Оценить</span>
        </Button>
      </div>

      {data.rating.imdb ? (
        <div className="flex gap-[8px] overflow-x-auto no-scrollbar">
          <div className="p-[16px] bg-[#f7f7f7]">
            <div className="">
              <span className="text-[20px] font-bold leading-[24px] mr-[8px]">
                {data.rating.imdb.toFixed(2)}
              </span>
              <span className="text-[15px] leading-[20px] text-[#00000044]">
                {formatNumberK(data.votes.imdb)}
              </span>
            </div>
            <div className="text-[13px] leading-[18px] text-[#333] whitespace-nowrap">
              IMDB
            </div>
          </div>

          <div className="p-[16px] bg-[#f7f7f7]">
            <div className="">
              <span className="text-[20px] font-bold leading-[24px] mr-[8px]">
                {calculatePercent(data.rating.filmCritics)}%
              </span>
              <span className="text-[15px] leading-[20px] text-[#00000044]">
                {data.votes.filmCritics}
              </span>
            </div>
            <div className="text-[13px] leading-[18px] text-[#333] whitespace-nowrap">
              Рейтинг кинокритиков
            </div>
          </div>

          <div className="p-[16px] bg-[#f7f7f7]">
            <div className="">
              <span className="text-[20px] font-bold leading-[24px] mr-[8px]">
                76%
              </span>
              <span className="text-[15px] leading-[20px] text-[#00000044]">
                91
              </span>
            </div>
            <div className="text-[13px] leading-[18px] text-[#333] whitespace-nowrap">
              Полож. рецензии
            </div>
          </div>

          <div className="p-[16px] bg-[#f7f7f7]">
            <div className="">
              <span className="text-[20px] font-bold leading-[24px] mr-[8px]">
                68%
              </span>
              <span className="text-[15px] leading-[20px] text-[#00000044]">
                28
              </span>
            </div>
            <div className="text-[13px] leading-[18px] text-[#333] whitespace-nowrap">
              Рос. кинокритики
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
