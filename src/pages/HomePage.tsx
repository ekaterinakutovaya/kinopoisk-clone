import { Sidebar } from "@/components/Sidebar.tsx";
import { PromoBlock } from "@/features/PromoBlock.tsx";
import { Festivals } from "@/features/Festivals.tsx";
// import { Recommends } from "@/features/Recommends.tsx";
import { YandexPlusPromo } from "@/features/YandexPlusPromo.tsx";

export const HomePage = () => {
  return (
    <div className="container min-h-desktop-body-min-height mt-header-height bg-white flex ">
      <div className="hidden lg:block w-[250px]">
        <Sidebar />
      </div>

      <div className="border-left"></div>

      <div className="max-w-full flex-1 px-[16px] lg:px-[50px] pt-[20px] lg:pt-0 mt-header-height lg:mt-[calc(30px+var(--header-height))]">
        <PromoBlock />
        <Festivals />
        {/*<Recommends />*/}
        <YandexPlusPromo />
      </div>
    </div>
  );
};
