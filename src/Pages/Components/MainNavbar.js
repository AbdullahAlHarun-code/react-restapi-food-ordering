import React, {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
const MainNavbar = (props) => {
    
    return (
        <>
            <Link to="#" onClick={props.mButton} className='mobile-menu-show'><i className="menu-icon pe-7s-menu"></i></Link>
            <div className="main-menu">
                <div className="menu-main-menu-container">
                    <ul id="menu-main-menu" className="sf-menu">
                        <li className="menu-item"><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                        <li className="menu-item"><NavLink to="/about" exact activeClassName="active">About us</NavLink></li>
                        <li className="menu-item"><NavLink to="/menu" exact activeClassName="active">Menu</NavLink>
                        </li>
                        <li className="menu-item"><NavLink to="/contact" exact activeClassName="active">Contact</NavLink></li>
                    </ul>
                </div>
            </div>
            
        </>
    )
}

export default MainNavbar
