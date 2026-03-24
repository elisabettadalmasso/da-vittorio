import { Link } from "react-router-dom"
import "./Navbar.css"
import { useState } from "react"


function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    return(
        <nav className="navbar">
            <div className="nav-left">
                <img src="./davittoriologo_transparent.png" alt="logo" className="logo" width="600" height="252"/>
            </div>
            <button 
            className="hamburger"
            onClick={() => setIsOpen(!isOpen)}
            >
                ☰
            </button>
            
            <ul className={`nav-right ${isOpen ? "open" : ""}`}>
                <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                <li><Link to="/chisiamo" onClick={() => setIsOpen(false)}>Chi siamo</Link></li>
                <li><Link to="/menu" onClick={() => setIsOpen(false)}>Menù</Link></li>
                <li><Link to="/contatti" onClick={() => setIsOpen(false)}>Contatti</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar