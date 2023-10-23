import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import GameContainer from './components/GameContainer';
import CilinderLight2 from './assets/CilinderLight2.gif';
import './sass/styles.css';

function App() {
    return (
        <Router>
            <div id="app-header">
                <h1 id="app-title"><img src={CilinderLight2} />    ShapeQuest    <img src={CilinderLight2} /></h1>
                <h2 id="app-tagline">Shaping brighter futures!!</h2>
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<LoginForm />} />
                    <Route path="/SignUpForm" element={<SignUpForm />} />
                    <Route path="/GameContainer" element={<GameContainer />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;
