import { Link } from "react-router-dom";

import { Loader } from "@/components/Loader.tsx";

export const MovieList = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="w-full mt-[30px]">
      <div className="flex items-center mb-[16px]">
        <h2 className="text-[18px] font-bold leading-[22px]">В списках</h2>
      </div>

      <div className="list-wrapper flex flex-col gap-8 pb-[10px] h-[387px] overflow-y-scroll">
        {data.length ? (
          data.map((item, i) => (
            <Link
              to="#"
              key={i}
              className="w-full min-h-[36px] py-[10px] px-[16px] flex items-start justify-between hover:bg-gray-50"
            >
              <div className="flex items-center">
                <div className="w-[48px] h-[48px] overflow-hidden mr-[14px]">
                  <img src="" alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold leading-[20px] text-black">
                    Name
                  </h4>

                  <div>
                    <span className="text-[13px] text-[#00000099]">
                      1 место из 47
                    </span>
                  </div>
                </div>
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
  );
};
