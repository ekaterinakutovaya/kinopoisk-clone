import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { useEffect, useState } from "react";
import { mainNavigation } from "@/constants.tsx";
import { Link, NavLink } from "react-router-dom";
import logo from "../../public/images/logo.png";
import { IoPlaySharp, IoSearch } from "react-icons/io5";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.tsx";
import { FaUser } from "react-icons/fa6";
import { SearchMobile } from "@/components/SearchMobile.tsx";
import { PiTelevisionFill } from "react-icons/pi";

export const HeaderMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen || searchOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [menuOpen, searchOpen]);

  return (
    <header className="bg-[#141414]  w-full">
      <div className="h-header-height flex items-center gap-x-4 px-[16px] fixed top-0 z-10 bg-[#141414]  w-full">
        <Button
          variant="ghost"
          size="icon"
          className="w-auto h-auto text-white opacity-60"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </Button>

        <div className="w-full flex items-center justify-between">
          <Link to="/" className="block max-w-[135px] h-[30px] overflow-hidden">
            <img src={logo} alt="" className="h-full w-full object-contain" />
          </Link>

          <div className="flex items-center gap-x-3">
            <Button
              variant="ghost"
              size="icon"
              className="w-auto h-auto text-white opacity-60"
              onClick={() => setSearchOpen(true)}
            >
              <IoSearch className="w-[24px] h-[24px]" />
            </Button>

            <Avatar className="w-[32px] h-[32px]">
              <AvatarImage src="" alt="avatar" />
              <AvatarFallback>
                <FaUser className="w-[14px] h-[14px] text-[#acadae]" />
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        {searchOpen && <SearchMobile setSearchOpen={setSearchOpen} />}

        <nav
          className={`fixed z-10 w-full h-0 bg-[#141414] overflow-hidden border-t shadow-inset-custom top-[52px] left-0 right-0 flex flex-col gap-6  transition-all duration-300 ${menuOpen ? "nav-is-open" : ""}`}
        >
          {mainNavigation.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold text-[18px] leading-[24px] flex items-center gap-x-[7px] relative active-nav-link"
                  : "text-white opacity-60 font-medium text-[18px] leading-[24px] flex items-center gap-x-[7px] relative"
              }
            >
              {item.icon}
              {item.title}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="w-full h-header-height mt-[52px] border-t shadow-inset-custom px-[24px] flex items-center gap-[16px] overflow-x-auto no-scrollbar">
        <Button className="h-[32px] text-[11px] font-bold whitespace-nowrap">
          Смотреть кино бесплатно
        </Button>

        <Link
          to="#"
          className="flex items-center gap-1 text-[15px] text-white font-semibold opacity-60 hover:opacity-100 transition-all duration-300 whitespace-nowrap"
        >
          <IoPlaySharp className="w-[24px] h-[24px]" />
          Онлайн-кинотеатр
        </Link>
        <Link
          to="#"
          className="flex items-center gap-1 text-[15px] text-white font-semibold opacity-60 hover:opacity-100 transition-all duration-300 whitespace-nowrap"
        >
          <PiTelevisionFill className="w-[24px] h-[24px]" />
          Установить на ТВ
        </Link>
      </div>
    </header>
  );
};
