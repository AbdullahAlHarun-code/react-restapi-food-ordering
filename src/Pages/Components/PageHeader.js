import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import MainNavbar from './MainNavbar'
import Ordernow from './Ordernow'
const PageHeader = (props) => {
    
    return (
        <>
            <div id="header" className="header-wrapper header-small">
                <div className="header-inner-wrapper">
                    <div className="header-content-wrapper">
                        <div className="logo">
                            <Link to="/" title=""><img className="logoImage" style={{width:'280px'}} src={props.c_details.logoImageLink1} alt="" title="" /><img className="logoImageRetina" src={props.c_details.logoImageLink1} alt="" title="" /></Link>
                            <div className="clear"></div>
                        </div> 
                        
                        <MainNavbar mButton={props.toogleButton}/>
                     
                        <div className="clear"></div>
                    </div>
                    <div className="clear"></div>
                    <div className="bottom-header-shadow"></div>
                </div>
                <div className="after-header-shadow"></div>
                <div className="clear"></div>
            </div>
            <div className="clear"></div>
            
            
        </>
    )
}

export default PageHeader
