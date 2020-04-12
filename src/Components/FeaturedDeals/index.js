import React from "react";
import "./style.scss";
import { IoIosArrowForward } from "react-icons/io";
import WFH from '../../assets/imgs/wfh.PNG';
import Essentials from '../../assets/imgs/essentials.PNG';
import GetLater from '../../assets/imgs/testw.PNG';
import Groc from '../../assets/imgs/groc.PNG';
import MultiCards from '../MultiCards';



function FeaturedDeals() {
    return (
        <div className='features'>
            <div className='feature-div'>
                <label className='feature-label'>Featured Auckland deals </label>
                <label className='view-more-mob'> View More <IoIosArrowForward /></label>
                <button className='view-more'>
                    View More <IoIosArrowForward />
                </button>
            </div>
            <div className='feature-cards'>
                <MultiCards image={WFH} Header="Work from Home" />
                <MultiCards image={GetLater} Header="Grab Now, Get Later" />
                <MultiCards image={Groc} Header="Groceries on the Go" />
                <MultiCards image={Essentials} Header="Everyday Essentials Delivery" />
            </div>
        </div>
    );
}

export default FeaturedDeals;
