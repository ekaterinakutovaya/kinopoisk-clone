import { Button } from "@/components/ui/button.tsx";
import { MessageSquare, Plus } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.tsx";
import { IoMdThumbsDown, IoMdThumbsUp } from "react-icons/io";
import { FaUser } from "react-icons/fa6";

export const UserReviews = () => {
  return (
    <div className="max-w-[1200px] my-0 mx-auto pt-[40px] border-bottom pb-[30px]">
      <div className="flex flex-col gap-2 mb-8">
        <div className="flex items-center">
          <h2 className=" text-[22px] font-bold leading-[28px]">
            Рецензии зрителей
          </h2>
        </div>

        <div className="w-full flex">
          <Button variant="gray" size="sm">
            <Plus className="w-[20px] h-[20px] mr-2" />
            <div className="text-[15px] font-bold">Написать рецензию</div>
          </Button>
        </div>
      </div>

      <div className="w-full md:w-[832px] md:grid md:grid-cols-[1fr_182px] gap-4 mb-[30px]">
        <div className="bg-[#ebf7eb] rounded p-6">
          <div className="head flex items-start justify-between pb-4 border-bottom">
            <div className="flex items-center gap-4">
              <div>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="text-[15px]  leading-[28px]">
                <div className="font-bold">mariinna2018</div>{" "}
                <div className="text-[#00000099] text-[12px]">181 рецензия</div>
              </div>
            </div>

            <div>
              <div className="text-[#00000099] text-[12px]">
                20 апреля 2024 в 23:59
              </div>
              <div className="text-[#00000099] text-[12px] cursor-pointer">
                прямая ссылка
              </div>
            </div>
          </div>

          <div className="content text-[15px]">
            <p className="py-[40px]">
              Довольно часто мы не замечаем настоящего друга рядом с собой. И
              только попав вместе с ним в серьезную переделку, то начинаем
              совсем по-другому смотреть на окружающий мир и ценим того, кто
              находится рядом и готов прийти на помощь в даже самой
              экстремальной ситуации. Именно об этом нам и рассказывает новый
              обаятельный мультфильм для всей семьи «Пушистый вояж», который я
              настоятельно советую смотреть вместе со своими детьми, ведь он не
              только развлекает, но и говорит с нами об очень важных вещах.
            </p>

            <div className="review-footer flex flex-col md:flex-row gap-y-6 items-center justify-between">
              <div className="flex items-center gap-1 text-[13px] cursor-pointer">
                <MessageSquare className="w-[20px] h-[20px]" />
                Добавить комментарий
              </div>
              <div className="flex items-center gap-3">
                <Button variant="gray" size="sm" className="!bg-[#dfeadf]">
                  <IoMdThumbsUp className="w-[20px] h-[20px] mr-2 text-[#3bb33b]" />
                  <div className="text-[13px]">
                    Полезно <span className="ml-1">5</span>
                  </div>
                </Button>
                <Button variant="gray" size="sm" className="!bg-[#dfeadf]">
                  <IoMdThumbsDown className="w-[20px] h-[20px] mr-2 text-[#ff0000] " />
                  <div className="text-[13px]">
                    Нет <span className="ml-1">3</span>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
      <div className="w-full md:w-[832px] md:grid md:grid-cols-[1fr_182px] gap-4">
        <div className="bg-[#ffebeb] rounded p-6">
          <div className="head flex items-start justify-between pb-4 border-bottom">
            <div className="flex items-center gap-4">
              <div>
                <Avatar>
                  <AvatarImage src="" alt="@shadcn" />
                  <AvatarFallback>
                    <FaUser className="w-[20px] h-[20px] text-[#acadae]" />
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="text-[15px]  leading-[28px]">
                <div className="font-bold">restler</div>{" "}
                <div className="text-[#00000099] text-[12px]">102 рецензии</div>
              </div>
            </div>

            <div>
              <div className="text-[#00000099] text-[12px]">
                23 мая 2024 в 23:12
              </div>
              <div className="text-[#00000099] text-[12px] cursor-pointer">
                прямая ссылка
              </div>
            </div>
          </div>

          <div className="content text-[15px]">
            <p className="py-[40px]">
              Вот и вышел на экраны, сиквел майора грома. И если первый мне в
              целом понравился, хоть и после недавних пересмотров мое отношение
              к нему стало заметно прохладнее. Да и приквел трудное детство тоже
              не особо зашел, поэтому сиквел хоть и ждал но уже с опаской. Итак
              о сюжете, прошел почти год после событий первой части. Игорь Гром
              стал гиперзвездой города, теперь ему везде открыты дороги. Но
              также он стал более уязвимым ведь он постоянно под взором камер и
              смартфонов. И вот этим пользуется новый злодей, устраивающий
              теракты и затеявший игру с героем Питера, целью которых является
              предотвращение 'хлопков'
            </p>

            <div className="review-footer flex flex-col md:flex-row gap-y-6 items-center justify-between">
              <div className="flex items-center gap-1 text-[13px] cursor-pointer">
                <MessageSquare className="w-[20px] h-[20px]" />
                Добавить комментарий
              </div>
              <div className="flex items-center gap-3">
                <Button variant="gray" size="sm" className="!bg-[#dfeadf]">
                  <IoMdThumbsUp className="w-[20px] h-[20px] mr-2 text-[#3bb33b]" />
                  <div className="text-[13px]">
                    Полезно <span className="ml-1">371</span>
                  </div>
                </Button>
                <Button variant="gray" size="sm" className="!bg-[#dfeadf]">
                  <IoMdThumbsDown className="w-[20px] h-[20px] mr-2 text-[#ff0000] " />
                  <div className="text-[13px]">
                    Нет <span className="ml-1">323</span>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};
