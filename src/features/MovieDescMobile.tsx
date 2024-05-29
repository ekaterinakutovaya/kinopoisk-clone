import { BookmarkPlus, Ellipsis, FolderPlus, Star } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ActorList } from "@/features/ActorList.tsx";
import { CreatorList } from "@/features/CreatorList.tsx";
import { MovieRaitingsBlockMobile } from "@/features/MovieRaitingsBlockMobile.tsx";
import { MovieDetails } from "@/types.ts";
import { formatDuration, formatNumberK } from "@/lib/utils.ts";
import { IoPlaySharp } from "react-icons/io5";
import { Button } from "@/components/ui/button.tsx";

type Props = {
  data: MovieDetails;
};

export const MovieDescMobile = ({ data }: Props) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const directors = data.persons.filter(
    (person) => person.enProfession === "director",
  );
  const producers = data.persons.filter(
    (person) => person.enProfession === "producer",
  );

  const creators = directors.concat(producers);
  const actors = data.persons.filter(
    (person) => person.enProfession === "actor",
  );

  const truncateHandler = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div className="lg:hidden w-full flex flex-col justify-center text-center gap-[30px] border-bottom py-[20px]">
      <div className="w-[220px] h-[330px] overflow-hidden my-0 mx-auto">
        <img
          src={data?.poster?.url}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div>
        <h1 className="text-[28px] leading-[32px] font-bold tracking-neg-0.5 mb-4">
          {data.name && data.name}
        </h1>
        <div className="text-[13px] flex justify-center gap-1">
          {data.rating.kp >= 9 ? (
            <div className="font-bold clip-text">
              {data.rating.kp.toFixed(1)}
            </div>
          ) : data.rating.kp < 7 ? (
            <div className="font-bold text-[#777777]">
              {data.rating.kp.toFixed(1)}
            </div>
          ) : (
            <div className="font-bold text-[#3bb33b]">
              {data.rating.kp.toFixed(1)}
            </div>
          )}
          <span className="text-[#00000099]">
            {formatNumberK(data.votes.kp)}
          </span>
          <span className="text-black">
            {data.alternativeName && data.alternativeName}
          </span>
        </div>
        <div className="text-[13px] flex justify-center gap-1">
          <span className="text-[#00000099]">
            <span>{data.year},&nbsp;</span>
            {data.genres &&
              data.genres.map((item, index) => (
                <span className="" key={index}>
                  {item.name}
                  {index < data.genres.length - 1 && ", "}
                </span>
              ))}
          </span>
        </div>
        <div className="text-[13px] flex justify-center gap-1">
          <span className="text-[#00000099]">
            {data.countries &&
              data.countries.map((item) => item.name).join(", ")}
            ,&nbsp;
            {data.movieLength &&
              `${data.movieLength} мин. / ${formatDuration(data.movieLength)}`}
            {data.ageRating ? `, ${data.ageRating}+` : ""}
          </span>
        </div>
      </div>

      <div className="action-btns flex justify-center gap-6">
        <div className="flex flex-col items-center">
          <Star className="w-[24] h-[24] text-[#00000099] mb-1" />
          <div className="text-[11px] text-[#00000099]">Оценить</div>
        </div>
        <div className="flex flex-col items-center">
          <BookmarkPlus className="w-[24] h-[24] text-[#00000099] mb-1" />
          <div className="text-[11px] text-[#00000099]">Буду смотреть</div>
        </div>
        <div className="flex flex-col items-center">
          <FolderPlus className="w-[24] h-[24] text-[#00000099] mb-1" />
          <div className="text-[11px] text-[#00000099]">Добавить</div>
        </div>
        <div className="flex flex-col items-center">
          <Ellipsis className="w-[24] h-[24] text-[#00000099] mb-1" />
          <div className="text-[11px] text-[#00000099]">Еще</div>
        </div>
      </div>

      {data.description ? (
        <div className="description text-start">
          <p
            className={`text-[15px] mt-4 ${isTruncated ? "truncate-3-lines" : ""}`}
          >
            {data.description}
          </p>

          <span
            className="text-[#f50] font-bold mt-2"
            onClick={truncateHandler}
          >
            {isTruncated ? "Полное описание" : "Свернуть"}
          </span>
        </div>
      ) : (
        ""
      )}

      <div className="w-full text-start mb-[24px]">
        <h3 className="font-bold mt-2 mb-4">Трейлер</h3>
        <div className="trailer-wrapper bg-[#0b1321] w-full h-[170px] overflow-hidden mb-[8px] relative cursor-pointer ">
          <Button
            variant="play"
            size="roundSm"
            className="opacity-1 absolute top-[50%] left-[50%] transform -translate-y-1/2 -translate-x-1/2 z-2"
          >
            <IoPlaySharp className="w-[24px] h-[24px]" />
          </Button>
        </div>

        <Link to="#" className="mb-[4px]">
          <h3 className="text-[15px] font-semibold">Трейлер (русский язык)</h3>
        </Link>
        <span className="text-[13px] text-[#00000099]">
          {data.year && data.year}
        </span>
      </div>
      {actors && actors.length ? <ActorList actors={actors} /> : ""}

      <CreatorList creators={creators} />
      <MovieRaitingsBlockMobile data={data} />
    </div>
  );
};
