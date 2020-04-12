
import React from 'react';
import './style.scss';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FiShoppingCart, FiMapPin, FiUser } from 'react-icons/fi';
import { FaRegEnvelope } from 'react-icons/fa';
import NZME from '../../assets/imgs/NZME.png';
import Logo from '../../assets/imgs/Logo.png';

const iconStyle = { backgroundColor: '#01b2ee', width: '25px', display: 'block', margin: '0 5px 0 0', height: '25px' }
function Header() {
    return <div className='HeaderContainer'>
        <div className='HeaderBody'>
            <div className='LogoDiv'>
                <img src={Logo} alt="Logo" className='logo' />
            </div>
            <div className='navContent'>
                <div className='navContentLeft'>
                    <div className='navColMain'>
                        <FiMapPin style={iconStyle} />
                        <span style={{ fontSize: '14px' }}>Auckland</span>
                        <MdKeyboardArrowDown style={iconStyle} />
                    </div>
                    <div className='navCol'>
                        <FiShoppingCart style={iconStyle} />
                    </div>
                    <div className='navCol'>
                        <FiUser style={iconStyle} />

                        <MdKeyboardArrowDown style={iconStyle} />

                    </div>
                    <div className='navCol'>
                        <FaRegEnvelope style={iconStyle} />
                        <span style={{ fontSize: '14px' }}>subscribe</span>
                    </div>


                </div>
                <div className='navContentRigth'>
                    <div class="vl" />
                    <div className='NZME'>
                        <img src={NZME} alt="Logo" />
                    </div>
                </div>
            </div>


        </div>
    </div>
}
export default Header;