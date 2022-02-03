import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import PageBase from './PageBase'
import Ordernow from './Components/Ordernow'

const About = (props) => {

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
            
                <div id="container">
                    <div className="center">
                        <div className="page-wrapper">

                            <div className="vc_row wpb_row vc_row-fluid">
                                <div className="wpb_column vc_column_container vc_col-sm-12">
                                    <div className="vc_column-inner ">
                                        <div className="wpb_wrapper">
                                            <div className="wpb_content_element vc_welcome">
                                            
                                                <h1 className="welcome-big-text" style={{color: '#000000'}}>We have the best burgers and pizzas in town</h1>
                                                <div className="welcome-content"></div>
                                            </div>
                                            <div className="vc_row wpb_row vc_inner vc_row-fluid">
                                                <div className="wpb_column vc_column_container vc_col-sm-6">
                                                    <div className="vc_column-inner ">
                                                        <div className="wpb_wrapper">
                                                            <div className="wpb_content_element vc_dropcap">
                                                                <div className="dropcap type1"><span className="first_letter">B</span>FC is the best fast food in town. At BFC we take great pride in the quality of our food. BFC has developed a unique innovative menu that caters to customers throughout the day. We offer traditional meals serving prime chicken, lamb, beef burgers and succulent chicken and a range of drinks. All BFC food is prepared to the highest standards and professionalism and comes with a BFC quality guarantee. We are committed to providing our customers with easy access to product information, making it easy to maintain a balanced diet. The full BFC menu is now available to order online for collection in our restaurants or for home delivery where available.</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="wpb_column vc_column_container vc_col-sm-6">
                                                    <div className="vc_column-inner ">
                                                        <div className="wpb_wrapper">
                                                            <div className="wpb_text_column wpb_content_element ">
                                                                <div className="wpb_wrapper">
                                                                    <img src={cDetails.logoImageLink3} alt={cDetails.companyName} />

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="blockquote wpb_content_element type3">
                                                <div className="icon_holder"></div>
                                                <p>We like to create fast food. But not ordinary fast food. We create delicious fast food. Welcome&#8230;</p>
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

export default About
