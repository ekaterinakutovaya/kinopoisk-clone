import poster from "../../public/images/poster001.webp";
import { BookmarkPlus, Ellipsis, FolderPlus, Star } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button.tsx";
import { IoPlaySharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ActorList } from "@/features/ActorList.tsx";
import { CreatorList } from "@/features/CreatorList.tsx";
import { MovieRaitingsBlockMobile } from "@/features/MovieRaitingsBlockMobile.tsx";
// import { Button } from "@/components/ui/button.tsx";
// import { IoPlaySharp } from "react-icons/io5";
// import { Link } from "react-router-dom";
// import { BookmarkPlus, ChevronRight, Ellipsis, FolderPlus } from "lucide-react";

export const MovieDescMobile = () => {
  const [isTruncated, setIsTruncated] = useState(true);

  const truncateHandler = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div className="lg:hidden w-full flex flex-col justify-center text-center gap-[30px] border-bottom py-[20px]">
      <div className="w-[220px] h-[330px] overflow-hidden my-0 mx-auto">
        <img src={poster} alt="" className="w-full h-full object-cover" />
      </div>

      <div>
        <h1 className="text-[28px] leading-[32px] font-bold tracking-neg-0.5 mb-4">
          Рик и Морти
        </h1>
        <div className="text-[13px] flex justify-center gap-1">
          <span className="text-[#3bb33b] font-bold">7.6</span>
          <span className="text-[#00000099]">615K</span>
          <span className="text-black">Cruella</span>
        </div>
        <div className="text-[13px] flex justify-center gap-1">
          <span className="text-[#00000099]">
            2021, комедия, криминал, драма
          </span>
        </div>
        <div className="text-[13px] flex justify-center gap-1">
          <span className="text-[#00000099]">США, 2ч 14 мин, 12+</span>
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

      <div className="description text-start">
        <p className="text-[18px]">
          Великобритания, 1960-е годы. Эстелла была необычным ребёнком,
          и особенно трудно ей было мириться со всякого рода несправедливостью.
          Вылетев из очередной школы, она с мамой отправляется в Лондон.
          По дороге они заезжают в особняк известной модельерши по имени
          Баронесса, где в результате ужасного несчастного случая мама погибает.
          Добравшись до Лондона, Эстелла знакомится с двумя
          мальчишками — уличными мошенниками Джаспером и Хорасом.
        </p>

        <p
          className={`text-[15px] mt-4 ${isTruncated ? "truncate-3-lines" : ""}`}
        >
          10 лет спустя та же компания промышляет на улицах британской столицы
          мелким воровством, но Эстелла никак не может оставить мечту сделать
          карьеру в мире моды. Хитростью устроившись в фешенебельный универмаг,
          девушка привлекает внимание Баронессы, и та берёт её к себе в штат
          дизайнеров.
        </p>

        <span className="text-[#f50] font-bold mt-2" onClick={truncateHandler}>
          {isTruncated ? "Полное описание" : "Свернуть"}
        </span>
      </div>

      <div className="w-full text-start mb-[24px]">
        <div className="trailer-wrapper w-full h-[170px] overflow-hidden mb-[8px] relative cursor-pointer ">
          <img src={poster} alt="" className="w-full h-full object-cover" />
        </div>

        <Link to="#" className="mb-[4px]">
          <h3 className="text-[15px] font-semibold">
            Трейлер (сезон 5; русский язык)
          </h3>
        </Link>
        <span className="text-[13px] text-[#00000099]">21 июня 2021</span>
      </div>

      <ActorList />
      <CreatorList />
      <MovieRaitingsBlockMobile />
    </div>
  );
};
