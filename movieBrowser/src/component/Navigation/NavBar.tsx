import NavBtn from "../Button/NavBtn";
import {Link} from "react-router-dom";

function NavBar() {
    
    return(
        <>
            <nav className="fixed bottom-0 left-0 right-0 flex justify-between px-6 py-4 bg-custom-dark backdrop-blur-2 w-10/12 mx-auto">
                <Link to="/"><NavBtn iconIdendifier="home" /></Link>
                <Link to="/discover"><NavBtn iconIdendifier="search" /></Link>
                <Link to="/"><NavBtn iconIdendifier="person" /></Link>
            </nav>
        </>
    )
}

export default NavBar