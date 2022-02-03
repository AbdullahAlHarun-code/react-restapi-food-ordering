import React, {useState, useEffect} from 'react'
import MobileMenu from './Components/MobileMenu'
import HomeHeader from './Components/HomeHeader'
import Footer from './Components/Footer'
import $ from 'jquery';
window.jQuery = $;

const Base = (props) => {
    // console.log(props.c_details)
    const [mobileMunuShow, setMobilemenuShow] = useState('none')
    const [showMenu, setShowMenu] = useState(false)
    useEffect(()=>{
        toogleMobileMenu()
    }, [])
    const toogleMobileMenu = ()=>{
        console.log('mobile nav')
        showMenu ? setShowMenu(false) : setShowMenu(true)
        // showMenu ? setMobilemenuShow('block') : setMobilemenuShow('none')
        if (showMenu === true) {
			$(".mobile-menu-wrapper").slideDown("slow");
			setShowMenu(false)
		}
		else {
			$(".mobile-menu-wrapper").slideUp("slow");
			setShowMenu(true)
		}
    }
    return (
        <>
            <div className="global-wrapper">
                <HomeHeader c_details={props.c_details} toogleButton={toogleMobileMenu}/>
                
                <div className="clear"></div>
                <MobileMenu mMenusShow={mobileMunuShow}/>
                <div className="container-wrapper">
                    {props.children}
                </div>
            </div>
            <Footer c_details={props.c_details}/>
        </>
    )
}

export default Base
