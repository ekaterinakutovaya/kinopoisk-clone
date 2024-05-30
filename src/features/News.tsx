import { Button } from "@/components/ui/button.tsx";

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
    {
      image:
        "https://avatars.mds.yandex.net/get-kinopoisk-post-thumb/1347825/733222be8d5e62fe3daafa877fa735e7/200x120",
      title: "Зачем в играх нужны боссы",
    },
    {
      image:
        "https://avatars.mds.yandex.net/get-kinopoisk-post-thumb/879158/dfef0ae4b23c457ad2495497aa94b32f/200x120",
      title: "Как мы могли потерять «Безумного Макса»",
    },
    {
      image:
        "https://avatars.mds.yandex.net/get-kinopoisk-post-thumb/1101343/1fa9fcb7664b9cf02d04fc4745d362b4/200x120",
      title: "Один день с Тихоном Жизневским",
    },
    {
      image:
        "https://avatars.mds.yandex.net/get-kinopoisk-post-thumb/1532671/d4842ec2efefc919690255ceaed59815/200x120",
      title: "От Кормана до «Комнаты». Как снять и полюбить плохое кино",
    },
    {
      image:
        "https://avatars.mds.yandex.net/get-kinopoisk-post-thumb/1101343/99243365d2f27fad1b665ff45ccaee1d/200x120",
      title:
        "Как Counter-Strike покорила мир и до сих пор остается лучшей игрой",
    },
  ],
};

export const News = () => {
  return (
    <div className="hidden md:block w-full mt-[30px] mb-[40px]">
      <div className="inner w-full flex items-start gap-8">
        <div className="left w-[200px] max-w-[200px]">
          <h2 className="text-[18px] font-bold mb-6">Популярное</h2>

          <div className="flex flex-col gap-4">
            <div className="w-full cursor-pointer">
              <div className="w-full h-[120px] overflow-hidden mb-2">
                <img
                  className="w-full h-full object-cover"
                  src="https://avatars.mds.yandex.net/get-kinopoisk-post-thumb/1101343/d1f62217c6f7ff232fcbca41fd5f6b82/460x270"
                  alt=""
                />
              </div>
              <div className="font-bold text-[13px] hover:text-[#f50]">
                1. Майор Гром: Игра уже в кино! Считаем цифры: сколько заработал
                фильм и сколько зрителей его ждали
              </div>
            </div>

            {data.popular.articles.map((article, index) => (
              <div className="w-full cursor-pointer" key={index}>
                <div className="text-[13px] hover:text-[#f50]">
                  {index + 2}. {article.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="central flex-1">
          <h2 className="text-[18px] font-bold mb-6">Главное сегодня</h2>

          <div className="w-full">
            <div className="w-full h-[270px] overflow-hidden mb-4">
              <img
                src="https://avatars.mds.yandex.net/get-kinopoisk-post-thumb/5410517/f9431c1877800ca72ed566f8dd6d9202/460x270"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-[24px] leading-[28px] font-bold cursor-pointer hover:text-[#f50] mb-6">
              Что смотреть дома: «Золото Рейна», «Манкизмэн», «Меч короля» и
              финал Лиги чемпионов
            </h3>

            <div className="flex flex-col">
              {data.main.articles.map((article, index) => (
                <div
                  className="news-item flex gap-4 items-center py-6 cursor-pointer border-top"
                  key={index}
                >
                  <div className="min-w-[140px] w-[140px] h-[82px] overflow-hidden">
                    <img
                      src={article.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="">
                    <div className="text-[18px] font-bold hover:text-[#f50]">
                      {article.title}
                    </div>
                    <div className="text-[13px] text-[rgba(0,0,0,.6)] hover:text-[#f50]">
                      {article.category}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button variant="gray" size="full" className="mt-6">
            <div className="pl-[4px] text-[15px] font-bold">
              Больше материалов
            </div>
          </Button>
        </div>
        <div className="right w-[200px] max-w-[200px]">
          <h2 className="text-[18px] font-bold mb-6">Новые видео</h2>

          <div className="flex flex-col gap-4">
            {data.videos.map((video, index) => (
              <div className="w-full cursor-pointer" key={index}>
                <div className="w-full h-[120px] overflow-hidden mb-2">
                  <img
                    className="w-full h-full object-cover"
                    src={video.image}
                    alt=""
                  />
                </div>
                <div className="text-[13px] hover:text-[#f50]">
                  {video.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
