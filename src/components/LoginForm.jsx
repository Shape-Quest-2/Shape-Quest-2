import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //signup post (once we have server running)
        console.log('Account Created succesfully!', username, password);
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <label>Username : </label>
                <input
                    className="login-input"
                    id="username"
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Write Username'
                    required
                />
                <label>Password  :</label>
                <input id="password"
                    className="login-input"
                    type="password"
                    value={password}
                    placeholder='Write Password'
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button id="loginbutton" type="submit">Log In</button>
            </form>
            <Link to='SignUpForm'>Don't have an account? Sign up for one!</Link> {/* <-- Use Link component */}
        </div>
    );
}

export default LoginForm;
