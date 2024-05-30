import { ReactNode } from "react";
import { Header } from "@/components/Header.tsx";
import { HeaderMobile } from "@/components/HeaderMobile.tsx";
import { Footer } from "@/components/Footer.tsx";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="lg:hidden">
        <HeaderMobile />
      </div>
      <div className="hidden lg:block">
        <Header />
      </div>

      {children}
      <div className="container">
        <Footer />
      </div>
    </div>
  );
};
