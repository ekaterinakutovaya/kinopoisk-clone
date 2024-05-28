import { mainNavigation } from "@/constants.tsx";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <aside className="min-w-[250px] w-[250px] h-full sidebar-border pt-[27px] pb-[25px]">
      <nav className="flex flex-col gap-4 ml-[50px]">
        {mainNavigation.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            className={({ isActive }) =>
              isActive
                ? "text-black font-bold text-[15px] leading-[18px] flex items-center gap-x-[7px] relative active-nav-link cursor-pointer"
                : "text-[#00000099] hover:text-black transition-all duration-300 ease font-semibold text-[15px] leading-[18px] flex items-center gap-x-[7px] relative cursor-pointer"
            }
          >
            {item.icon}
            {item.title}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};
