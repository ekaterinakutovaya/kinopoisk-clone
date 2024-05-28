import { MdHomeFilled } from "react-icons/md";
import { IoPlaySharp } from "react-icons/io5";
import poster001 from "../public/images/poster001.webp";
import festival001 from "../public/images/festival001.webp";
import festival002 from "../public/images/festival002.webp";
import festival003 from "../public/images/festival003.webp";
import festival004 from "../public/images/festival004.webp";
import festival005 from "../public/images/festival005.webp";

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

export const festivals = [
  {
    id: 1,
    img: festival001,
  },
  {
    id: 2,
    img: festival002,
  },
  {
    id: 3,
    img: festival003,
  },
  {
    id: 4,
    img: festival004,
  },
  {
    id: 5,
    img: festival005,
  },
];
