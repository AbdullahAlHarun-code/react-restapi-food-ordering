import React from 'react'
import {Link} from 'react-router-dom'
const Ordernow = () => {
    return (
        <div>
            <div className="clear"></div>
                <div className="button-container clear"><Link to="/menu" className="custom-buttom horizontal-center">Order Online</Link></div>
                <div className="clear"></div>
        </div>
    )
}

export default Ordernow
