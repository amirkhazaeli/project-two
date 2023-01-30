import { AiFillHome } from "react-icons/ai";
import { BsFillBagDashFill } from "react-icons/bs";
import './header.css'
function Header() {
    return ( 
        <>
        <div className="header">
            <span><AiFillHome /></span>
            <span><BsFillBagDashFill /></span>
        </div>
        </>
     );
}

export default Header;