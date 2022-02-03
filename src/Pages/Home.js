import React, {useState, useEffect} from 'react'
import Base from './Base'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import ProductShowPopup from './Components/ProductShowPopup'
import axios from 'axios'
import HomeCarsoul from './Components/HomeCarsoul'
import Ordernow from './Components/Ordernow'



const Home = () => {
    const [cDetails, setCDetails] = useState({})
    const [products, setProducts] = useState([])
    const [modalShow, setModelShow] = useState(false)
    const [singleProduct, setSingleProduct] = useState({})
   
    const modalSet = (product) =>{
        console.log(product._id)
        setModelShow(true)
        console.log(modalShow)
        setSingleProduct(product)
    }
    useEffect(() => {
        
        async function fetchProducts(){
            const pdata = await Axios.get('https://admin.belfastfriedchicken.co.uk/api/featured-products/');
            const cdata = await Axios.get('https://admin.belfastfriedchicken.co.uk/api/company-details/');
            axios.all([pdata, cdata]).then(
                axios.spread((...allData)=>{
                    const rpdata = allData[0].data
                    const rcdata = allData[1].data
                    setCDetails(rcdata)
                    setProducts(rpdata)
                    console.log(rpdata)
                })
            )
        }
        
        fetchProducts()
        
        
    }, [])
    return (
        <>{console.log(products)}
            <Base page='home' c_details={cDetails}>
            <div id="container">
                <div className="center">
                    <div className="page-wrapper">

                        <div className="vc_row wpb_row vc_row-fluid">
                            <div className="wpb_column vc_column_container vc_col-sm-12">
                                <div className="vc_column-inner ">
                                    <div className="wpb_wrapper">
                                        <div className="wpb_content_element vc_welcome">
                                            <h1 className="welcome-big-text">We offer delicious burgers, grilled chicken, kebab,...</h1>
                                            <div className="welcome-content">Tasting our food is like heaven in your mouth&#8230;</div>
                                            <Ordernow />
                                        </div>
                                        <div className="wpb_content_element vc_portfolio_items">
											 
											
                                            {
                                                products.map((product, index) =>{
                                                    return (
                                                        <React.Fragment key={product.id}>
                                                            <Link to="" onClick={() => modalSet(product)} data-modal="modal-41" title={product.name} className={`md-trigger ${index===0 ? 'big' : 'small'}-portfolio-item`} style={{backgroundImage: `url(${product.image})`, backgroundSize: 'cover'}}>
                                                            {index===0 && (
                                                                <>
                                                                    <div className="flag-one">
                                                                        Price of the week
                                                                    </div>
                                                                    <div className="clear">
                                                                    </div>
                                                                    
                                                                    <div className="flag-two">
                                                                       £{product.prices[0].price}
                                                                    </div>
                                                                </>
                                                            )
                                                            }
                                                            <h3 className={`portfolio-title${index === 0 ? '-big' : ''}`} dangerouslySetInnerHTML={{__html: product.name}}></h3>
                                                            </Link>
                                                        </React.Fragment>
                                                    )
                                                })
                                            }
                                            
											<ProductShowPopup product={singleProduct} modalShow={modalShow} setModelShow={setModelShow}/>
                                            
                                            <div className="clear"></div>
                                        </div>
                                        <HomeCarsoul />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Base>
        </>
    )
}

export default Home

