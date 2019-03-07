import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SingnedInLinks'
import SingnedOutLinks from './SingnedOutLinks'

const Navbar =()=>{
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Classifieds</Link>
                <SignedInLinks/> 
                <SingnedOutLinks />           
            </div>
        </nav>
    )
}

export default Navbar;