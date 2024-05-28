import { mainNavigation } from "@/constants.tsx";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export const Sidebar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <aside
      className={`fixed min-w-[250px] w-[250px] sidebar-border pt-[27px] pb-[25px] transition-top duration-300 ${scrolled ? "top-[72px] h-[calc(100vh-72px)]" : "h-desktop-body-height"}`}
    >
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
