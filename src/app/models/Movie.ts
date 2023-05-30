export interface Movie {
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  backdrop_path: string;
  vote_count: string;
}
export interface MovieDetails extends Movie {
  genres: [
    {
      name: string;
      id: number;
    }
  ];
  production_companies: [
    {
      name: string;
    }
  ];
  spoken_languages: [
    {
      name: string;
    }
  ];
}
