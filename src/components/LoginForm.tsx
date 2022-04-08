import React, { FormEvent, useState } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import AuthService from '../services/auth.service'

function LoginForm() {
    const { setAuth } = useAuth() as any
    const [isLogin, setIsLogin] = useState(true)
    const [user, setUser] = useState({ username: '', password: '' })
    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate()
    const location = useLocation() as any
    const from = location.state?.from.pathname || '/articles'

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        isLogin ? login() : signup()

    }

    const login = async () => {
        try {
            const response = await AuthService.signin(user)
            console.log(response);
            const accessToken = response.data.token
            const role = response.data.role
            setAuth({ username: user.username, id: response.data.id, accessToken, role })
            setUser({ username: '', password: '' })
            setErrorMessage('')
            navigate(from, { replace: true })

        } catch (err) {
            if (!(err as any)?.response) {
                setErrorMessage('No Server Response');
            } else if ((err as any).response?.status === 403) {
                setErrorMessage('Username or password incorrect');
            } else {
                setErrorMessage('Login Failed');
            }


        }

        // AuthService.signin(user) 
        //     .then((result) => {
        //         console.log(result);

        //         if (result.statusCode === 403) {
        //             setErrorMessage('Username or password incorrect')
        //             return
        //         }

        //         const accessToken = result.token
        //         const role = result.role
        //         setAuth({ ...user, accessToken, role })
        //         setUser({ username: '', password: '' })
        //         setErrorMessage('')
        //         navigate(from, { replace: true })
        //     })
        //     .catch((err) => {
        //         setErrorMessage('No response from server')
        //     })
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
                {/* <div className="message_error">
                    error
                </div> */}
            </label>
            <label>
                <input type="password" name="password" placeholder='Password' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                <div className="error">

                </div>
            </label>
            <button disabled={user.password === '' || user.username === ''}>{isLogin ? 'Login' : 'Register'}</button>
            {errorMessage !== '' && <p className="message_error">{errorMessage}</p>}

        </form>

        // add password forgot

    )
}

export default LoginForm