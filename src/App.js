import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Info from './components/Info';
import Works from './components/Works';
import Komma from './components/Komma';
import Dyptique from './components/Dyptique';
import Nefis from './components/Nefis';
import Rx from './components/Rx';
import Syki from './components/Syki';
import Arboreta from './components/Arboreta';



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/info" element={<Info />} />
                <Route path="/works" element={<Works />} />
                <Route path="/komma" element={<Komma />} />
                <Route path="/dyptique" element={<Dyptique />} />
                <Route path="/nefis" element={<Nefis />} />
                <Route path="/rx" element={<Rx />} />
                <Route path="/syki" element={<Syki />} />
                <Route path="/arboreta" element={<Arboreta />} />


            </Routes>
        </Router>
    );
}
export default App;
