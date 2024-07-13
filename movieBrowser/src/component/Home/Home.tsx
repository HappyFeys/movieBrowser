import React from 'react';
import Header from '../Header/Header';
import NavBar from '../Navigation/NavBar';
import useMoviesAPI from '../Hook/useMoviesAPI';
import BtnPlayer from '../Button/BtnPlayer';
import NavBtn from '../Button/NavBtn';
import { Link } from 'react-router-dom';

function Home() {

    const {topRated, loading, error} = useMoviesAPI('https://api.themoviedb.org/3/movie/top_rated');
    const {trending} = useMoviesAPI('https://api.themoviedb.org/3/trending/movie/week');

    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error</p>;

    const baseUrl = 'https://image.tmdb.org/t/p/'
    const size = 'w500'

    return (
        <div className='mb-32'>
            <Header />
            <div className='flex flex-col items-center w-full mt-4 relative p-4'>
            <Link to={`/details/${topRated[0].id}`}><img src={baseUrl + size + topRated[0].poster_path} alt={topRated[0].title} className='rounded-lg' /></Link>
                <div className='absolute bottom-4 left-4 m-2 flex items-center bg-gray-200 bg-opacity-70 rounded-lg backdrop-blur-2 lg:bottom-8 lg:left-1/2 lg:transform lg:-translate-x-1/2'>
                <Link to={`/details/${topRated[0].id}`}><BtnPlayer/></Link>
                    <div className='p-2'>
                        <p>Movie Spotlight</p>
                        <h3>{topRated[0].title}</h3>
                    </div>
                </div>
            </div>
            <div className='max-w-screen-lg mx-auto'>
                <h2 className='m-4 text-2xl'>Trending</h2>
                <div className='flex snap-x overflow-x-auto no-scrollbar'>
                    {trending.map(movie => (
                        <div className='w-64 h-auto relative m-4 snap-center flex-shrink-0'>
                        <Link to={`/details/${movie.id}`}><div key={movie.id}>
                            <img src={baseUrl + size + movie.poster_path} alt={movie.title} className='rounded-lg'/>
                            <div className='absolute top-2 right-2 bg-gray-200 bg-opacity-70 rounded-lg backdrop-blur-2 p-1'>
                                <p>IMDb</p>
                                <span className='material-symbols-outlined text-yellow-400'>star</span> <span>{movie.vote_average}</span>
                            </div>
                            <p className='absolute bottom-2 left-[50%] translate-x-[-50%] text-center w-56 bg-gray-200 bg-opacity-70 rounded-lg backdrop-blur-2 p-5'>{movie.title}</p>
                        </div></Link>
                        </div>
                    ))}
                </div>
            </div>

            <NavBar />
        </div>
    );
}

export default Home;