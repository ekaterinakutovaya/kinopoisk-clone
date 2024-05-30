import { BookmarkPlus, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Movie } from "@/types.ts";

export const Releases = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_URL}/v1.4/movie?page=1&limit=10&notNullFields=poster.url&releaseYears.start=2024`,
        {
          headers: {
            "X-API-KEY": import.meta.env.VITE_X_API_KEY,
          },
        },
      )
      .then((response) => {
        console.log(response.data.docs);
        setResults(response.data.docs);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  if (!results || results.length === 0) {
    return null;
  }

  const orderedIndexes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const firstColumn = orderedIndexes.slice(0, 5).map((index) => results[index]);
  const secondColumn = orderedIndexes.slice(5).map((index) => results[index]);

  return (
    <div className="w-full mt-[30px] mb-[40px]">
      <div className="w-full flex items-center pb-6">
        <h2 className="text-[18px] leading-[24px] md:text-[22px] font-bold md:leading-[28px]">
          Календарь релизов
        </h2>
      </div>

      <div className="border-b border-solid mb-4"></div>

      <div className="flex items-center mb-[16px]">
        <h2 className=" text-[15px] font-bold leading-[20px]">Скоро в кино</h2>
        <div className="flex items-center -mb-[3px]">
          <ChevronRight className="w-[20px] h-[20px] leading-[24px]" />
        </div>
      </div>

      <div className="w-full flex gap-10 md:gap-4 overflow-x-auto no-scrollbar">
        <div className="w-full md:w-1/2">
          {firstColumn.map((movie: Movie, index) => (
            <div key={movie.id} className="flex items-center py-2 gap-4">
              <div className="min-w-6 text-center text-[14px] text-[rgba(0,0,0,.6)] font-semibold">
                {index + 1}.
              </div>
              <Link
                to={`/movie/${movie.id}`}
                className="min-w-[40px] min-h-[60px] max-w-[40px] max-h-[60px] w-[40px] h-[60px] overflow-hidden"
              >
                <img
                  src={movie?.poster?.previewUrl}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </Link>
              <div className="flex flex-col">
                <Link
                  to={`/movie/${movie.id}`}
                  className="min-w-[174px] max-w-[174px]  text-[13px] font-semibold cursor-pointer hover:text-[#f50] truncate"
                >
                  {movie.name && movie.name}
                </Link>
                <span className="text-[13px] text-[rgba(0,0,0,.6)] font-medium">
                  {movie.alternativeName && movie.alternativeName}
                </span>
              </div>
              <span className="ml-auto flex items-center gap-4 text-[rgba(0,0,0,.6)]">
                <span className="text-[18px] font-bold text-center">
                  30 мая
                </span>
                <span>
                  <BookmarkPlus className="w-6 h-6 cursor-pointer hover:text-[#f50]" />
                </span>
              </span>
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/2">
          {secondColumn.map((movie: Movie, index) => (
            <div key={movie.id} className="flex items-center py-2 gap-4">
              <div className="min-w-6 text-center text-[14px] text-[rgba(0,0,0,.6)] font-semibold">
                {index + 1}.
              </div>
              <Link
                to={`/movie/${movie.id}`}
                className="min-w-[40px] min-h-[60px] max-w-[40px] max-h-[60px] w-[40px] h-[60px] overflow-hidden"
              >
                <img
                  src={movie?.poster?.previewUrl}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </Link>
              <div className="flex flex-col">
                <Link
                  to={`/movie/${movie.id}`}
                  className="min-w-[174px] max-w-[174px]  text-[13px] font-semibold cursor-pointer hover:text-[#f50] truncate"
                >
                  {movie.name && movie.name}
                </Link>
                <span className="text-[13px] text-[rgba(0,0,0,.6)] font-medium">
                  {movie.alternativeName && movie.alternativeName}
                </span>
              </div>
              <span className="ml-auto flex items-center gap-4 text-[rgba(0,0,0,.6)]">
                <span className="text-[18px] font-bold text-center">
                  30 мая
                </span>
                <span>
                  <BookmarkPlus className="w-6 h-6 cursor-pointer hover:text-[#f50]" />
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
