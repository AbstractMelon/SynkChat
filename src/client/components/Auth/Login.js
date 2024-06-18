import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('/api/auth/login', {
                usernameOrEmail,
                password,
            })
            console.log('Login Successful', response.data)

            const userInfo = {
                username: response.data.user.username,
                userId: response.data.user.userId,
                token: response.data.token,
            }

            // Save user info object to local storage
            localStorage.setItem('userInfo', JSON.stringify(userInfo))

            window.location.href = '/chat'
        } catch (error) {
            console.error('Login Failed', error.response.data)
        }
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username or Email"
                    value={usernameOrEmail}
                    onChange={(e) => setUsernameOrEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login
