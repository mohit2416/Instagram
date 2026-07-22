import React, { useState } from 'react'
import '../style/form.scss'
import { Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router'

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const { handleLogin, loading } = useAuth()
    const navigate = useNavigate()

    if (loading) {
        return (
            <h1>Loading....</h1>
        )
    }

    async function handleSubmit(e) {
        e.preventDefault()

        handleLogin(username, password)
            .then(res => {
                console.log("user logged in")
                navigate("/")
            })

    }

    return (
        <main>
            <div className="form-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input onInput={(e) => { setUsername(e.target.value) }}
                        type="text"
                        name='username'
                        id='username'
                        placeholder='Enter username' />
                    <input onInput={(e) => { setPassword(e.target.value) }}
                        type="password"
                        name='password'
                        id='password'
                        placeholder='Enter password' />
                    <button className='button primary-button' >Login</button>
                </form>

                <p>Don`t have an account? <Link className='toggleAuthForm' to='/register'>Register</Link></p>
            </div>
        </main>
    )
}

export default Login