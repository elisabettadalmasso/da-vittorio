function Navbar() {
    return(
        <nav className="navbar">
            <div className="nav-left">
                <img src="./davittoriologo_transparent.png" alt="logo" className="logo"/>
            </div>
            
            <ul className="nav-right">
                <li><a href="#">Home</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Contatti</a></li>
                <li><a href="#">Dove Trovarci</a></li>
            </ul>
        </nav>
    )
}

export default Navbar