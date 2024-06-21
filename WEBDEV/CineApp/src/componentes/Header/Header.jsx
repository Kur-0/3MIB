import Buttons from "../Buttons/Buttons";
import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <header className="flex p-4 text-black font-medium justify-around">
            <img src="/AniMex.png" alt="logo"/>
            <Navbar></Navbar>
            <div className="btt flex "><Buttons/></div>           
        </header>
     );
}

export default Header;