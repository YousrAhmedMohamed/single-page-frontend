
import React from 'react';
import './style.scss';

function MenuItem(props) {
    return <div className="menu-body">
        <span>{props.Name}</span> <span>{props.Number}</span>
    </div>
}
export default MenuItem;