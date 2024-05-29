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

export interface Movie {
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

interface ExternalId {
  kpHD: string;
}

interface Name {
  name: string;
  language: string | null;
  type: string;
}

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

interface Person {
  id: number;
  photo: string;
  name: string;
  enName: string;
  description: string | null;
  profession: string;
  enProfession: string;
}

interface Audience {
  count: number;
  country: string;
}

interface WatchabilityItem {
  name: string;
  logo: {
    url: string;
  };
  url: string;
}

interface Watchability {
  items: WatchabilityItem[];
}

export interface MovieDetails {
  id: number;
  externalId: ExternalId;
  name: string;
  alternativeName: string;
  enName: string | null;
  names: Name[];
  type: string;
  typeNumber: number;
  year: number;
  description: string;
  shortDescription: string;
  slogan: string;
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
  persons: Person[];
  premiere: {
    country: string | null;
    digital: string | null;
    cinema: string | null;
    bluray: string | null;
    dvd: string | null;
  };
  top10: number | null;
  top250: number | null;
  isSeries: boolean;
  audience: Audience[];
  ticketsOnSale: boolean;
  lists: string[];
  networks: string | null;
  createdAt: string;
  updatedAt: string;
  watchability: Watchability;
}
