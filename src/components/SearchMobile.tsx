import { IoSearch } from "react-icons/io5";
import { Button } from "@/components/ui/button.tsx";
import { BadgeCheck, X } from "lucide-react";
import { tempTop10 } from "@/constants.tsx";

type SearchMobileProps = {
  setSearchOpen: (open: boolean) => void;
};

export const SearchMobile = ({ setSearchOpen }: SearchMobileProps) => {
  return (
    <div className="fixed w-full top-0 left-0">
      <div className="w-full h-header-height bg-[#444] flex items-center justify-between px-[24px]">
        <IoSearch className="min-w-[24px] min-h-[24px] text-white opacity-60" />
        <input
          type="text"
          className="w-full block py-[8px] pl-[16px] text-[15px] text-white"
        />
        <Button
          variant="ghost"
          size="icon"
          className="w-auto h-auto"
          onClick={() => setSearchOpen(false)}
        >
          <X className="min-w-[24px] min-h-[24px] text-white opacity-60" />
        </Button>
      </div>

      <div className="w-full bg-white pt-[16px]">
        <h3 className="text-[13px] text-[#00000099] pb-[10px] pl-[16px]">
          Входит в топ 10 за месяц
        </h3>

        <div className="flex flex-col pb-[10px]">
          {tempTop10.map((item) => (
            <div
              key={item.id}
              className="w-full min-h-[36px] py-[10px] px-[16px] flex items-start justify-between"
            >
              <div className="flex items-center">
                <div className="w-[32px] h-[48px] overflow-hidden mr-[14px]">
                  <img
                    src={item.poster}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold leading-[20px]">
                    {item.title}
                  </h4>

                  <div>
                    <span className="text-[#3bb33b] text-[13px] font-semibold leading-[15px]">
                      {item.rate}&nbsp;
                    </span>
                    {item.subtitle && (
                      <span className="text-[13px] text-[#00000099]">
                        {item.subtitle},&nbsp;
                      </span>
                    )}
                    <span className="text-[13px] text-[#00000099]">
                      {item.year}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <BadgeCheck />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
