import { MovieRaitingsBlock } from "@/features/MovieRaitingsBlock.tsx";
import { MovieDescMobile } from "@/features/MovieDescMobile.tsx";
import { MovieDesc } from "@/features/MovieDesc.tsx";

const MoviePage = () => {
  // useEffect(() => {
  //   window.scroll(0, 0);
  // }, []);

  return (
    <div className="w-full min-h-desktop-body-min-height lg:mt-[150px]">
      <div className="container flex-1 px-[16px] lg:px-[10px] bg-white">
        <MovieDesc />
        <MovieDescMobile />
        {/*<MovieRaitingsBlock />*/}

        {/*<div className="h-[3000px]"></div>*/}
      </div>
    </div>
  );
};

export default MoviePage;
