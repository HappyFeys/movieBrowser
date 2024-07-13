import  NavBtn from '../Button/NavBtn';
function BtnPlayerDetails() {
    return (
        <div className='rounded-full bg-gray-200 bg-opacity-70 backdrop-blur-2 flex justify-center items-center p-2 m-2 w-fit absolute top-60 left-1/2 transform -translate-x-1/2 cursor-pointer'>
            <NavBtn iconIdendifier="play_arrow" />
        </div>
    );
}

export default BtnPlayerDetails;