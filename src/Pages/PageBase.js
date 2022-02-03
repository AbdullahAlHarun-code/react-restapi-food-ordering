import React, {useState, useEffect} from 'react'
import Footer from './Components/Footer'
import MobileMenu from './Components/MobileMenu'
import Ordernow from './Components/Ordernow'
import PageHeader from './Components/PageHeader'
import $ from 'jquery';
window.jQuery = $;


const PageBase = (props) => {
    
    const [mobileMunuShow, setMobilemenuShow] = useState('none')
    const [showMenu, setShowMenu] = useState(false)
    useEffect(()=>{
        toogleMobileMenu()
    }, [])
    const toogleMobileMenu = ()=>{
        console.log('mobile nav')
        showMenu ? setShowMenu(false) : setShowMenu(true)
        // showMenu ? setMobilemenuShow('block') : setMobilemenuShow('none')
        // const el = findDOMNode(refs.toggle)
        // $(el).slideToggle()
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
                <PageHeader c_details={props.c_details} toogleButton={toogleMobileMenu}/>
                
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

export default PageBase
