import { useEffect, useState } from "react"
import useMoviesAPI from "./useMoviesAPI"

function CategorieList(){

    const {movies, error, loading} = useMoviesAPI('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1')
    const {categorie} = useMoviesAPI('https://api.themoviedb.org/3/genre/movie/list?language=en')
    const [categories, setCategories] = useState<{id: number, name: string}[]>([]);


    useEffect(() => {
        if (movies && categorie) {
            const tempIds = new Set<number>();
    
            movies.forEach(movie => {
                movie.genre_ids.forEach(id => {
                    tempIds.add(id);
                });
            });
    
            const tempCategories = Array.from(tempIds).map(id => {
                const genre = categorie.find(genre => genre.id === id);
                return genre ? { id: genre.id, name: genre.name } : null;
            }).filter(category => category !== null);
    
            setCategories(tempCategories as { id: number, name: string }[]);
        } else {
            console.log("il n'y a pas de films ou de catégories");
        }
    }, [movies, categorie]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;return (
        <div className="w-full overflow-x-hidden">
            <ul className="flex">
                {categories.map(categorie => (
                    <li className="p-3" key={categorie.id}>{categorie.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default CategorieList