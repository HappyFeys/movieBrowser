import useMoviesAPI from "../Hook/useMoviesAPI"
import {Link } from "react-router-dom"

function MainMovie() {
    const {movies, loading, error} = useMoviesAPI('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1')

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error</p>

    const baseUrl = 'https://image.tmdb.org/t/p/'
    const size = 'w500'

    console.log(movies);

    return(
        <div className="flex flex-wrap justify-center gap-4 w-full mt-4 ">  
            {movies.map(movie => (
                <Link to={`/details/${movie.id}`} className="w-2/5 md:w-1/3 lg:w-1/5"><div key={movie.id} className="w-full">
                    <img src={baseUrl + size + movie.poster_path} alt={movie.title} className="rounded"/>
                    <p>{movie.title} ({movie.release_date.substring(0, 4)})</p>
                </div>
                </Link>))}
        </div>
    )
}

export default MainMovie