import React from 'react';
import Rentals from '../Menu/Rentals';
import Sub from '../Menu/Sub'
import Free from '../Menu/Free'
import { Route, BrowserRouter as Router, Switch, Routes } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Accessibility from '../FooterMenu/Accessibility';
import About from '../FooterMenu/About';
import Terms from '../FooterMenu/Terms';
import Cookies from '../FooterMenu/Cookies'
import Help from '../FooterMenu/Help'
import SignIn from '../Menu/SignIn';
import Privacy from '../FooterMenu/Privacy';

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />

            <Route path="/Rentals" element={<Rentals />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/Sub" element={<Sub />} />
            <Route path="/Free" element={<Free />} />





            {/* FOOTER MENU */}

            <Route path="/Accessibility" element={<Accessibility />} />
            <Route path="/About" element={<About />} />
            <Route path="/Cookies" element={<Cookies />} />
            {/* <Route path="/Livechat" element={<Livechat />} /> */}
            <Route path="/Help" element={<Help />} />
            <Route path="/Privacy" element={<Privacy />} />
            <Route path="/Terms" element={<Terms />} />
        </Routes>
    );
};
export default Routers
