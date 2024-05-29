import poster from "../../public/images/poster001.webp";
import { Button } from "@/components/ui/button.tsx";
import { IoPlaySharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BookmarkPlus, ChevronRight, Ellipsis, FolderPlus } from "lucide-react";

const MovieDesc = () => {
  return (
    <div className="max-w-[1200px] my-0 mx-auto pt-[40px] pb-[60px] flex justify-between gap-[30px] border-bottom">
      <div className="left-column w-full max-w-[302px]">
        {/* Poster */}
        <div className="w-full h-[430px] overflow-hidden mb-[24px]">
          <img src={poster} alt="" className="w-full h-full object-cover" />
        </div>

        {/*  Trailer  */}
        <div className="w-full mb-[24px]">
          <div className="trailer-wrapper w-full h-[170px] overflow-hidden mb-[8px] relative cursor-pointer ">
            <img src={poster} alt="" className="w-full h-full object-cover" />

            <Button
              variant="play"
              size="roundSm"
              className="opacity-0 absolute top-[50%] left-[50%] transform -translate-y-1/2 -translate-x-1/2 z-2"
            >
              <IoPlaySharp className="w-[24px] h-[24px]" />
            </Button>
          </div>

          <Link to="#" className="mb-[4px]">
            <h3 className="text-[15px] font-semibold">
              Трейлер (сезон 5; русский язык)
            </h3>
          </Link>
          <span className="text-[13px] text-[#00000099]">21 июня 2021</span>
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
          <h1 className="text-[40px] leading-[48px] font-bold tracking-neg-0.5">
            Рик и Морти
          </h1>
          <h2 className="text-[40px] leading-[48px] font-bold tracking-neg-0.5 mb-3">
            (сериал 2013 - ...)
          </h2>
          <div className="text-[18px] tracking-neg-0.2 text-[#00000099] mb-6">
            Rick and Morty 18+
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
            О сериале
          </h2>
          <div className="grid grid-cols-[160px_1fr] gap-x-2 gap-y-4">
            <div className="text-[13px] leading-[18px] text-[#00000099]">
              Год производства
            </div>
            <div className="text-[13px] leading-[18px] text-black">
              <span className="cursor-pointer hover:text-[#f50]">2013</span> (
              <span className="cursor-pointer hover:text-[#f50]">
                10 сезонов
              </span>
              )
            </div>

            <div className="text-[13px] leading-[18px] text-[#00000099]">
              Страна
            </div>
            <div className="text-[13px] leading-[18px] text-black">
              <span className="cursor-pointer hover:text-[#f50]">США</span>
            </div>

            <div className="text-[13px] leading-[18px] text-[#00000099]">
              Жанр
            </div>
            <div className="text-[13px] leading-[18px] text-black">
              <span className="cursor-pointer hover:text-[#f50]">
                мультфильм
              </span>
            </div>

            <div className="text-[13px] leading-[18px] text-[#00000099]">
              Слоган
            </div>
            <div className="text-[13px] leading-[18px] text-[#00000099]">
              «Science makes sense, family doesn't»
            </div>

            <div className="text-[13px] leading-[18px] text-[#00000099]">
              Режиссер
            </div>
            <div className="text-[13px] leading-[18px] text-black">
              <span className="cursor-pointer hover:text-[#f50]">
                Уэсли Арчер, ...
              </span>
            </div>

            <div className="text-[13px] leading-[18px] text-[#00000099]">
              Сценарий
            </div>
            <div className="text-[13px] leading-[18px] text-black">
              <span className="cursor-pointer hover:text-[#f50]">
                Дэн Хармон, ...
              </span>
            </div>

            <div className="text-[13px] leading-[18px] text-[#00000099]">
              Продюсер
            </div>
            <div className="text-[13px] leading-[18px] text-black">
              <span className="cursor-pointer hover:text-[#f50]">
                Дэн Хармон, ...
              </span>
            </div>

            <div className="text-[13px] leading-[18px] text-[#00000099]">
              Композитор
            </div>
            <div className="text-[13px] leading-[18px] text-black">
              <span className="cursor-pointer hover:text-[#f50]">
                Дэн Хармон, ...
              </span>
            </div>

            <div className="text-[13px] leading-[18px] text-[#00000099]">
              Художник
            </div>
            <div className="text-[13px] leading-[18px] text-black">
              <span className="cursor-pointer hover:text-[#f50]">
                Дэн Хармон, ...
              </span>
            </div>

            <div className="text-[13px] leading-[18px] text-[#00000099]">
              Монтаж
            </div>
            <div className="text-[13px] leading-[18px] text-black">
              <span className="cursor-pointer hover:text-[#f50]">
                Дэн Хармон, ...
              </span>
            </div>

            <div className="text-[13px] leading-[18px] text-[#00000099]">
              Премьера в России
            </div>
            <div className="text-[13px] leading-[18px] text-[#00000099]">
              <span className="cursor-pointer hover:text-[#f50]">
                8 сентября 2014
              </span>
            </div>

            <div className="text-[13px] leading-[18px] text-[#00000099]">
              Премьера в мире
            </div>
            <div className="text-[13px] leading-[18px] text-black">
              <span className="cursor-pointer hover:text-[#f50]">
                2 декабря 2013, ...
              </span>
            </div>

            <div className="text-[13px] leading-[18px] text-[#00000099]">
              Цифровой релиз
            </div>
            <div className="text-[13px] leading-[18px] text-[#00000099]">
              5 февраля 2022,
              <span className="cursor-pointer text-black hover:text-[#f50]">
                «Max»
              </span>
            </div>

            <div className="text-[13px] leading-[18px] text-[#00000099]">
              Возраст
            </div>
            <div className="text-[13px] leading-[18px] text-black">
              <span className="font-bold py-[3px] px-[4px] border border-solid border-black">
                18+
              </span>
            </div>

            <div className="text-[13px] leading-[18px] text-[#00000099]">
              Время
            </div>
            <div className="text-[13px] leading-[18px] text-[#00000099]">
              23 мин
            </div>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="right-column min-w-[240px] max-w-[240px]">
        <div className="rating-value flex items-center gap-[20px]">
          {/*<div className="text-[32px] font-bold leading-[40px] text-[#3bb33b]">*/}
          {/*  7.6*/}
          {/*</div>*/}
          <div className="text-[32px] font-bold leading-[40px] clip-text">
            9.0
          </div>
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
        </div>
        <div className="mt-[10px] text-[13px] text-[#00000099]">
          909 321 оценка
        </div>

        <div className="w-full flex justify-center mt-[20px]">
          <Button variant="gray" size="full">
            <div className="text-[15px] font-bold">Оценить сериал</div>
          </Button>
        </div>

        <div className="mt-[10px] text-[13px] text-[#00000099] cursor-pointer hover:text-[#f50]">
          61 рецензия
        </div>

        <div className="flex flex-col mt-[200px] gap-2">
          <div className="flex items-center mb-[10px]">
            <h2 className=" text-[15px] font-bold leading-[20px]">
              В главных ролях
            </h2>
            <div className="flex items-center -mb-[2px]">
              <ChevronRight className="w-[20px] h-[20px] leading-[20px]" />
            </div>
          </div>

          {/*<div className="">Джастин Ройланд</div>*/}
          <span className="text-[13px] text-black cursor-pointer hover:text-[#f50]">
            Джастин Ройланд
          </span>
          <span className="text-[13px] text-black cursor-pointer hover:text-[#f50]">
            Джастин Ройланд
          </span>
          <span className="text-[13px] text-black cursor-pointer hover:text-[#f50]">
            Джастин Ройланд
          </span>
          <span className="text-[13px] text-black cursor-pointer hover:text-[#f50]">
            Джастин Ройланд
          </span>
          <span className="text-[13px] cursor-pointer text-[#f50]">
            179 актеров
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieDesc;
