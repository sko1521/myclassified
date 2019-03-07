import React from 'react';
import { NavLink } from 'react-router-dom';

const SingnedInLinks =()=>{
    return(
    <ul className="right">
        <li><NavLink to="/addpost">Create Post</NavLink></li>
        <li><NavLink to="/">Logout</NavLink></li>
        <li><NavLink to="/" className="btn btn-floating red ">SK</NavLink></li>
    </ul>
    )
}

export default SingnedInLinks;