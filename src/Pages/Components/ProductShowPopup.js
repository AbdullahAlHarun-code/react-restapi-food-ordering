import React, {useState, useEffect} from 'react'
import {Button, Modal} from 'react-bootstrap'

const ProductShowPopup = (props) => {
    const productOb = props.product
    return (
        <>
            <Modal show={props.modalShow}>
                <Modal.Header>
                    <img style={{width:'100%'}} className="popup-image" src={`${props.product.image}`} alt="Pizza Colors" />
                </Modal.Header>
                <Modal.Body>
                    <h1 dangerouslySetInnerHTML={{__html: props.product.name}}></h1><hr />
                    {props.product.description && (<><div className="popup-description" dangerouslySetInnerHTML={{__html: props.product.description}}></div><hr /></>)}
                    
                    {props.product.category_description && (<><div className="text-info text-left" dangerouslySetInnerHTML={{__html: props.product.category_description}}></div><hr /></>)}
                    {props.product.spCategoryName && (<><div className="text-info text-left" dangerouslySetInnerHTML={{__html: props.product.spCategoryName}}></div><hr /></>)}
                     
                    <div className="popup-price">
                        {
                              !!(productOb.name) ?
                                (   
                                    props.product.prices.map((ob, index)=>{
                                        return (
                                            <>
                                                <button className="btn btn-warning btn-lg m-2">{ob.text} <span class="text-danger">£ {ob.price}</span></button>
                                            </>
                                            
                                        )
                                    })
                                ) : (
                                    console.log(productOb)
                                )
                            
                             
                        }
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={()=> props.setModelShow()}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ProductShowPopup
