import { BadgeCheck } from "lucide-react";
import { Loader } from "@/components/Loader.tsx";
import { Link } from "react-router-dom";
import { Movie } from "@/types.ts";

type Props = {
  data: Movie[];
};

export const Suggest = ({ data }: Props) => {
  return (
    <div className="absolute w-[396px] h-[454px] top-[38px] left-0 bg-white rounded-[8px] box-shadow overflow-y-auto">
      <div className="w-full bg-white pt-[16px] rounded-[8px]">
        <h3 className="text-[13px] text-[#00000099] pb-[10px] pl-[16px]">
          Входит в топ 10 за месяц
        </h3>

        <div className="flex flex-col pb-[10px]">
          {data.length ? (
            data.map((item) => (
              <Link
                to="#"
                key={item.id}
                className="w-full min-h-[36px] py-[10px] px-[16px] flex items-start justify-between hover:bg-gray-50"
              >
                <div className="flex items-center">
                  <div className="w-[32px] h-[48px] overflow-hidden mr-[14px]">
                    <img
                      src={item.poster?.previewUrl}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold leading-[20px] text-black">
                      {item.name && item.name}
                    </h4>

                    <div>
                      <span className="text-[#3bb33b] text-[13px] font-semibold leading-[15px]">
                        {item.rating?.kp.toFixed(2)}&nbsp;
                      </span>
                      {item.alternativeName ? (
                        <span className="text-[13px] text-[#00000099]">
                          {item.alternativeName},&nbsp;
                        </span>
                      ) : (
                        <span className="text-[13px] text-[#00000099]">
                          {item.genres[0].name},&nbsp;
                        </span>
                      )}
                      <span className="text-[13px] text-[#00000099]">
                        {item.year && item.year}
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <BadgeCheck />
                </div>
              </Link>
            ))
          ) : (
            <div className="flex items-center justify-center py-4">
              <Loader />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
