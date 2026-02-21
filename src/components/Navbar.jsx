import { Link } from "react-router-dom"
function Navbar() {
    return(
        <nav className="navbar">
            <div className="nav-left">
                <img src="./davittoriologo_transparent.png" alt="logo" className="logo"/>
            </div>
            
            <ul className="nav-right">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Menu</Link></li>
                <li><Link to="/">Contatti</Link></li>
                <li><Link to="/">Dove Trovarci</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar