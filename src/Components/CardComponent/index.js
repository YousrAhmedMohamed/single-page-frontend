
import React, { useState } from 'react';
import './style.scss';



function Card(props) {
    const [hover, setHover] = useState(false);
    return <div className="card-body" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
        <div style={{ position: 'relative' }}>
            <img src={props.image} alt="Logo" className='card-img' />
            <div style={{ display: hover === true ? 'block' : 'none' }} className="hover-card">
                <div className="hover-text">{props.details.hoverText}</div>
            </div>
        </div>
        <div className="footer-container">
            <div><span className="HeaderCard">{props.details.Header}</span></div>
            <div><span className="SecondaryCard">{props.details.Secondary}</span></div>
            <div style={{ display: 'block' }}><span className="thirdCard">{props.details.third}</span></div>
            <div className="from-div"><span className="from-class">from</span></div>
            <div className='all-prices'>
                <div className="bought-and-original">

                    <span className="bought-class">{props.details.bought} bought</span>

                    <span className='original-class'>{props.details.original}</span></div>
                <div className='sale-div'>
                    <span className="sale-class">{props.details.sale}</span>
                </div>
            </div>
        </div>
    </div>
}
export default Card;