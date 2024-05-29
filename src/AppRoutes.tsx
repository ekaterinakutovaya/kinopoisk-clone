import { Route, Routes } from "react-router-dom";
import { Layout } from "@/layouts/layout.tsx";
import { HomePage } from "@/pages/HomePage.tsx";
import MoviePage from "@/pages/MoviePage.tsx";

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
      <Route
        path="/movie/:id"
        element={
          <Layout>
            <MoviePage />
          </Layout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
