interface Rating {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number | null;
}

interface Votes {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

interface Poster {
  url: string;
  previewUrl: string;
}

interface Backdrop {
  url: string;
  previewUrl: string;
}

interface Genre {
  name: string;
}

interface Country {
  name: string;
}

interface Movie {
  id: number;
  name: string;
  alternativeName: string;
  enName: string | null;
  type: string;
  typeNumber: number;
  year: number;
  description: string;
  shortDescription: string;
  status: string | null;
  rating: Rating;
  votes: Votes;
  movieLength: number;
  totalSeriesLength: number | null;
  seriesLength: number | null;
  ratingMpaa: string | null;
  ageRating: number;
  poster: Poster;
  backdrop: Backdrop;
  genres: Genre[];
  countries: Country[];
  top10: number | null;
  top250: number | null;
  isSeries: boolean;
  ticketsOnSale: boolean;
}
