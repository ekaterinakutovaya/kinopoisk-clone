import { Sidebar } from "@/components/Sidebar.tsx";
import { PromoBlock } from "@/features/PromoBlock.tsx";
import { Festivals } from "@/features/Festivals.tsx";

export const HomePage = () => {
  return (
    <div className="container min-h-desktop-body-min-height mt-header-height bg-white flex  ">
      <div className="hidden lg:block w-[250px]">
        <Sidebar />
      </div>

      <div className="border-red flex-1 mt-[30px] px-[50px]">
        {/*<div className="hidden lg:block mt-[30px] px-[50px] border-green">*/}
        <PromoBlock />
        {/*</div>*/}
        {/*<div className="hidden lg:block mt-[30px] px-[50px] border-red">*/}
        <Festivals />
        {/*</div>*/}

        <div className="h-[3000px]">temp</div>
      </div>
    </div>
  );
};
