import React from "react";
import { FiHome, FiSearch, FiShoppingCart } from 'react-icons/fi';
import { MdPersonOutline } from 'react-icons/md';
import { AiOutlineAppstore } from 'react-icons/ai'
import "./style.scss";


function FooterMobile() {

    const iconStyle = { fontSize: '25px', display: 'block' }
    return (
        <div className="footer">
            <div className='divIcon'>
                <FiHome style={iconStyle} />
                <label>Home</label>
            </div>
            <div className='divIcon'>
                <FiSearch style={iconStyle} />
                <label>Search</label>
            </div>
            <div className='divIcon'>
                <AiOutlineAppstore style={iconStyle} />
                <label>Categories</label>
            </div >

            <div className='divIcon'>
                <FiShoppingCart style={iconStyle} />
                <label>Cart</label>
            </div >

            <div className='divIcon'>
                <MdPersonOutline style={iconStyle} />
                <label>Account</label>
            </div >
        </div >
    );
}
export default FooterMobile;
