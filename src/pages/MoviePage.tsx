import { MovieDescMobile } from "@/features/MovieDescMobile.tsx";
import { MovieDesc } from "@/features/MovieDesc.tsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Loader } from "@/components/Loader.tsx";
import { MovieDetails } from "@/types.ts";
import { MovieRaitingsBlock } from "@/features/MovieRaitingsBlock.tsx";

const MoviePage = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const [results, setResults] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/v1.4/movie/${id}`,
          {
            headers: {
              "X-API-KEY": import.meta.env.VITE_X_API_KEY,
            },
          },
        );
        setResults(response.data);
      } catch (error) {
        console.error("There was an error fetching the data!", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  return (
    <div className="w-full min-h-desktop-body-min-height lg:mt-[150px]">
      <div className="container flex-1 px-[16px] lg:px-[10px] bg-white">
        {loading ? (
          <div className="w-full flex flex-col justify-center items-center text-center gap-[30px] py-[20px]">
            <Loader />
          </div>
        ) : (
          results && (
            <>
              <MovieDesc data={results} />
              <MovieDescMobile data={results} />
              <MovieRaitingsBlock data={results} />
            </>
          )
        )}
      </div>
    </div>
  );
};

export default MoviePage;
