import { MdHomeFilled } from "react-icons/md";
import { IoPlaySharp } from "react-icons/io5";
import poster001 from "../public/images/poster001.webp";

export const mainNavigation = [
  {
    to: "/",
    title: "Главная",
    isActive: true,
    icon: <MdHomeFilled className="w-[24px] h-[24px]" />,
  },
  {
    to: "/online-cinema",
    title: "Онлайн-кинотеатр",
    isActive: false,
    icon: <IoPlaySharp className="w-[24px] h-[24px]" />,
  },
  {
    to: "/movies",
    title: "Фильмы",
    isActive: false,
    icon: <IoPlaySharp className="w-[24px] h-[24px]" />,
  },
  {
    to: "/serials",
    title: "Сериалы",
    isActive: false,
    icon: <IoPlaySharp className="w-[24px] h-[24px]" />,
  },
  {
    to: "/tv-channels",
    title: "Телеканалы",
    isActive: false,
    icon: <IoPlaySharp className="w-[24px] h-[24px]" />,
  },
  {
    to: "/sport",
    title: "Спорт",
    isActive: false,
    icon: <IoPlaySharp className="w-[24px] h-[24px]" />,
  },
  {
    to: "/tickets",
    title: "Билеты в кино",
    isActive: false,
    icon: <IoPlaySharp className="w-[24px] h-[24px]" />,
  },
  {
    to: "/media",
    title: "Медиа",
    isActive: false,
    icon: <IoPlaySharp className="w-[24px] h-[24px]" />,
  },
];

export const tempTop10 = [
  {
    id: 1,
    title: "Беспринципные",
    subtitle: "сериал",
    year: "2020 - ...",
    rate: 7.7,
    isSuggest: true,
    poster: poster001,
  },
  {
    id: 2,
    title: "Беспринципные",
    subtitle: "сериал",
    year: "2020 - ...",
    rate: 7.7,
    isSuggest: true,
    poster: poster001,
  },
  {
    id: 3,
    title: "Беспринципные",
    subtitle: "сериал",
    year: "2020 - ...",
    rate: 7.7,
    isSuggest: true,
    poster: poster001,
  },
  {
    id: 4,
    title: "Беспринципные",
    subtitle: "сериал",
    year: "2020 - ...",
    rate: 7.7,
    isSuggest: true,
    poster: poster001,
  },
  {
    id: 5,
    title: "Беспринципные",
    subtitle: "сериал",
    year: "2020 - ...",
    rate: 7.7,
    isSuggest: true,
    poster: poster001,
  },
  {
    id: 6,
    title: "Беспринципные",
    subtitle: "сериал",
    year: "2020 - ...",
    rate: 7.7,
    isSuggest: true,
    poster: poster001,
  },
  {
    id: 7,
    title: "Беспринципные",
    subtitle: "сериал",
    year: "2020 - ...",
    rate: 7.7,
    isSuggest: true,
    poster: poster001,
  },
  {
    id: 8,
    title: "Беспринципные",
    subtitle: "сериал",
    year: "2020 - ...",
    rate: 7.7,
    isSuggest: true,
    poster: poster001,
  },
];
