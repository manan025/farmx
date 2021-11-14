import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../static/logo.png'
import './Navbar.css'
const Navbar = () => {
    return (
        <>
            <nav>
                <div className="head"><Link to="/"><img src={Logo} alt="logo" className="logo"/></Link></div>
                <ul className="nav-links">
                    <li className="active"><Link to="/" className="active">Home</Link></li>
                    <li><a href="https://core-dev.notion.site/FarmX-Farm-Surveillance-Drone-e50ce99298ea4516937ff316a09f3b2c" className="non-active">About</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
