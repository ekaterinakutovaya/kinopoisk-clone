import { MovieRating } from "@/components/MovieRating.tsx";
import { MovieList } from "@/components/MovieList.tsx";
import { MovieDetails } from "@/types.ts";

type Props = {
  data: MovieDetails;
};

export const MovieRaitingsBlock = ({ data }: Props) => {
  return (
    <div className="hidden lg:flex max-w-[1200px] my-0 mx-auto pt-[40px] pb-[60px] justify-between gap-[30px] border-bottom">
      <div className="w-full grid grid-cols-[1fr_320px] gap-x-12 gap-y-4">
        <div>
          <div className="flex items-center gap-6 border-bottom pb-4">
            <span className="text-[15px] font-bold hover:text-[#f50] cursor-pointer">
              Обзор
            </span>
            <span className="text-[15px] font-bold hover:text-[#f50] cursor-pointer">
              Награды
            </span>
            <span className="text-[15px] font-bold hover:text-[#f50] cursor-pointer">
              Премьеры
            </span>
            <span className="text-[15px] font-bold hover:text-[#f50] cursor-pointer">
              Изображения
            </span>
            <span className="text-[15px] font-bold hover:text-[#f50] cursor-pointer">
              Трейлеры
            </span>
            <span className="text-[15px] font-bold hover:text-[#f50] cursor-pointer">
              Студии
            </span>
            <span className="text-[15px] font-bold hover:text-[#f50] cursor-pointer">
              Связи
            </span>
            <span className="text-[15px] font-bold hover:text-[#f50] cursor-pointer">
              Рецензии
            </span>
          </div>

          <div className="my-8">
            <p>{data.description && data.description}</p>
          </div>

          <MovieRating
            ratingKp={data.rating.kp}
            ratingImdb={data.rating.imdb}
            kpVotes={data.votes.kp}
            imdbVotes={data.votes.imdb}
          />
        </div>
        <div>
          <div className="flex items-center mb-[16px]">
            <h2 className="text-[18px] font-bold leading-[22px]">Друзья</h2>
          </div>
          <span className="text-[15px]">
            Пока никто из друзей не оценил этот фильм...
          </span>

          <MovieList />
        </div>
      </div>
    </div>
  );
};
