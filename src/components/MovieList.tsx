import { Link } from "react-router-dom";

import { Loader } from "@/components/Loader.tsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { Movie } from "@/types.ts";

export const MovieList = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_URL}/v1.4/list?page=1&limit=10&notNullFields=cover.previewUrl`,
        {
          headers: {
            "X-API-KEY": import.meta.env.VITE_X_API_KEY,
          },
        },
      )
      .then((response) => {
        setResults(response.data.docs);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div className="w-full h-full mt-[30px]">
      <div className="flex items-center mb-[16px]">
        <h2 className="text-[18px] font-bold leading-[22px]">В списках</h2>
      </div>

      <div className="list-wrapper flex flex-col gap-0.5 h-[400px] pb-[10px]">
        <div className="w-full bg-white pt-[16px] flex-1 overflow-y-auto">
          {results && results.length ? (
            results.map((item: Movie, i) => (
              <Link
                to="#"
                key={i}
                className="w-full max-w-[320px] min-h-[36px] h-auto py-[10px] px-[16px] flex items-start justify-between hover:bg-gray-50"
              >
                <div className="flex items-center">
                  <div className="w-[48px] h-[48px] overflow-hidden mr-[14px]">
                    <img
                      src={item?.cover?.url}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="w-full max-w-[320px] text-[11px] font-bold leading-[20px] text-black whitespace-normal">
                      {item.name && item.name}
                    </div>

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
    </div>
  );
};
