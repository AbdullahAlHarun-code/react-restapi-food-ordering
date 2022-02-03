import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import PageBase from './PageBase'
import { Link } from 'react-router-dom'
import Iframe from 'react-iframe'

const Contactus = () => {
    const [cDetails, setCDetails] = useState({})

    useEffect(() => {
        async function fetchCompanyDetails(){
            const pdata = await Axios.get('https://admin.belfastfriedchicken.co.uk/api/products/');
            const cdata = await Axios.get('https://admin.belfastfriedchicken.co.uk/api/company-details/');
            Axios.all([pdata, cdata]).then(
                Axios.spread((...allData)=>{
                    const rcdata = allData[1].data
                    setCDetails(rcdata)
                })
            )
        }
        
        fetchCompanyDetails()
        
    }, [])
    return (
        <>
            <PageBase page='page' c_details={cDetails}>
            <div className="page-title-wrapper">
                <div className="page-title">
                    <h1>Contact</h1>
                    <h3>Check where to find us. You can call us or send message.</h3>
                    <div className="clear"></div>
                    <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18497.314146719207!2d-5.94805709441249!3d54.58347955284189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48610995a804df31%3A0xb62653618765906d!2sBelfast%20Fried%20chicken!5e0!3m2!1sen!2sie!4v1640930356274!5m2!1sen!2sie"
                            width="100%"
                            height="450px"
                            id="myId"
                            className="myClassname"
                            display="initial"
                            position="relative"/>
                </div>
            </div>
            <div className="clear"></div>
                <div id="container">
                    <div className="center">
                        <div className="page-wrapper">

                            <div className="vc_row wpb_row vc_row-fluid">
                                <div className="wpb_column vc_column_container vc_col-sm-12">
                                    <div className="vc_column-inner ">
                                        <div className="wpb_wrapper">
                                        <div className="vc_row wpb_row vc_inner vc_row-fluid">
                                            <div className="wpb_column vc_column_container vc_col-sm-4">
                                                <div className="vc_column-inner ">
                                                    <div className="wpb_wrapper">
                                                        <div className="vc_titles title_align_left">
                                                            <h2>Contact info</h2></div>
                                                            
                                                        <div className="wpb_text_column wpb_content_element ">
                                                            <div className="wpb_wrapper">
                                                                <p style={{color: '#000000', fontSize: '24px', fontWeight: '400'}}>{cDetails.companyName}</p>
                                                                <p><Link style={{fontFamily: 'Merriweather, serif', color: '#888888', fontSize: '24px', fontWeight: '300', lineHeight: '1.2'}} title="Domain name" to="#">{cDetails.websiteLink}</Link>
                                                                    <br />
                                                                    <Link style={{fontFamily: 'Merriweather, serif', color: '#888888', fontSize: '24px', fontWeight: '300', lineHeight: '1.2'}} title="Domain mail" to="#">{cDetails.emailInfo}</Link></p>
                                                                <p style={{color: '#888888', fontSize: '24px', fontWeight: '300', marginTop: '40px'}}>CALL US:
                                                                    <br />
                                                                    <span style={{color: '#d3312a', fontSize: '36px', fontWeight: '400', lineHeight: '1'}}>{cDetails.telephoneCompany}</span></p>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wpb_column vc_column_container vc_col-sm-4">
                                                <div className="vc_column-inner ">
                                                    <div className="wpb_wrapper">
                                                        <div className="vc_titles title_align_left">
                                                            <h2>Opening hours</h2></div>
                                                        <div className="wpb_text_column wpb_content_element ">
                                                            <div className="wpb_wrapper">
                                                                <p style={{marginBottom:'0px', color: '#000000', fontSize: '24px', fontWeight: '400'}}>MONDAY &#8211; SATURDAY</p>
                                                                <p style={{fontFamily: 'Merriweather, serif', color: '#888888', fontSize: '24px', fontWeight: '300', lineHeight: '1.2'}} title="Domain name">12PM &#8211; 3AM</p>
                                                                
                                                                <p style={{marginBottom: '0px', color: '#000000', fontSize: '24px', fontWeight: '400'}}>SUNDAY</p>
                                                                <p style={{fontFamily: 'Merriweather, serif', color: '#888888', fontSize: '24px', fontWeight: '300', lineHeight: '1.2'}} title="Domain name">12PM &#8211; 12AM</p>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wpb_column vc_column_container vc_col-sm-4">
                                                <div className="vc_column-inner ">
                                                    <div className="wpb_wrapper">
                                                        <div className="vc_titles title_align_left">
                                                            <h2>Send message</h2></div>
                                                        <div role="form" className="wpcf7" id="wpcf7-f4-p17-o1" lang="en-US" dir="ltr">
                                                            <div className="screen-reader-response"></div>
                                                            <form id="contact-form" action="#">

                                                                <div className="pego-contact-form">
                                                                    <p><span className="wpcf7-form-control-wrap your-name">
                                                                        <input name="name" id="name" type="text" value="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Name" /></span></p>
                                                                    <p><span className="wpcf7-form-control-wrap your-email">
                                                                        <input name="mail" id="mail" type="text"  value="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Email" /></span></p>
                                                                    <p><span className="wpcf7-form-control-wrap your-subject">
                                                                        <input name="subject" id="subject" type="text"  value="" size="40" className="wpcf7-form-control wpcf7-text" aria-invalid="false" placeholder="Subject" /></span> </p>
                                                                    <p><span className="wpcf7-form-control-wrap your-message">
                                                                        <textarea name="comment" id="comment"  cols="40" rows="10" className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Message"></textarea></span> </p>
                                                                    <p>
                                                                        <input type="submit" value="Send message" className="wpcf7-form-control wpcf7-submit" id="submit_contact"/>
                                                                        <div id="msg" className="message"></div>
                                                                    </p>
                                                                </div>
                                                                <div className="clear"></div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageBase>
        </>
    )
}

export default Contactus
