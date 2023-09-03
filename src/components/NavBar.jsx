import { Link } from "react-router-dom";
import Logo from "./Logo"
import './NavBar.css'

function NavBar() {
    return (
        <div className="navbar">
            <Logo/>
            <div className="nav">
                <Link to="/discover">Discover More</Link>
            </div>
        </div>
    )
}

export default NavBar
