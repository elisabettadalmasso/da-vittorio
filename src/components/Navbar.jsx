import { Link } from "react-router-dom"
import "./Navbar.css"
function Navbar() {
    return(
        <nav className="navbar">
            <div className="nav-left">
                <img src="./davittoriologo_transparent.png" alt="logo" className="logo"/>
            </div>
            
            <ul className="nav-right">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/chisiamo">Chi siamo</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/contatti">Contatti</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar