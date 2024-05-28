import { Input } from "@/components/ui/input.tsx";
import { IoSearch } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";

export const SearchInput = () => {
  return (
    <div className="w-full h-[34px] max-w-[380px] relative">
      <Input placeholder="Фильмы, сериалы, персоны" className="w-full" />
      <div className="absolute inset-y-0 right-[10px] flex items-center gap-2">
        <VscSettings className="w-[20px] h-[20px] text-[#c1bab8]" />
        <IoSearch className="w-[20px] h-[20px] text-[#c1bab8]" />
      </div>
    </div>
  );
};
