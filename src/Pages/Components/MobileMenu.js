import React from 'react'
import { Nav, NavLink } from 'react-router-dom'

const MobileMenu = (props) => {
    console.log('mobilemenushow', props.mMenusShow)
    const showmenu = props.mMenusShow
    return (
        <>
            <div className="mobile-menu-wrapper" style={{display:`${showmenu}`}}>
                <div className="menu-main-menu-container">
                    <ul id="menu-main-menu-1" className="mobile-menu">
                        <li className="menu-item current-menu-item current_page_item "><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                        <li className="menu-item"><NavLink to="/about" exact activeClassName="active">About us</NavLink></li>
                        <li className="menu-item"><NavLink to="/menu" exact activeClassName="active">Menu</NavLink>
                        </li>
                        <li className="menu-item"><NavLink exact to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </div>
            
        </>
    )
}

export default MobileMenu
