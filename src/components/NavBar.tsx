import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <nav>
            <i className="fa-brands fa-neos"></i>
            <div>
                <NavLink to="/articles">Articles</NavLink>
                <NavLink to="/profil">Profil</NavLink>
                <NavLink to="/admin">Admin</NavLink>
                <NavLink to="/login">Login</NavLink>
            </div>
        </nav>
    )
}

export default NavBar