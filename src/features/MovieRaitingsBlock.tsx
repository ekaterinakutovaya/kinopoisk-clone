import React from "react";
import { ChevronRight } from "lucide-react";
import { MovieRating } from "@/components/MovieRating.tsx";
import { MovieList } from "@/components/MovieList.tsx";

export const MovieRaitingsBlock = () => {
  return (
    <div className="max-w-[1200px] my-0 mx-auto pt-[40px] pb-[60px] flex justify-between gap-[30px] border-bottom">
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
            <p className="mb-6">
              Великобритания, 1960-е годы. Эстелла была необычным ребёнком,
              и особенно трудно ей было мириться со всякого рода
              несправедливостью. Вылетев из очередной школы, она с мамой
              отправляется в Лондон. По дороге они заезжают в особняк известной
              модельерши по имени Баронесса, где в результате ужасного
              несчастного случая мама погибает. Добравшись до Лондона, Эстелла
              знакомится с двумя мальчишками — уличными мошенниками Джаспером
              и Хорасом.
            </p>

            <p>
              10 лет спустя та же компания промышляет на улицах британской
              столицы мелким воровством, но Эстелла никак не может оставить
              мечту сделать карьеру в мире моды. Хитростью устроившись
              в фешенебельный универмаг, девушка привлекает внимание Баронессы,
              и та берёт её к себе в штат дизайнеров.
            </p>
          </div>

          <MovieRating rating={7.6} />
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
