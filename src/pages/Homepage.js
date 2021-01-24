import React from 'react'
import Contact from '../components/Contact'
import Features from '../components/Features'
import LandingPage from '../components/LandingPage'
import Navigation from '../components/Navigation'
import './Pages.css'



function Homepage() {
    return (
        <div className="main">
            <Navigation/>
            <LandingPage/>
            <Features/>
            <Contact/>
        </div>
    )
}

export default Homepage
