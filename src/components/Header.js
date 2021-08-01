import React from 'react'
import Typed from 'react-typed'

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Web Development / Mobile App Development</h1>
                <Typed
                className="typed-text"
                strings={["Front End", "Back End", "Full Stack", "Mobile"]}
                typeSpeed={60}
                backSpeed={70}
                loop
                />

            </div>
            
        </div>
    )
}

export default Header;
