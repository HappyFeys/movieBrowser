import React from 'react';
import  NavBtn from '../Button/NavBtn';
function BtnPlayer() {
    return (
        <div className='rounded-full bg-custom-gradient flex justify-center items-center p-2 m-2'>
            <NavBtn iconIdendifier="play_arrow" />
        </div>
    );
}

export default BtnPlayer;