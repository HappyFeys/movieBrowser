import React from 'react';
import { useParams } from 'react-router-dom';
import useMoviesAPI from '../Hook/useMoviesAPI';
import {Genre, Movie} from "../../types/types";
import BtnPlayerDetails from '../Button/BtnPlayDetails';
import {Link} from "react-router-dom";

function Details( ) {

    const { id } = useParams();
    const {details, loading, error} = useMoviesAPI(`https://api.themoviedb.org/3/movie/${id}`)
    const {similar} = useMoviesAPI(`https://api.themoviedb.org/3/movie/${id}/similar`)
    
    
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error</p>

    const baseUrl = 'https://image.tmdb.org/t/p/'
    const size = 'w500'


    function handlePrevious() {
        window.history.back();
    }

    return (
        <div className='relative flex flex-col items-center'>
            <span className='material-symbols-outlined text-white fixed top-4 left-4 cursor-pointer' onClick={handlePrevious}>arrow_back_ios</span>
            <img src={baseUrl + size + details.poster_path} alt={details.title} className="rounded w-full md:w-1/3"/>
            <BtnPlayerDetails />
            <div className='flex justify-between w-11/12 mt-4'><h1 className='text-3xl font-bold'>{details.title}</h1><span className=' bg-black bg-opacity-50 text-white rounded-lg px-4 py-2 border border-gray-700'>4K</span></div>
            <div className='flex justify-start w-11/12 text-gray-400'>
                <p><span className="material-symbols-outlined">schedule</span>{details.runtime}min</p>
                <p><span className='material-symbols-outlined ml-4'>star</span>{details.vote_average} (IMDb)</p>
            </div>
            <hr className='w-11/12 bg-gray-400 my-4'/>
            <div className='flex justify-start w-11/12'>
                <div className='w-1/3'>
                    <h3 className='font-bold text-lg'>Release date</h3>
                    <p>{details.release_date}</p>
                </div>
                <div className='w-2/3 ml-4'>
                    <h3 className='font-bold text-lg'>Genre</h3>
                    <div className='flex flex-wrap'>
                        {details.genres.map((genre: Genre) => (<p key={genre.id} className='bg-black bg-opacity-50 text-white rounded-full px-2 py-1 m-1 border border-gray-700 text-xs'>{genre.name}</p>))}
                    </div>
                </div>
            </div>
            <hr className='w-11/12 bg-gray-400 my-4'/>
            <div className='w-11/12 '>
                <h3 className='font-bold text-lg'>Synopsis</h3>
                <p className='text-gray-400 my-2'>{details.overview}</p>
            </div>
            <div className='w-11/12 '>
                <h3 className='font-bold text-lg'>Related Movies</h3>
                <div  className="w-full flex flex-wrap gap-4 justify-center mt-4">
                    {similar.map((movie: Movie) => (
                        <div className="w-2/5 md:w-1/3 lg:w-1/5">
                        <Link to={`/details/${movie.id}`}>
                            <img src={baseUrl + size + movie.poster_path} alt={movie.title}  className='rounded w-full'/>
                            <p key={movie.id}>{movie.title}  ({movie.release_date.substring(0, 4)})</p>
                        </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Details;