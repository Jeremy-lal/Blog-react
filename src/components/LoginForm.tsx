import React, { FormEvent, FormEventHandler, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthService from '../services/auth.service'

function LoginForm() {
    const [isLogin, setIsLogin] = useState(true)
    const [user, setUser] = useState({ username: '', password: '' })

    const navigate = useNavigate()

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        console.log(user);
        isLogin ? login() : signup()
    }

    const login = () => {
        AuthService.signin(user).then(() => {
            navigate('/profil')
        })
    }

    const signup = () => {
        AuthService.signup(user).then(() => {
            navigate('/profil')
        })
    }

    return (
        <form className='login-form' onSubmit={handleSubmit}>
            <h2>{isLogin ? 'Login' : 'Register'}</h2>
            {
                isLogin ?
                    <p onClick={() => setIsLogin(false)}>New member ? Register</p>
                    : <p onClick={() => setIsLogin(true)}>Already member ? Login</p>
            }
            <label>
                <input type="text" name="username" placeholder='Username' value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
            </label>
            <label>
                <input type="password" name="password" placeholder='Password' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
            </label>
            <button>{isLogin ? 'Login' : 'Register'}</button>

        </form>

        // add password forgot

    )
}

export default LoginForm