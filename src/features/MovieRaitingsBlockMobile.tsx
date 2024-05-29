import { Button } from "@/components/ui/button.tsx";

export const MovieRaitingsBlockMobile = () => {
  return (
    <div className="w-full text-start">
      <h3 className="font-bold mt-2 mb-6">Рейтинг фильма</h3>

      <div className="w-full h-[210px] bg-[#f7f7f7] flex flex-col gap-2 items-center justify-center mb-[8px]">
        <span className="text-[66px] leading-[66px] font-bold text-[#3bb33b]">
          7.6
        </span>
        <span className="text-[15px] text-[#00000099]">615 370 оценок</span>
        <Button variant="play" size="lg">
          <span className="font-bold">Оценить</span>
        </Button>
      </div>

      <div className="flex gap-[8px] overflow-x-auto no-scrollbar">
        <div className="p-[16px] bg-[#f7f7f7]">
          <div className="">
            <span className="text-[20px] font-bold leading-[24px] mr-[8px]">
              7.3
            </span>
            <span className="text-[15px] leading-[20px] text-[#00000044]">
              267K
            </span>
          </div>
          <div className="text-[13px] leading-[18px] text-[#333] whitespace-nowrap">
            IMDB
          </div>
        </div>

        <div className="p-[16px] bg-[#f7f7f7]">
          <div className="">
            <span className="text-[20px] font-bold leading-[24px] mr-[8px]">
              75%
            </span>
            <span className="text-[15px] leading-[20px] text-[#00000044]">
              413
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
    </div>
  );
};
