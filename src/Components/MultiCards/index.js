
import React, { useState } from 'react';
import './style.scss';
import { IoIosArrowForward } from "react-icons/io";



function MultiCards(props) {
    const [hover, setHover] = useState(false);
    return <div className="card-body-2" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
        <div className="card-body-3" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
            <div className="card-body-4" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>

                <div style={{ position: 'relative' }}>
                    <img src={props.image} alt="Logo" className='card-img' />
                    <div style={{ display: hover === true ? 'block' : 'none' }} className="hover-card">
                        <div className="hover-text">{props.Header}</div>
                    </div>
                </div>

                <div className="footer-container-2">
                    <span className="HeaderCard">{props.Header}</span>
                    <span className="SecondaryCard">Multiple Deals</span>
                    <button className='view-collec'>
                        View Collection <IoIosArrowForward />
                    </button>
                </div>

            </div>
        </div>
    </div>
}
export default MultiCards;