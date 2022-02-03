import React from 'react'
import { Link } from 'react-router-dom'

const Footer = (props) => {
    console.log(props.c_details._id)
    return (
        <>
            <div className="md-overlay"></div>
            <div className="footer">
                <div className="center">
                    <div className="footer-shadow"></div>
                    <div className="left">
                        <div className="footer_flag_1">{props.c_details.telephoneCompany}</div>
                        <div className="clear"></div>
                        <Link to="/contact" className="footer_flag_2">Where to find us?</Link> </div>
                    <div className="right">
                        <img className="footer-logo" style={{width:'250px'}} src={props.c_details.logoImageLink2} alt="" />
                        <img className="footer-logo-retina" style={{margin:'0px auto'}} src={props.c_details.logoImageLink2} alt="" />
                        <div className="footer-address">{props.c_details.address}.</div>
                        <div className="footer-address">{props.c_details.openingHours}.</div>
                        <div className="footer-address">{props.c_details.emailInfo} | {props.c_details.telephoneCompany} .</div>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        </>
    )
}

export default Footer
