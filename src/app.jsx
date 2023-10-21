import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import './sass/styles.css';

function App() {
    return (
        <Router>
            <div>
                <h1 id="app-title">ShapeQuest</h1>
                <Routes>
                    <Route path="/" element={<LoginForm />} />
                    <Route path="/SignUpForm" element={<SignUpForm />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;
