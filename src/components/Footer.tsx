import banner from "../../public/images/amediateka-promo.png";
import { Button } from "@/components/ui/button.tsx";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="subscribe">
        <img src={banner} alt="" />

        <div className="subscribe-info">
          <div className="text-[22px] md:text-[40px] font-bold leading-[28px] md:leading-[48px] text-white">
            Смотрите сериалы в Плюсе с Амедиатекой
          </div>

          <Button className="subscribe-btn text-[18px] font-bold" size="lg">
            Оформить подписку
          </Button>
        </div>
      </div>

      <div className="social w-full flex items-center justify-center gap-6 p-[20px] my-0 mx-auto">
        <IoLogoFacebook className="w-[24px] h-[24px] text-[#666666] opacity-70 hover:opacity-100 cursor-pointer" />
        <IoLogoTwitter className="w-[24px] h-[24px] text-[#666666] opacity-70 hover:opacity-100 cursor-pointer" />
        <FaTelegramPlane className="w-[24px] h-[24px] text-[#666666] opacity-70 hover:opacity-100 cursor-pointer" />
        <FaYoutube className="w-[24px] h-[24px] text-[#666666] opacity-70 hover:opacity-100 cursor-pointer" />
      </div>

      <ul className="max-w-max footer-links mx-auto px-[40px] text-center flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-x-[27px] gap-y-[20px] md:gap-y-0">
        <li>Вакансии</li>
        <li>Реклама</li>
        <li>Соглашение</li>
        <li>Вакансии</li>
        <li>Реклама</li>
        <li>Соглашение</li>
        <li>Вакансии</li>
        <li>Реклама</li>
        <li>Соглашение</li>
        <li>Вакансии</li>
        <li>Реклама</li>
        <li>Соглашение</li>
        <li>Вакансии</li>
        <li>Реклама</li>
        <li>Соглашение</li>
        <li>Вакансии</li>
        <li>Реклама</li>
      </ul>

      <div className="footer-bottom px-[40px] py-[28px] flex flex-col md:flex-row gap-8 items-center justify-between">
        <div className="justify-self-start text-white">
          <span className="">©&nbsp;2003 — 2024,&nbsp;</span>
          <a
            className=""
            href="https://www.kinopoisk.ru/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Кинопоиск
          </a>
          <span className="ml-[8px]">18+</span>
        </div>

        <ul className="flex gap-4">
          <li className="">
            <a
              href="https://tv.yandex.ru"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              Телепрограмма
            </a>
          </li>
          <li className="">
            <a href="#" target="_blank" rel="noopener noreferrer" className="">
              Музыка
            </a>
          </li>
          <li className="">
            <a href="#" target="_blank" rel="noopener noreferrer" className="">
              Афиша
            </a>
          </li>
          <li className="">
            <a href="#" target="_blank" rel="noopener noreferrer" className="">
              Букмейт
            </a>
          </li>
        </ul>

        <div>
          <span className="cursor-pointer">Проект компании Яндекс</span>
        </div>
      </div>
    </footer>
  );
};
