import React from 'react'
import LandingPage from '../components/LandingPage'
import Navigation from '../components/Navigation'
import './Pages.css'



function Homepage() {
    return (
        <div className="main">
            <Navigation/>
            <LandingPage/>
        </div>
    )
}

export default Homepage
