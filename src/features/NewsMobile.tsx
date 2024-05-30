import { Button } from "@/components/ui/button.tsx";
import { useState } from "react";

const data = {
  popular: {
    articles: [
      {
        title:
          "Анти-«Смута»: Atomic Heart, INDIKA и еще 10 новых крутых русских игр",
        category: "Игры",
        comments: 15,
        image:
          "https://avatars.mds.yandex.net/get-kinopoisk-post-thumb/1644748/5028c4d1350cdfdc8f2cd5465d746b21/140x82",
      },
      {
        title: "Все фильмы Гая Ричи — от худшего к лучшему",
        category: "Как это смотреть",
        comments: 49,
        image:
          "https://avatars.mds.yandex.net/get-kinopoisk-post-thumb/1101343/4c1aba56b66b7b20699d20877866fb81/140x82",
      },
      {
        title:
          "Даже Кузя не спасает. Почему от сериала «Универ. 13 лет спустя» уже ничего не ждем",
        category: "В фокусе",
        comments: 33,
        image:
          "https://avatars.mds.yandex.net/get-kinopoisk-post-thumb/1348084/2ed93acff84c94cc4732b9bb5cdac85d/140x82",
      },
      {
        title:
          "«Ангора» — победитель 77-го Каннского фестиваля. В фильме снялись Марк Эйзенберг и Юра Борисов",
        category: "Канны-2024",
        comments: 33,
        image:
          "https://avatars.mds.yandex.net/get-kinopoisk-post-thumb/1669849/32bec8d0119f7f206eb446932162c5b9/140x82",
      },
      {
        title: "«Каким мы запомним 77-й Каннский кинофестиваль. Итоги",
        category: "Канны-2024",
        comments: 9,
        image:
          "https://avatars.mds.yandex.net/get-kinopoisk-post-thumb/1348084/5a82430e0abfb48a914f802ae24f464c/140x82",
      },
      {
        title:
          "Вампирский триллер с Оскаром Айзеком и новый фильм студии Neon. В чем секрет компании-дистрибьютора, продвигающей «Титан» и «Паразитов»?",
        category: "Канны-2024",
        comments: 8,
        image:
          "https://avatars.mds.yandex.net/get-kinopoisk-post-thumb/1348084/4b71b29c6a166d7fe6c47b76c0cd98f6/140x82",
      },
      {
        title:
          "«Ангора» — победитель 77-го Каннского фестиваля. В фильме снялись Марк Эйзенберг и Юра Борисов",
        category: "Рецензии",
        comments: 10,
        image:
          "https://avatars.mds.yandex.net/get-kinopoisk-post-thumb/1348084/69615a28ee234f20c8cdd8f7ebfa5add/140x82",
      },
      {
        title: "Спасибо, наша прекрасная няня. Памяти Анастасии Заворотнюк",
        category: "Сериалы",
        comments: 7,
        image:
          "https://avatars.mds.yandex.net/get-kinopoisk-post-thumb/5410517/01e2ea2b102e935a3a58e28d61af2852/140x82",
      },
    ],
  },
  main: {
    image: "/path/to/main-image.jpg",
    headline:
      "Что смотреть дома: «Золото Рейна», «Манкизмэн», «Меч короля» и финал Лиги чемпионов",
    articles: [
      {
        title: "Спасибо, наша прекрасная няня. Памяти Анастасии Заворотнюк",
        category: "Сериалы",
        comments: 7,
        image:
          "https://avatars.mds.yandex.net/get-kinopoisk-post-thumb/5410517/01e2ea2b102e935a3a58e28d61af2852/140x82",
      },
      {
        title:
          "Пятый год подряд в Каннах побеждает фильм студии Neon. В чем секрет компании-дистрибьютора, продвигающей «Титан» и «Паразитов»?",
        category: "Канны-2024",
        image:
          "https://avatars.mds.yandex.net/get-kinopoisk-post-thumb/1101343/7634dfb3bfab80c4a5f0e3039b0ee058/140x82",
      },
      {
        title: "Винни Пух: Кровь и мёд 2» — возвращение злого ми-ми-мишки",
        category: "В фокусе",
        image:
          "https://avatars.mds.yandex.net/get-kinopoisk-post-thumb/1540726/bdc73fadef9a5dff21d67d6bbab7924c/140x82",
      },
      {
        title:
          "Меньше сна и больше дела: один день из жизни критика, фотографа и прокатчика на Каннском кинофестивале",
        category: "Канны-2024",
        image:
          "https://avatars.mds.yandex.net/get-kinopoisk-post-thumb/879158/628fd3806626354b3fbef620207e4597/140x82",
      },
    ],
  },
  videos: [
    { image: "/path/to/video1.jpg", title: "Зачем в играх нужны боссы" },
    {
      image: "/path/to/video2.jpg",
      title: "Как мы могли потерять «Безумного Макса»",
    },
    { image: "/path/to/video3.jpg", title: "Один день с Тихоном Жизневским" },
    {
      image: "/path/to/video4.jpg",
      title: "От Кормана до «Комнаты». Как снять и полюбить плохое кино",
    },
    {
      image: "/path/to/video5.jpg",
      title:
        "Как Counter-Strike покорила мир и до сих пор остается лучшей игрой",
    },
  ],
};

