import React, { useState } from 'react';

const LoginForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(email, password);
    };

    return (
        <div className='App'>
            <header className='App-header'>
                <form onSubmit={handleSubmit}>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <input value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <button type='submit'>Submit</button>
                </form>
            </header>
        </div>
    );
};

export default LoginForm;
