"use client"

import  Link  from "next/link"
import Image from "next/image"
import "./Navbar.css"
import { useState } from "react"


function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    

    

    return(
        <nav className="navbar">
            <div className="navbar-inner">
            
                <Image 
                src="/davittoriologo_transparent.png" 
                alt="Da Vittorio logo" 
                className="logo" 
                width={600} 
                height={252} 
                priority
                />
            
            <button 
            className="hamburger"
            onClick={() => setIsOpen(!isOpen)}
            >
                ☰
            </button>
            
            <ul className={`nav-right ${isOpen ? "open" : ""}`}>
                <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                <li><Link href="/chisiamo" onClick={() => setIsOpen(false)}>Chi siamo</Link></li>
                <li><Link href="/menu" onClick={() => setIsOpen(false)}>Menù</Link></li>
                <li><Link href="/contatti" onClick={() => setIsOpen(false)}>Contatti</Link></li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar