
import React from 'react';
import './style.scss';

const arrayOfItems = [
    {
        name: 'Featured Auckland deals',
        number: '135'
    },
    {
        name: 'Restaurants, Bars, Cafes',
        number: '74'
    },
    {
        name: 'Activities, Events & Outdoors',
        number: '191'
    },
    {
        name: 'Beauty, Massage & Spa',
        number: '148'
    },
    {
        name: 'Store',
        number: '976'
    },
    {
        name: 'Escapes',
        number: '109'
    },
    {
        name: 'Automotive',
        number: '82'
    },
    {
        name: 'House & Garden',
        number: '500'
    },
    {
        name: 'Fitness & Sports',
        number: '52'
    },
    {
        name: 'Collections',
        number: '41'
    }]
function SideMenu() {
    return <div className="sideMenu">
        <div className="menu-header">Discover</div>
        {
            arrayOfItems.map((i) => {

                return <div className="menu-body"><span className='menu-name' >{i.name}</span> <span className="menu-number">{i.number}</span> </div>;
            })
        }

    </div>
}
export default SideMenu;