import React, { useState } from 'react';
import '../sass/styles.css';

function SignUpForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        //login post (once we have server running)
        console.log('Logging in with', username, password);
    };

    return (
        <div className="signup-container">
            <form onSubmit={handleSubmit} className='signup-form'>
                <label>Username : </label>
                <input
                    className="signup-input"
                    id="username"
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Create Username'
                    required
                />
                <label>Password  :</label>
                <input id="password"
                    className="signup-input"
                    type="password"
                    value={password}
                    placeholder='Create Password'
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button id="loginbutton" type="submit">Create account</button>
            </form>
        </div>
    )
}

export default SignUpForm;
