import logo from "../../public/images/logo.png";
import { Link } from "react-router-dom";
import { IoPlaySharp } from "react-icons/io5";
import { PiTelevisionFill } from "react-icons/pi";
import { SearchInput } from "@/components/SearchInput.tsx";
import { IoBookmarkSharp } from "react-icons/io5";
import { Button } from "@/components/ui/button.tsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaUser } from "react-icons/fa6";

export const Header = () => {
  return (
    <header className="w-full h-header-height bg-header-image bg-cover bg-center">
      <div className="container h-full flex flex-col justify-end">
        <div className="text-white px-[50px] h-[72px] grid grid-cols-[auto_1fr_auto] gap-x-[24px]">
          <Link to="/" className="max-w-[164px] overflow-hidden">
            <img src={logo} alt="" className="h-full w-full object-contain" />
          </Link>

          <div className="flex items-center gap-x-[20px]">
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
              Онлайн-кинотеатр
            </Link>

            <SearchInput />
          </div>

          <div className="flex items-center gap-x-[20px]">
            <div className="text-white opacity-60 hover:opacity-100 transition-all duration-300">
              <IoBookmarkSharp className="w-[24px] h-[24px]" />
            </div>

            <Button className="max-w-[121px] max-h-[40px] text-[11px] font-[600]">
              Смотреть кино бесплатно
            </Button>

            <Avatar>
              <AvatarImage src="" alt="@shadcn" />
              <AvatarFallback>
                <FaUser className="w-[20px] h-[20px] text-[#acadae]" />
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
};
