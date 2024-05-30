import { Button } from "@/components/ui/button.tsx";
import { IoPlaySharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BookmarkPlus, ChevronRight, Ellipsis, FolderPlus } from "lucide-react";
import { MovieDetails } from "@/types.ts";
import { formatDuration, formatNumberWithSpaces } from "@/lib/utils.ts";

type Props = {
  data: MovieDetails;
};

export const MovieDesc = ({ data }: Props) => {
  const directors = data.persons.filter(
    (person) => person.enProfession === "director",
  );
  const producers = data.persons.filter(
    (person) => person.enProfession === "producer",
  );
  const composers = data.persons.filter(
    (person) => person.enProfession === "composer",
  );
  const designers = data.persons.filter(
    (person) => person.enProfession === "designer",
  );
  const editors = data.persons.filter(
    (person) => person.enProfession === "editor",
  );
  const actors = data.persons.filter(
    (person) => person.enProfession === "actor",
  );

  return (
    <div className="hidden lg:flex max-w-[1200px] my-0 mx-auto pt-[40px] pb-[60px] justify-between gap-[30px] border-bottom">
      <div className="left-column w-full max-w-[302px]">
        {/* Poster */}
        <div className="w-full h-[430px] overflow-hidden mb-[24px] bg-[#f2f2f2] border border-solid border-[#f2f2f2]">
          <img
            src={data?.poster?.url}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/*  Trailer  */}
        <div className="w-full mb-[24px]">
          <div className="trailer-wrapper bg-[#0b1321] w-full h-[170px] overflow-hidden mb-[8px] relative cursor-pointer border border-solid border-[#f2f2f2]">
            <Button
              variant="play"
              size="roundSm"
              className="opacity-1 absolute top-[50%] left-[50%] transform -translate-y-1/2 -translate-x-1/2 z-2"
            >
              <IoPlaySharp className="w-[24px] h-[24px]" />
            </Button>
          </div>

          <Link to="#" className="mb-[4px]">
            <h3 className="text-[15px] font-semibold">
              Трейлер (русский язык)
            </h3>
          </Link>
          <span className="text-[13px] text-[#00000099]">
            {data.year && data.year}
          </span>
        </div>

        {/* Add folder button */}
        <div className="w-full flex justify-center">
          <Button variant="gray" size="full">
            <FolderPlus className="min-w-[24px] min-h-[24px]" />
            <div className="pl-[4px] text-[15px] font-bold">Добавить папку</div>
          </Button>
        </div>
      </div>

      <div className="central-column flex-1">
        <div>
          <h1 className="text-[40px] leading-[48px] font-bold tracking-neg-0.5 mb-3">
            {data.name && data.name}&nbsp;({data.year && data.year})
          </h1>
          <div className="text-[18px] tracking-neg-0.2 text-[#00000099] mb-6">
            {data.alternativeName && data.alternativeName}&nbsp;
            {data.ageRating && data.ageRating}+
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="gray" size="lg">
            <BookmarkPlus className="min-w-[24px] min-h-[24px] " />
            <div className="pl-[4px]">Буду смотреть</div>
          </Button>
          <Button variant="roundGray" size="roundSm">
            <Ellipsis />
          </Button>
        </div>

        {/* About */}
        <div className="mt-[40px]">
          <h2 className="mb-[16px] text-[22px] font-bold leading-[28px]">
            {data.isSeries ? "О сериале" : "О фильме"}
          </h2>
          <div className="grid grid-cols-[160px_1fr] gap-x-2 gap-y-4">
            <div className="text-[13px] leading-[18px] text-[#00000099]">
              Год производства
            </div>
            <div className="text-[13px] leading-[18px] text-black">
              <span className="cursor-pointer hover:text-[#f50]">
                {data.year && data.year}
              </span>
            </div>

            <div className="text-[13px] leading-[18px] text-[#00000099]">
              Страна
            </div>
            <div className="text-[13px] leading-[18px] text-black">
              <span className="cursor-pointer hover:text-[#f50]">
                {data.countries &&
                  data.countries.map((item) => item.name).join(", ")}
              </span>
            </div>

            <div className="text-[13px] leading-[18px] text-[#00000099]">
              Жанр
            </div>
            <div className="text-[13px] leading-[18px] text-black truncate">
              {data.genres &&
                data.genres.map((item, index) => (
                  <span
                    className="cursor-pointer hover:text-[#f50]"
                    key={index}
                  >
                    {item.name}
                    {index < data.genres.length - 1 && ", "}
                  </span>
                ))}
            </div>

            <div className="text-[13px] leading-[18px] text-[#00000099]">
              Слоган
            </div>
            <div className="text-[13px] leading-[18px] text-[#00000099]">
              {data.slogan ? data.slogan : "-"}
            </div>

            <div className="text-[13px] leading-[18px] text-[#00000099]">
              Режиссер
            </div>
            <div className="text-[13px] leading-[18px] text-black truncate">
              {directors &&
                directors.map((item, index) => (
                  <span
                    className="cursor-pointer hover:text-[#f50]"
                    key={index}
                  >
                    {item.name}
                    {index < directors.length - 1 && ","}
                  </span>
                ))}
            </div>

            <div className="text-[13px] leading-[18px] text-[#00000099]">
              Сценарий
            </div>
            <div className="text-[13px] leading-[18px] text-black truncate">
              {directors &&
                directors.map((item, index) => (
                  <span
                    className="cursor-pointer hover:text-[#f50]"
                    key={index}
                  >
                    {item.name}
                    {index < directors.length - 1 && ", "}
                  </span>
                ))}
            </div>

            <div className="text-[13px] leading-[18px] text-[#00000099]">
              Продюсер
            </div>
            <div className="text-[13px] leading-[18px] text-black truncate">
              {producers && producers.length > 0 ? (
                producers.map((item, index) => (
                  <span
                    className="cursor-pointer hover:text-[#f50]"
                    key={index}
                  >
                    {item.name}
                    {index < producers.length - 1 && ", "}
                  </span>
                ))
              ) : (
                <span>-</span>
              )}
            </div>

            <div className="text-[13px] leading-[18px] text-[#00000099]">
              Композитор
            </div>
            <div className="text-[13px] leading-[18px] text-black truncate">
              {composers && composers.length > 0 ? (
                composers.map((item, index) => (
                  <span
                    className="cursor-pointer hover:text-[#f50]"
                    key={index}
                  >
                    {item.name}
                    {index < composers.length - 1 && ", "}
                  </span>
                ))
              ) : (
                <span>-</span>
              )}
            </div>

            <div className="text-[13px] leading-[18px] text-[#00000099]">
              Художник
            </div>
            <div className="text-[13px] leading-[18px] text-black truncate">
              {designers && designers.length > 0 ? (
                designers.map((item, index) => (
                  <span
                    className="cursor-pointer hover:text-[#f50]"
                    key={index}
                  >
                    {item.name}
                    {index < designers.length - 1 && ", "}
                  </span>
                ))
              ) : (
                <span>-</span>
              )}
            </div>

            <div className="text-[13px] leading-[18px] text-[#00000099]">
              Монтаж
            </div>
            <div className="text-[13px] leading-[18px] text-black truncate">
              {editors && editors.length > 0 ? (
                editors.map((item, index) => (
                  <span
                    className="cursor-pointer hover:text-[#f50]"
                    key={index}
                  >
                    {item.name}
                    {index < editors.length - 1 && ", "}
                  </span>
                ))
              ) : (
                <span>-</span>
              )}
            </div>

            <div className="text-[13px] leading-[18px] text-[#00000099]">
              Премьера в России
            </div>
            <div className="text-[13px] leading-[18px] text-[#00000099]">
              <span className="cursor-pointer hover:text-[#f50]">
                {data.year && data.year}
              </span>
            </div>

            <div className="text-[13px] leading-[18px] text-[#00000099]">
              Премьера в мире
            </div>
            <div className="text-[13px] leading-[18px] text-black">
              <span className="cursor-pointer hover:text-[#f50]">
                {data.year && data.year}
              </span>
            </div>

            <div className="text-[13px] leading-[18px] text-[#00000099]">
              Цифровой релиз
            </div>
            <div className="text-[13px] leading-[18px] text-[#00000099]">
              {data.year && data.year}
            </div>

            <div className="text-[13px] leading-[18px] text-[#00000099]">
              Возраст
            </div>
            <div className="text-[13px] leading-[18px] text-black">
              <span className="font-bold py-[3px] px-[4px] border border-solid border-black">
                {data.ageRating ? `${data.ageRating}+` : "18+"}
              </span>
            </div>

            <div className="text-[13px] leading-[18px] text-[#00000099]">
              Время
            </div>
            <div className="text-[13px] leading-[18px] text-[#00000099]">
              {data.movieLength &&
                `${data.movieLength} мин. / ${formatDuration(data.movieLength)}`}
            </div>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="right-column min-w-[240px] max-w-[240px]">
        <div className="rating-value flex items-center gap-[20px]">
          {data.rating.kp >= 9 ? (
            <div className="text-[32px] font-bold leading-[40px] clip-text">
              {data.rating.kp.toFixed(1)}
            </div>
          ) : data.rating.kp >= 6 && data.rating.kp < 7 ? (
            <div className="text-[32px] font-bold leading-[40px] text-[#777777]">
              {data.rating.kp.toFixed(1)}
            </div>
          ) : data.rating.kp < 5 ? (
            <div className="text-[32px] font-bold leading-[40px] text-[#777777]">
              {data.rating.kp.toFixed(1)}
            </div>
          ) : (
            <div className="text-[32px] font-bold leading-[40px] text-[#3bb33b]">
              {data.rating.kp.toFixed(1)}
            </div>
          )}
          {data.rating.kp >= 9 && (
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
        <div className="mt-[10px] text-[13px] text-[#00000099]">
          {data.votes.kp && formatNumberWithSpaces(data.votes.kp)} оценок
        </div>

        <div className="w-full flex justify-center mt-[20px]">
          <Button variant="gray" size="full">
            <div className="text-[15px] font-bold">
              {data.isSeries ? "Оценить сериал" : "Оценить фильм"}
            </div>
          </Button>
        </div>

        {data.votes.filmCritics ? (
          <div className="mt-[10px] text-[13px] text-[#00000099] cursor-pointer hover:text-[#f50]">
            {data.votes.filmCritics} рецензий
          </div>
        ) : (
          ""
        )}

        {actors && actors.length ? (
          <div className="flex flex-col mt-[150px] gap-2">
            <div className="flex items-center mb-[10px]">
              <h2 className=" text-[15px] font-bold leading-[20px]">
                В главных ролях
              </h2>
              <div className="flex items-center -mb-[2px]">
                <ChevronRight className="w-[20px] h-[20px] leading-[20px]" />
              </div>
            </div>

            {actors &&
              actors.slice(0, 10).map((item, index) => (
                <span
                  className="text-[13px] text-black cursor-pointer hover:text-[#f50]"
                  key={index}
                >
                  {item.name}
                </span>
              ))}

            <span className="text-[13px] cursor-pointer text-[#f50]">
              {actors.length > 0 && actors.length} актеров
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
