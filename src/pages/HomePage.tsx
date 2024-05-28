import { Sidebar } from "@/components/Sidebar.tsx";
import { PromoBlock } from "@/components/PromoBlock.tsx";

export const HomePage = () => {
  return (
    <div className="container min-h-desktop-body-min-height h-desktop-body-height mt-header-height bg-white flex ">
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      <div className="hidden lg:block w-full mt-[30px] px-[50px] ">
        <PromoBlock />
      </div>
    </div>
  );
};
