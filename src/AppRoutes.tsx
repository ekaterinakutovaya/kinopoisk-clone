import { Route, Routes } from "react-router-dom";
import { Layout } from "@/layouts/layout.tsx";
import { HomePage } from "@/pages/HomePage.tsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
