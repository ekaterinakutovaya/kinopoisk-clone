import { Sidebar } from "@/components/Sidebar.tsx";
import { PromoBlock } from "@/features/PromoBlock.tsx";
import { Festivals } from "@/features/Festivals.tsx";
import { Recommends } from "@/features/Recommends.tsx";

export const HomePage = () => {
  return (
    <div className="container min-h-desktop-body-min-height mt-header-height bg-white flex  ">
      <div className="hidden lg:block w-[250px]">
        <Sidebar />
      </div>

      <div className="max-w-full flex-1 mt-[30px] px-[16px] lg:px-[50px]">
        <PromoBlock />
        <Festivals />
        <Recommends />
        <div className="h-[3000px]">temp</div>
      </div>
    </div>
  );
};
