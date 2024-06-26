import { IoSearch } from "react-icons/io5";
import { Button } from "@/components/ui/button.tsx";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { Loader } from "@/components/Loader.tsx";
import { Movie } from "@/types.ts";
import debouce from "lodash.debounce";
import { SetStateAction, useEffect, useMemo, useState } from "react";
import axios from "axios";

type SearchMobileProps = {
  setSearchOpen: (open: boolean) => void;
};

export const SearchMobile = ({ setSearchOpen }: SearchMobileProps) => {
  const [results, setResults] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleLinkClick = () => {
    setSearchOpen(false);
  };

  useEffect(() => {
    if (inputValue.length === 0) {
      fetchSuggestData();
    }
  }, []);

  const fetchSearchData = async (query: React.SetStateAction<string>) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/v1.4/movie/search?page=1&limit=50&notNullFields=poster.url&query=${query}`,
        {
          headers: {
            "X-API-KEY": import.meta.env.VITE_X_API_KEY,
          },
        },
      );
      setResults(response.data.docs);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const fetchSuggestData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/v1.4/movie?page=1&limit=10&notNullFields=poster.url&rating.kp=7-10`,
        {
          headers: {
            "X-API-KEY": import.meta.env.VITE_X_API_KEY,
          },
        },
      );
      setResults(response.data.docs);
    } catch (error) {
      console.error("There was an error fetching the data!", error);
    }
  };

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputValue(event.target.value);
    fetchSearchData(event.target.value);
  };

  const debouncedResults = useMemo(() => {
    return debouce(handleChange, 300);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return (
    <div className="fixed w-full top-0 left-0 bg-white h-full flex flex-col">
      <div className="w-full h-header-height bg-[#444] flex items-center justify-between px-[24px]">
        <IoSearch className="min-w-[24px] min-h-[24px] text-white opacity-60" />
        <input
          type="text"
          className="w-full block py-[8px] pl-[16px] text-[15px] text-white"
          onChange={handleChange}
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

      <div className="suggest-wrapper w-full bg-white pt-[16px] flex-1 overflow-y-auto">
        <h3 className="text-[13px] text-[#00000099] pb-[10px] pl-[16px]">
          Входит в топ 10 за месяц
        </h3>

        <div className="flex flex-col pb-[10px]">
          {results.length ? (
            results.map((item: Movie) => (
              <Link
                to={`/movie/${item.id}`}
                key={item.id}
                onClick={handleLinkClick}
                className="w-full min-h-[36px] py-[10px] px-[16px] flex items-start justify-between"
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
                    <h4 className="text-[15px] font-bold leading-[20px] ">
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
                          {item.genres && item.genres[0].name},&nbsp;
                        </span>
                      )}
                      <span className="text-[13px] text-[#00000099]">
                        {item.year && item.year}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="flex items-center justify-center pt-4">
              <Loader />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
