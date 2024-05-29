import { IoStar, IoStarHalf } from "react-icons/io5";
import { Button } from "@/components/ui/button.tsx";
import { Plus } from "lucide-react";
import { formatNumberWithSpaces } from "@/lib/utils.ts";

type Props = {
  ratingKp: number;
  ratingImdb: number;
  kpVotes: number;
  imdbVotes: number;
};

export const MovieRating = ({
  ratingKp,
  ratingImdb,
  kpVotes,
  imdbVotes,
}: Props) => {
  const filledStars = Math.floor(ratingKp);
  const halfStar = ratingKp % 1 !== 0;
  const emptyStars = 10 - filledStars - (halfStar ? 1 : 0);

  return (
    <div>
      <div className="flex items-center mb-[16px]">
        <h2 className=" text-[22px] font-bold leading-[28px]">
          Рейтинг фильма
        </h2>
      </div>
      <div className="flex gap-6">
        <div className="flex space-x-1">
          {Array(filledStars)
            .fill(0)
            .map((_, index) => (
              <div key={`filled-${index}`} className="text-center">
                <IoStar className="w-[32px] h-[32px] text-orange-500" />
                <span className="text-[13px] text-[#00000033]">
                  {index + 1}
                </span>
              </div>
            ))}
          {halfStar && (
            <div className="text-center">
              <IoStarHalf className="w-[32px] h-[32px] text-orange-500" />
              <span className="text-[13px] text-[#00000033]">
                {filledStars + 1}
              </span>
            </div>
          )}
          {Array(emptyStars)
            .fill(0)
            .map((_, index) => (
              <div key={`empty-${index}`} className="text-center">
                <IoStar className="w-[32px] h-[32px] text-gray-300" />
                <span className="text-[13px] text-[#00000033]">
                  {filledStars + 1 + (halfStar ? 1 : 0) + index}
                </span>
              </div>
            ))}
        </div>

        <div className="-mt-2">
          <div className="flex gap-4 mb-2">
            {ratingKp >= 8 ? (
              <div className="text-[48px] leading-[48px] font-bold clip-text">
                {ratingKp.toFixed(1)}
              </div>
            ) : ratingKp >= 6 && ratingKp < 7 ? (
              <div className="text-[48px] leading-[48px] font-bold text-[#777777]">
                {ratingKp.toFixed(1)}
              </div>
            ) : ratingKp < 5 ? (
              <div className="text-[48px] leading-[48px] font-bold text-[#777777]">
                {ratingKp.toFixed(1)}
              </div>
            ) : (
              <div className="text-[48px] leading-[48px] font-bold text-[#3bb33b]">
                {ratingKp.toFixed(1)}
              </div>
            )}

            {ratingKp >= 8 && (
              <div className="rating-badge pt-[4px]">
                <div className="flex items-center gap-1">
                  <span className="icon-left"></span>
                  <div>
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
          </div>

          <div className="text-[13px] text-[#00000099]">
            <span>{formatNumberWithSpaces(kpVotes)} оценок</span>{" "}
            <span className="ml-2">
              <span className="font-bold">IMDb: {ratingImdb.toFixed(2)}</span>{" "}
              {formatNumberWithSpaces(imdbVotes)} оценок
            </span>
          </div>
        </div>
      </div>
      <div className="w-full flex mt-[20px]">
        <Button variant="gray" size="sm">
          <Plus className="w-[20px] h-[20px] mr-2" />
          <div className="text-[15px] font-bold">Написать рецензию</div>
        </Button>
      </div>
    </div>
  );
};