export const NewsMobile = () => {
  const [mainTab, setMainTab] = useState(true);

  return (
    <div className="block md:hidden w-full mt-[30px] mb-[40px]">
      <div className="tabs flex text-[20px] font-bold text-[#1f1f1f] gap-4 mb-4">
        <span
          className={`cursor-pointer ${mainTab ? "text-[#1f1f1f]" : "text-[rgba(31,31,31,.4)]"}`}
          onClick={() => setMainTab(true)}
        >
          Главное сегодня
        </span>
        <span
          className={`cursor-pointer ${mainTab ? "text-[rgba(31,31,31,.4)]" : "text-[#1f1f1f]"}`}
          onClick={() => setMainTab(false)}
        >
          Популярное
        </span>
      </div>

      {mainTab ? (
        <div className="central main flex-col">
          <div className="w-full h-[194px] overflow-hidden">
            <img
              src="https://avatars.mds.yandex.net/get-kinopoisk-post-thumb/5410517/f9431c1877800ca72ed566f8dd6d9202/460x270"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex items-center my-3">
            <h2 className="text-[18px] font-bold">
              Что смотреть дома: «Золото Рейна», «Манкизмэн», «Меч короля» и
              финал Лиги чемпионов
            </h2>
          </div>

          {data.main.articles.map((article, index) => (
            <div
              className="news-item flex gap-4 items-center py-6 border-top-bottom cursor-pointer"
              key={index}
            >
              <div className="min-w-[102px] w-[102px] h-[60px] overflow-hidden">
                <img
                  src={article.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="">
                <div className="text-[15px] font-bold hover:text-[#f50]">
                  {article.title}
                </div>
                <div className="text-[13px] text-[rgba(0,0,0,.6)] hover:text-[#f50]">
                  {article.category}
                </div>
              </div>
            </div>
          ))}

          <Button variant="gray" size="full" className="mt-6">
            <div className="pl-[4px] text-[15px] font-bold">
              Больше материалов
            </div>
          </Button>
        </div>
      ) : (
        <div className="central popular flex-col">
          <div className="w-full h-[194px] overflow-hidden">
            <img
              src="https://avatars.mds.yandex.net/get-kinopoisk-post-thumb/1101343/d1f62217c6f7ff232fcbca41fd5f6b82/460x270"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex items-center my-3">
            <h2 className="text-[18px] font-bold">
              Майор Гром: Игра уже в кино! Считаем цифры: сколько заработал
              фильм и сколько зрителей его ждали
            </h2>
          </div>

          {data.popular.articles.map((article, index) => (
            <div
              className="news-item flex gap-4 items-center py-6 border-top-bottom cursor-pointer"
              key={index}
            >
              <div className="min-w-[102px] w-[102px] h-[60px] overflow-hidden">
                <img
                  src={article.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="">
                <div className="text-[15px] font-bold hover:text-[#f50]">
                  {article.title}
                </div>
                <div className="text-[13px] text-[rgba(0,0,0,.6)] hover:text-[#f50]">
                  {article.category}
                </div>
              </div>
            </div>
          ))}

          <Button variant="gray" size="full" className="mt-6">
            <div className="pl-[4px] text-[15px] font-bold">
              Больше материалов
            </div>
          </Button>
        </div>
      )}
    </div>
  );
};
