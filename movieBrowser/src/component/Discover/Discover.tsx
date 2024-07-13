import React from 'react';
import Form from './Form';
import CategorieList from './CategorieList';
import MainMovie from './MainMovie';
import Header from '../Header/Header';
import NavBar from '../Navigation/NavBar';

function Discover() {

    return (
        <div className='w-full'>
            <Header />
            <Form />
            <CategorieList />
            <MainMovie />
            <NavBar /> 
        </div>
    );
}

export default Discover;