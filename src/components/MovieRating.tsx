import { IoStar, IoStarHalf } from "react-icons/io5";
import React from "react";
import { Button } from "@/components/ui/button.tsx";
import { Plus } from "lucide-react";

export const MovieRating = ({ rating, maxRating = 10 }) => {
  const filledStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = maxRating - filledStars - (halfStar ? 1 : 0);

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

        <div className="">
          <span className="mb-2 text-[#3bb33b] text-[48px] leading-[34px] font-bold">
            {rating.toFixed(1)}
          </span>
          <div className="ml-2 text-[13px] text-[#00000099]">
            <span>615 365 оценок</span>{" "}
            <span className="ml-2">
              <span className="font-bold">IMDb: 7.30</span> 266 937 оценок
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
