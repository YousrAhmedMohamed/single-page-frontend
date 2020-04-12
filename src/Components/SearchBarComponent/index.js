import React, { useState } from 'react';
import './style.scss';
import { MdKeyboardArrowDown, MdClear } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';

const clearIcon = { width: '25px', color: '#4f5864', cursor: 'pointer', position: 'absolute', right: '5px', top: '8px', height: '25px' }
const iconSearch = { width: '24px', color: '#4f5864', position: 'absolute', left: '7px', top: '8px', height: '24px' }
const iconStyle = { width: '25px', display: 'block', color: '#01b2ee', margin: '0 5px 0 0', height: '25px' }





function SearchBar() {

    const [searchKey, setSearchKey] = useState('');
    return <div className='SearchContainer'>
        <div className='HeaderBody'>
            <div className='OptionsBody'>
                <div className='search-col'>
                    <span>Browse Categories</span>
                    <MdKeyboardArrowDown style={iconStyle} />
                </div>
                <div className='search-col'>
                    <span>What's New</span>
                </div>
                <div className='search-col'>
                    <span >Trending</span>
                </div>
                <div className='search-col'>
                    <span >For You</span>
                </div>
                <div className='search-col'>
                    <span >Christmas Gifts</span>
                </div>
            </div>
            <div className='search-Div'>
                <FiSearch style={iconSearch} />
                <input className="search-bar" name="query" value={searchKey}
                    onChange={(e) => setSearchKey(e.target.value)} type="text" placeholder="Search GrabOne"></input>
                {searchKey !== '' ?
                    <MdClear style={clearIcon} onClick={() => setSearchKey('')} /> : null}
            </div>
        </div>
    </div>
}
export default SearchBar;