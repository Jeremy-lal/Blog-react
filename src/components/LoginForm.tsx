import React, { FormEvent, FormEventHandler, useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
        console.log('login');
        if (user) {
            navigate('/articles')
        }

    }

    const signup = () => {
        console.log('register');
        if (user) {
            navigate('/articles')
        }
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