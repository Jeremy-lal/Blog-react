import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthProvider'
import AuthService from '../services/auth.service'

function NavBar() {
    const { auth, setAuth } = React.useContext(AuthContext) as any

    const navigate = useNavigate()

    const logout = async () => {
        try {
            const response = await AuthService.logout(auth.accessToken)
            setAuth({});
            navigate('/articles');
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <nav>
            <i className="fa-brands fa-neos"></i>
            <div>
                <NavLink to="/articles">Articles</NavLink>
                {
                    auth.accessToken &&
                    <NavLink to="/profil">Profil</NavLink>
                }
                {
                    auth.role === 'admin' &&
                    <NavLink to="/admin">Admin</NavLink>
                }
                {
                    auth.username
                        ? <i className="fa-solid fa-power-off" onClick={logout} title="Logout"></i>
                        : <NavLink to="/login">Login</NavLink>
                }
            </div>
        </nav>
    )
}

export default NavBar