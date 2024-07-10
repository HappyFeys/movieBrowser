import { useState, useEffect } from "react";
import { Movie, ApiResponseMovie, Categorie, Genre } from "../types/types";

export default function useMoviesAPI(URL : string) {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [categorie, setCategorie] = useState<Genre[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
              const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
              const response = await fetch(
                URL,
                {
                  headers: {
                    Authorization: `Bearer ${API_KEY}`,
                    'Content-Type': 'application/json',
                  },
                }
              );
              if (!response.ok) {
                throw new Error('Failed to fetch movies');
              }
              let data : ApiResponseMovie | Categorie;
              if (URL==="https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1") {
                data = await response.json() as ApiResponseMovie;
                setMovies(data.results);
              } else {
                data = await response.json() as Categorie;
                setCategorie(data.genres);
              }
              setLoading(false);
            } catch (error : any) {
              setError(error.message);
              setLoading(false);
            }
          };
      
          fetchData();
        }, []);

    return { movies, loading, error, categorie };

}