import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti';
import { AiOutlineMobile } from 'react-icons/ai';
import { FiMail } from "react-icons/fi";
import "./style.scss";

const iconSearch = {
    width: "24px",
    color: "#4f5864",
    position: "absolute",
    left: "7px",
    top: "8px",
    opacity: "0.5",
    height: "24px"
};

function Footer() {

    const iconStyle = {
        margin: '7px',
        fontSize: '20px',
        color: 'white'
    }
    return (
        <div className="all-footer">
            <div className="follow-us-mail-2">
                <label className='follow-label'>Newsletter Signup</label>
                <label className='email-label'>Sign up for our daily emails and we'll send you all the best deals, tailored for you.</label>
                <div className="email-Div-2">
                    <FiMail style={iconSearch} />
                    <input
                        className="email-bar-2"
                        name="query"
                        type="text"
                        placeholder="Enter email address" />
                    <button className="subscribe-2">
                        Subscribe
                        </button>
                </div>
            </div>
            <div className="footerBack">
                <div className="follow-us">
                    <label className='follow-label'>Follow us on</label>
                    <div style={{ marginBottom: '20px' }}>
                        <div className='dot'>
                            <FaFacebookF style={iconStyle} />
                        </div>
                        <div className='dot'>
                            <FaTwitter style={iconStyle} />
                        </div>
                        <div className='dot'>
                            <TiSocialInstagram style={iconStyle} />
                        </div>
                        <div className='dot'>
                            <FaYoutube style={iconStyle} />
                        </div>
                    </div>
                    <label className='follow-label'>Get app exclusive deals</label>
                    <button className='download-app'>
                        <AiOutlineMobile style={{ fontSize: '26px' }} />Download our App
                </button>
                </div>

                <div className="follow-us">
                    <label className='follow-label'>GrabOne </label>
                    <label className='label-footer'>GrabOne Guarantee</label>
                    <label className='label-footer'>Contact Us</label>
                    <label className='label-footer'>About Us</label>
                    <label className='label-footer'>Terms & Returns</label>
                    <label className='label-footer'>Blog</label>
                    <label className='label-footer'>Gift Cards</label>
                </div>

                <div className="follow-us">
                    <label className='follow-label'>My Account </label>
                    <label className='label-footer'>My Account</label>
                    <label className='label-footer'>My Cart</label>
                    <label className='label-footer'>My Coupons</label>
                    <label className='label-footer'>FAQ</label>
                </div>

                <div className="follow-us">
                    <label className='follow-label'>Merchants</label>
                    <label className='label-footer'>Run a Deal</label>
                    <label className='label-footer'>Merchant Centre</label>
                </div>

                <div className="follow-us-mail">
                    <label className='follow-label'>Newsletter Signup</label>
                    <label className='email-label'>Sign up for our daily emails and we'll send you all the best deals, tailored for you.</label>
                    <div className="email-Div-2">
                        <FiMail style={iconSearch} />
                        <input
                            className="email-bar-2"
                            name="query"
                            type="text"
                            placeholder="Enter email address" />
                        <button className="subscribe-2">
                            Subscribe
                        </button>
                    </div>
                </div>

            </div >
        </div>
    );
}
export default Footer;
