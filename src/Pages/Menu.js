import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import PageBase from './PageBase'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import ProductShowPopup from './Components/ProductShowPopup'

const Menu = () => {
    const [catProducts, setCatProducts] = useState([]);
    const [cDetails, setCDetails] = useState({});
    const [categories, setCategories] = useState([]);
    const { slug } = useParams();
    const [singleProduct, setSingleProduct] = useState({});
    const [modalShow, setModelShow] = useState(false);
    const [visible, setVisible] = useState(6);

    const modalSet = (product) =>{
        setModelShow(true)
        setSingleProduct(product)
    }

    const showMoreItems = () =>{
        if (catProducts.length>visible){
            setVisible((preValue) => preValue + 6);
        }else{
            setVisible(6);
        }

    }

    useEffect(() => {
        async function fetchCompanyDetails(){
            if(typeof slug !== "undefined"){
                console.log('test undefined')
                var catProductsData = await Axios.get(`https://admin.belfastfriedchicken.co.uk/api/cat-products/${slug}/`);
            }else{
                var catProductsData = await Axios.get('https://admin.belfastfriedchicken.co.uk/api/cat-products/');
                console.log('test not undefined')
            }
            //const catProductsData = await Axios.get('/api/cat-products/');
            const catdata = await Axios.get('https://admin.belfastfriedchicken.co.uk/api/categories/');
            const cdata = await Axios.get('https://admin.belfastfriedchicken.co.uk/api/company-details/');
            Axios.all([catdata, cdata, catProductsData]).then(
                Axios.spread((...allData)=>{
                    const rcatdata = allData[0].data
                    const rcdata = allData[1].data
                    const rcatProductsData = allData[2].data
                    console.log(rcatProductsData)
                    setCDetails(rcdata)
                    setCategories(rcatdata)
                    setCatProducts(rcatProductsData)
                })
            )
        }
        
        fetchCompanyDetails()
        setVisible(6);
        
    }, [slug])
    return (
        <>  
            {console.log('test1')}
            <PageBase page='page' c_details={cDetails}>
            <div className="page-title-wrapper">
                <div className="page-title">
                    <h1>Our menu</h1>
                    <h3>We have best burgers. Check our complete menu.</h3>
                    <div className="clear"></div>
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
                                        <div className="wpb_content_element vc_portfolio_items_menu_look">
                                            <ul id="filters" className="option-set" data-option-key="filter">
                                            <li className="filter-cat"><Link style={{textDecoration:'none'}} to='/menu' data-option-value=".pizza" className="selected">All</Link></li>
                                                {
                                                    categories&&categories.map((category, index) =>{
                                                        return (
                                                            <>
                                                                <li className="filter-cat"><Link style={{textDecoration:'none'}} to={`/menu/${category.slug}`} data-option-value=".pizza" className="selected">{category.name}</Link></li>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </ul>
                                            <div className="clear"></div><hr />
                                            <div className="pego-isotope-wrapper portfolio-items-wrapper portfolio-items-5055">

                                                {/* <div className="portfolio-items-single-menu-item portfolio-columns3 isotope-item pizza">
                                                    <div className="menu-thumbnail-wrapper">
                                                        <div className="menu-flag">4.90$</div>
                                                        <div className="menu-flag-special-price">Special price</div><img width="900" height="714" src="upload/pizza1.jpg" className="attachment-full size-full" alt="pizza1" /></div>
                                                    <h1 className="menu-title">Pizza Colors</h1>
                                                    <div className="menu-description">Chicken, tomatoes, black olives, ham, pepperoni, cheese, onions.</div>
                                                </div> */}
                                                {console.log(catProducts)}
                                                {
                                                    catProducts&&catProducts.slice(0, visible).map((product, index) =>{
                                                        return (
                                                            <>
                                                                <Link to="" onClick={() => modalSet(product)} style={{textDecoration:'none'}} className="portfolio-items-single-menu-item portfolio-columns3 isotope-item burger">
                                                                    <div className="menu-thumbnail-wrapper">
                                                                        <div className="menu-flag">{product.getPriceRange}</div><img style={{width:'100%', height:'250px'}} src={product.image} className="attachment-full size-full" alt={product.name} /></div>
                                                                
                                                                    <h4 style={{textDecoration:'none'}} className="menu-title" dangerouslySetInnerHTML={{__html: product.name}}></h4>
                                                                    {product.spCategoryName && (<><div className="menu-description" dangerouslySetInnerHTML={{__html: product.spCategoryName}}></div><hr /></>)}
                                                                </Link>
                                                            </>
                                                        )
                                                    })
                                                }
                                                {
                                                    catProducts.length<1&&(
                                                        // <span className="w-100 alert alert-danger">! No products found</span>
                                                        <center>
                                                            <div class="spinner-border" role="status">
                                                                <span class="sr-only"></span>
                                                            </div>
                                                        </center>
                                                        
                                                    )
                                                }
                                                {/* <div className="portfolio-items-single-menu-item portfolio-columns3 isotope-item burger">
                                                    <div className="menu-thumbnail-wrapper">
                                                        <div className="menu-flag">2.40$</div><img width="900" height="714" src="upload/burger4.jpg" className="attachment-full size-full" alt="burger4" /></div>
                                                    <h1 className="menu-title">Burger retro</h1>
                                                    <div className="menu-description">Beef meat, spicy sauce, onion, cheese, corn, tomatoes, bread, ketchup</div>
                                                </div>
                                                 */}
                                                 <ProductShowPopup product={singleProduct} modalShow={modalShow} setModelShow={setModelShow}/>
                                            </div>
                                            {console.log('visiable:', visible)}
                                            {
                                                (visible<catProducts.length)?(
                                                    
                                                    <div class="col-12"><button onClick={showMoreItems} class="btn btn-warning btn-lg" disabled={(visible>catProducts.length)?'disabled':''}>Load More</button></div>
                                                   
                                                    
                                                ):''
                                            }
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="clear"></div>
            </PageBase>
        </>
    )
}

export default Menu
